var gulp  = require('gulp');
var watch = require('gulp-watch');
var conf  = require('../config');

// Individual 'watch' tasks ------------

gulp.task('slim:watch', function () {
  watch(conf.slim.src, function () {
    gulp.start(['slim']);
  });
});

// Default 'watch' task ------------

gulp.task('default', function() {
  watch(conf.slim.watch, function () {
    gulp.start(['slim']);
  });
});

