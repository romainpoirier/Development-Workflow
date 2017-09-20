// Init
const $        = require('gulp-load-plugins')({ pattern: ['*'] }),
      config   = require('./../config.json'),
      taskName = 'favicons';

$.gulp.task(taskName, () => {
	$.gulp.src(config.paths.src.fav + 'favicon.png').pipe($.favicons({
			appName          : config.vars.projectName,
			background       : config.vars.iconBackground,
			theme_color      : config.vars.themeColor,
			path             : '/resources/fav',
			html             : config.paths.src.tpl + '_includes/' + 'favicons.twig',
			display          : 'browser',
			orientation      : 'portrait',
			start_url        : null,
			replace          : true,
			icons            : {
				android      : true,  // Create Android homescreen icon. `boolean`
				appleIcon    : true,  // Create Apple touch icons. `boolean`
				appleStartup : false, // Create Apple startup images. `boolean`
				coast        : false, // Create Opera Coast icon. `boolean`
				favicons     : true,  // Create regular favicons. `boolean`
				firefox      : true,  // Create Firefox OS icons. `boolean`
				opengraph    : false, // Create Facebook OpenGraph image. `boolean`
				twitter      : false, // Create Twitter Summary Card image. `boolean`
				windows      : true,  // Create Windows 8 tile icons. `boolean`
				yandex       : false  // Create Yandex browser icon. `boolean`
			},
		}))
		.pipe($.gulp.dest(config.paths.dist.fav))
		.pipe($.notify({ message: '✅ ' + taskName, onLast: true }));
});