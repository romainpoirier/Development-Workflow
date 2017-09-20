// Init
const $           = require('gulp-load-plugins')({ pattern: ['*'] }),
	  config      = require('./../config.json'),
	  cliReporter = require('./../node_modules/pa11y/reporter/cli.js');

// Run test on each template
function doSynchronousLoop(data, processData, done) {
	if (data.length > 0) {
		const loop = (data, i, processData, done) => {
			processData(data[i], i, () => {
				if (++i < data.length) {
					loop(data, i, processData, done);
				} else {
					done();
				}
			});
		};
		loop(data, 0, processData, done);
	} else {
		done();
	}
}

function processAccessibility(element, i, callback) {
	$.pa11y({ ignore:[ 'notice', 'warning'] }).run(config.urls.host, function (error, results) {
		cliReporter.results(results, config.urls.host + '/' + element.url);
		callback();
	});
}

// Task
$.gulp.task('accessibility', (callback) => {
	doSynchronousLoop(config.globs.critical, processAccessibility, () => {
		callback();
	});
});