// chromeManifest
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
module.exports = async function chromeManifest(cb) {
  return new Promise((resolve, reject) => {
    gulp
      .src('app/manifest.json')
      .pipe(
        $.chromeManifest({
          buildnumber: true,
          background: {
            target: 'scripts/background.js',
            exclude: ['scripts/chromereload.js'],
          },
        })
      )
      .pipe($.if('*.css', $.cleanCss({ compatibility: '*' })))
      .pipe($.if('*.js', $.sourcemaps.init()))
      .pipe($.if('*.js', $.uglify()))
      .pipe($.if('*.js', $.sourcemaps.write('.')))
      .on('error', reject)
      .pipe(gulp.dest('dist'))
      .on('end', resolve);
  });
};
