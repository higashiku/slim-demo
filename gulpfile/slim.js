var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var slim    = require("gulp-slim");
var conf    = require('../config');

gulp.task('slim', function() {
  gulp.src(conf.slim.src)
		.pipe(plumber())
		.pipe(slim({
			 pretty: true
		}))
		.pipe(gulp.dest(conf.slim.dest))
		;
});
