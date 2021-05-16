// html
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
module.exports = async function html(cb) {
  return new Promise((resolve, reject) => {
    gulp
      .src('app/*.html')
      .pipe($.useref({ searchPath: ['.tmp', 'app', '.'] }))
      .pipe($.sourcemaps.init())
      .pipe($.if('*.js', $.uglify()))
      .pipe($.if('*.css', $.cleanCss({ compatibility: '*' })))
      .pipe($.sourcemaps.write())
      .pipe(
        $.if(
          '*.html',
          $.htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
          })
        )
      )
      .on('error', reject)
      .pipe(gulp.dest('dist'))
      .on('end', resolve);
  });
};
