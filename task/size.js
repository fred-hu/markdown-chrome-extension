// size
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
module.exports = async function size(cb) {
  await gulp.src('dist/**/*').pipe($.size({ title: 'build', gzip: true }));
  cb();
};