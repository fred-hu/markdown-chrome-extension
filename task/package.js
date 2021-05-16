// package
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
module.exports = async function pkg(cb) {
  const manifest = require('../dist/manifest.json');
  return new Promise((resolve, reject) => {
    gulp
      .src('dist/**')
      .pipe($.zip('markdown chrome extension-' + manifest.version + '.zip'))
      .on('error', reject)
      .pipe(gulp.dest('package'))
      .on('end', resolve);
  });
};
