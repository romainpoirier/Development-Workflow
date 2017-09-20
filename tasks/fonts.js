// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'fonts';

// Task
$.gulp.task(taskName, function() {
	$.gulp.src(config.paths.src.fonts + '**/*.{eot,svg,ttf,woff,woff2}')
		.pipe($.gulp.dest(config.paths.dist.fonts))
		.pipe($.browserSync.stream())
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});