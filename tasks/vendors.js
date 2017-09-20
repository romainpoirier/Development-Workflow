// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
	  config   = require('./../config.json'),
	  taskName = 'vendors';

// Task
$.gulp.task(taskName, function() {
	$.gulp.src([
			config.paths.src.js + 'vendors/jquery/**/*.js',
			config.paths.src.js + 'vendors/**/*.js'
		])
		.pipe($.plumber(function (err) { console.log(err) } ))
		.pipe($.sourcemaps.init())
		.pipe($.concat('vendors.js'))
		.pipe($.uglify())
		.pipe($.sourcemaps.write('./maps'))
		.pipe($.gulp.dest(config.paths.dist.js))
		.pipe($.browserSync.stream())
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});