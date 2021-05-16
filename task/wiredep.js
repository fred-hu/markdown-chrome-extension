// wiredep
import gulp from 'gulp';
import { stream as wiredep } from 'wiredep';
module.exports = async function wire_dep(cb) {
  return new Promise((resolve, reject) => {
    gulp
      .src('app/*.html')
      .pipe(
        wiredep({
          ignorePath: /^(\.\.\/)*\.\./,
        })
      )
      .on('error', reject)
      .pipe(gulp.dest('app'))
      .on('end', resolve);
  });
};
