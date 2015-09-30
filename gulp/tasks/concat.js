// "use strict";
// var gulp = require('gulp');
// var concats = require('gulp-concat');
// var order = require("gulp-order");
// var src = {};

// src.appCss = {
// 		'files': [
// 				'public/app/app.css',
// 				'public/blocks/**/*.css'
// 		],
// 		'dest': 'public/app'
// };

// gulp.task('concat', function () {
// 		return gulp.src(src.appCss.files)
// 			.pipe(order(src.appCss.files))
// 			.pipe(concats('app.css'))
// 			.pipe(gulp.dest(src.appCss.dest));
// });