// watch
import gulp from 'gulp';
const { series, parallel } = require('gulp');
import gulpLoadPlugins from 'gulp-load-plugins';
const lint = require('./lint');
const babel = require('./babel');
const browserify = require('./browserify');
const $ = gulpLoadPlugins();

const liver = async (cb) => {
  $.livereload.listen();
  gulp
    .watch([
      'app/*.html',
      'app/scripts/**/*.js',
      '!app/scripts/background.js',
      'app/images/**/*',
      'app/styles/**/*',
      'app/_locales/**/*.json',
    ])
    .on('change', $.livereload.reload);

  gulp.watch(
    'app/scripts.babel/**/*.js',
    series(parallel('lint', 'babel'), browserify, function reload(callback) {
      $.livereload.reload('app/scripts/background.js');
      callback();
    })
  );
  gulp.watch('bower.json', parallel('wiredep'));
  cb();
};
module.exports = series(parallel(lint, babel), browserify, liver);
