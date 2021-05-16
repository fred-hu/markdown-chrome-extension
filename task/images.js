// images
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const FileType = require('file-type');
const $ = gulpLoadPlugins();
async function isImage(file) {
  const info = await FileType.fromBuffer(file._contents);
  return /^image/.test(info.mime);
}
module.exports = async function images(cb) {
  return new Promise((resolve, reject) => {
    gulp
      .src('app/images/**/*')
      .pipe(
        $.if(
          isImage,
          $.cache(
            $.imagemin({
              progressive: true,
              interlaced: true,
              optimizationLevel: 5,
              // don't remove IDs from SVGs, they are often used
              // as hooks for embedding and styling
              svgoPlugins: [{ cleanupIDs: false }],
            })
          ).on('error', function (err) {
            console.log(err);
            this.end();
          })
        )
      )
      .on('error', reject)
      .pipe(gulp.dest('dist/images'))
      .on('end', resolve);
  });
};
