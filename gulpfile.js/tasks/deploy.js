'use strict';

var config  = require('../config');
var ghPages = require('gulp-gh-pages');
var gulp    = require('gulp');
var open    = require('open');
var os      = require('os');
var pkg     = require('../../package.json'); // package is reserved word
var path    = require('path');

var settings = {
  url: pkg.homepage,
  src: path.join(config.root.dest, '/**/*'),
  ghPages: {
    cacheDir: path.join(os.tmpdir(), pkg.name)
  }
};

var deployTask = function deployTask() {
  return gulp.src(settings.src).pipe(ghPages(settings.ghPages)).on('end', function () {
    open(settings.url);
  });
};

gulp.task('deploy', ['production'], deployTask);
module.exports = deployTask;