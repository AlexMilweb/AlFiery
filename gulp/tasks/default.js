"use strict";
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

gulp.task('main', function(cb) {
	runSequence('del',
				'sass',
				'stylus',
				'app',
					['images',
					'font',
					'_images',
					], 'jade', cb);
});

gulp.task('default', function(cb) {
	runSequence('main', 'watch', 'server', cb);
});


// gulp.task('build', function(cb) {
// 	runSequence('del',
// 				'sass',
// 				'stylus',
// 				'app',
// 				'concat',
// 					['images',
// 					'font',
// 					'_images',
// 					'index',
// 					'doc'
// 					], 'buildjade', 'server', cb);
// });