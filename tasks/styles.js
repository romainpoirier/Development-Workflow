// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'styles';

// Task
$.gulp.task(taskName, function() {
	$.gulp.src(config.paths.src.css + 'main.scss')
		.pipe($.plumber(function (err) { console.log(err) } ))
		.pipe($.sourcemaps.init())
		.pipe($.sass())
		.pipe($.autoprefixer('last 6 versions'))
		.pipe($.concat('styles.css'))
		.pipe($.cleanCss({ level: { 1: { specialComments: 0 } } }))
		.pipe($.sourcemaps.write('./maps'))
		.pipe($.gulp.dest(config.paths.dist.css))
		.pipe($.browserSync.stream())
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});
