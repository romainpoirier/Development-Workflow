// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'angular-scripts';

// Task
$.gulp.task(taskName, function() {
	$.gulp.src([
			config.paths.src.js + 'angular/vendors/**/*.js',
			config.paths.src.js + 'angular/data/**/*.js',
			config.paths.src.js + 'angular/app.modules.js',
			config.paths.src.js + 'angular/app.routes.js',
			config.paths.src.js + 'angular/directives/**/*.js',
			config.paths.src.js + 'angular/services/**/*.js',
			config.paths.src.js + 'angular/filters/**/*.js',
			config.paths.src.js + 'angular/controllers/**/*.js'
		])
		.pipe($.plumber(function (err) { console.log(err) } ))
		.pipe($.sourcemaps.init())
		.pipe($.concat('angular.js'))
		.pipe($.uglify())
		.pipe($.sourcemaps.write('./maps'))
		.pipe($.gulp.dest(config.paths.dist.js))
		.pipe($.browserSync.stream())
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});