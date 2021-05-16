// build
const { series, parallel } = require('gulp');
const lint = require('./lint');
const babel = require('./babel');
const chromeManifest = require('./chromeManifest');
const html = require('./html');
const images = require('./images');
const extras = require('./extras');
const size = require('./size');
const browserify = require('./browserify');
module.exports = series(
  parallel(lint, babel),
  browserify,
  chromeManifest,
  parallel(html, images, extras),
  size
);
