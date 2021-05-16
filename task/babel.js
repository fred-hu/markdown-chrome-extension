// babel
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const fs = require('fs');
const $ = gulpLoadPlugins();

module.exports = async function babel(cb) {
  // const data = fs.readFileSync('.babelrc', 'utf8')
  // console.log(JSON.parse(data))
  return new Promise((resolve, reject) => {
    gulp
      .src('app/scripts.babel/**/*.js')
      .pipe($.plumber())
      .pipe(
        $.babel({
          presets: ['@babel/env'],
        })
      )
      .on('error', reject)
      .pipe(gulp.dest('app/scripts').on('end', resolve));
  });
};
