// lint
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
module.exports = async function lint (cb) {
  await gulp.src('app/scripts.babel/**/*.js').pipe($.eslint({
    env: {
      es6: true,
    },
  })).pipe($.eslint.format())
  cb();
};
