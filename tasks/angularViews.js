// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'angular-views';

// Task
$.gulp.task(taskName, function() {
	$.gulp.src(config.paths.src.js + 'angular/views/**/*.{html,tpl,twig}')
		.pipe($.gulp.dest(config.paths.dist.tpl))
		.pipe($.browserSync.stream())
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});