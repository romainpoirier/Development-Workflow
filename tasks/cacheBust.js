// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
	  config   = require('./../config.json'),
	  taskName = 'cache-bust';

// Task
$.gulp.task(taskName, function () {
	$.gulp.src(config.paths.src.tpl + '_assets/resources/*.twig', { base: config.paths.dist.base })
		.pipe($.cacheBust({ type: 'timestamp' }))
		.pipe($.chmod(0o777))
		.pipe($.gulp.dest(config.paths.dist.base))
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});