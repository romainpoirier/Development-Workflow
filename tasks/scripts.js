// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'scripts';

// Task
$.gulp.task(taskName, function() {
	$.gulp.src([
			config.paths.src.js + 'scripts/utils/**/*.js',
			config.paths.src.js + 'scripts/plugins/**/*.js',
			config.paths.src.js + 'scripts/**/*.js'
		])
		.pipe($.plumber(function (err) { console.log(err) } ))
		.pipe($.sourcemaps.init())
		.pipe($.concat('scripts.js'))
		.pipe($.uglify())
		.pipe($.sourcemaps.write('./maps'))
		.pipe($.gulp.dest(config.paths.dist.js))
		.pipe($.browserSync.stream())
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});