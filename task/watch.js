// watch
import gulp from 'gulp';
const { series, parallel } = require('gulp');
import gulpLoadPlugins from 'gulp-load-plugins';
const lint = require('./lint');
const babel = require('./babel');
const $ = gulpLoadPlugins();

const liver = async (cb) => {
  $.livereload.listen();
  gulp
    .watch([
      'app/*.html',
      'app/scripts/**/*.js',
      'app/images/**/*',
      'app/styles/**/*',
      'app/_locales/**/*.json',
    ])
    .on('change', $.livereload.reload);

  gulp.watch('app/scripts.babel/**/*.js', parallel('lint', 'babel'));
  gulp.watch('bower.json', parallel('wiredep'));
  await cb();
};
module.exports = series(parallel(lint, babel), liver);
