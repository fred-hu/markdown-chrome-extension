// default
const { series,parallel } = require('gulp');
const clean = require('./clean');
const build = require('./build');
module.exports = series(clean, build);