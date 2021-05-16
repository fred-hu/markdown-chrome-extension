const gulp = require('gulp');
const browserify = require('gulp-browserify');
module.exports = async function Browserify(cb) {
  // Single entry point to browserify
  return new Promise((resolve, reject) => {
    gulp
      .src('app/scripts/background.js')
      .pipe(
        browserify({
          insertGlobals: true,
        })
      )
      .on('error', reject)
      .pipe(gulp.dest('app/scripts'))
      .on('end', resolve);
  });
};
