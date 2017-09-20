// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'google-fonts';

// Task
$.gulp.task(taskName, function () {
	$.gulp.src(config.paths.src.fonts + 'googlefonts.list')
		.pipe($.googleWebfonts({
			fontsDir    : '../fonts/',
			cssDir      : '../../../src/sass/base/',
			cssFilename : '_googlefonts.scss'
		}))
		.pipe($.gulp.dest(config.paths.dist.fonts))
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});