var config = require('../../config');

if (!config.tasks.iconFont) {
  throw new Error("Configuration deactivates this task.");
  return;
};

var gulp             = require('gulp');
var iconfont         = require('gulp-iconfont');
var generateIconSass = require('./generateIconSass');
var handleErrors     = require('../../lib/handleErrors');
var pkg              = require('../../../package.json'); //Package is a reserved word now
var path             = require('path');
var url              = require('url');

var fontPath = path.join(config.root.dest, config.tasks.iconFont.dest);
var cssPath = path.join(config.root.dest, config.tasks.css.dest);

var settings = {
  name: pkg.name + ' icons',
  src: path.join(config.root.src, config.tasks.iconFont.src, '/*.svg'),
  dest: path.join(config.root.dest, config.tasks.iconFont.dest),
  sassDest: path.join(config.root.src, config.tasks.css.src, config.tasks.iconFont.sassDest),
  template: path.normalize('./gulp/tasks/iconFont/template.sass'),
  sassOutputName: '_icons.sass',
  fontPath: url.resolve('.', path.relative(cssPath, fontPath)),
  className: 'icon',
  options: {
    timestamp: 0, // see https://github.com/fontello/svg2ttf/issues/33
    fontName: 'icons',
    normalize: false,
    formats: config.tasks.iconFont.extensions
  }
};

var iconFontTask = function iconFontTask() {
  return gulp.src(settings.src).pipe(iconfont(settings.options)).on('glyphs', generateIconSass(settings)).on('error', handleErrors).pipe(gulp.dest(settings.dest));
};

gulp.task('iconFont', iconFontTask);
module.exports = iconFontTask;