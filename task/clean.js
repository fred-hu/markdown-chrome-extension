// clean
const del = require('del');
module.exports = async function clean(cb) {
  await del(['.tmp', 'dist']);
  cb();
};
