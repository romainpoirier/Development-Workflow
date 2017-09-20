// Init
const $      = require('gulp-load-plugins')({ pattern: ['*'] }),
      config = require('./../config.json');

// Task
$.gulp.task('browsersync', function() {
    $.browserSync.init({
        proxy: config.urls.host
    });
});