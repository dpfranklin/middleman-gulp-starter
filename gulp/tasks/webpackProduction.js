var config = require('../config');

if (!config.tasks.js) {
  throw new Error("Configuration disallows this task.");
  return;
};

var config  = require('../lib/webpack-multi-config')('production');
var gulp    = require('gulp');
var logger  = require('../lib/compileLogger');
var webpack = require('webpack');

var webpackProductionTask = function webpackProductionTask(callback) {
  webpack(config, function (err, stats) {
    logger(err, stats);
    callback();
  });
};

gulp.task('webpack:production', webpackProductionTask);
module.exports = webpackProductionTask;