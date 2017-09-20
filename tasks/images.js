// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'images';

// Task
$.gulp.task(taskName, function() {
	$.gulp.src(config.paths.src.img + '**/*.{gif,jpg,jpeg,png,svg}')
		.pipe($.imagemin({
			optimizationLevel : 7,
			progressive       : true,
			interlaced        : true,
			multipass         : true,
			svgoPlugins       : [{
				removeViewBox              : false,
				removeUselessStrokeAndFill : true,
				removeEmptyAttrs           : true
			}]
		}))
		.pipe($.gulp.dest(config.paths.dist.img))
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});