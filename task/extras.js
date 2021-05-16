// extras
import gulp from 'gulp';
module.exports = async function extras(cb) {
  return new Promise((resolve, reject) => {
    gulp
      .src(
        [
          'app/*.*',
          'app/html/*.html',
          'app/_locales/**',
          '!app/scripts.babel',
          '!app/*.json',
          '!app/*.html',
        ],
        {
          base: 'app',
          dot: true,
        }
      )
      .on('error', reject)
      .pipe(gulp.dest('dist'))
      .on('end', resolve);
  });
};
