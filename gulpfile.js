/* ================================================== */
/* INIT
/* ================================================== */

var $      = require('gulp-load-plugins')({ pattern: ['*'] }),
	config = require('./config.json')
	tasks  = $.requireDir('./../../tasks');


/* ================================================== */
/* TASKS
/* ================================================== */

$.gulp.task('default', ['cache-bust', 'browsersync'], function() {
	$.gulp.watch(config.paths.src.fav + 'favicon.png', ['favicons']);
	$.gulp.watch(config.paths.src.fonts + 'fonts/**/*.{eot,svg,ttf,woff,woff2}', ['fonts']);
	$.gulp.watch(config.paths.src.img + 'img/**/*.{gif,jpg,jpeg,png,svg}', ['images']);

	$.gulp.watch(config.paths.src.js + 'vendors/**/*.js', ['vendors']);
	$.gulp.watch(config.paths.src.js + 'scripts/**/*.js', ['scripts']);
	$.gulp.watch(config.paths.src.js + 'angular/**/*.js', ['angular-scripts']);
	$.gulp.watch(config.paths.src.js + 'angular/views/**/*.{html,tpl,twig}', ['angular-views']);

	$.gulp.watch(config.paths.src.css + '**/**/*.scss', ['styles']);

	$.gulp.watch(config.paths.src.tpl + '**/*.{html,htm,twig}').on('change', $.browserSync.reload);
});
