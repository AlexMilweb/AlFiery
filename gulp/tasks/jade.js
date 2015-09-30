"use strict";
var gulp = require('gulp');
var newer = require('gulp-newer');
var plumber = require('gulp-plumber');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');
var jade = require('gulp-jade');
var reload = browserSync.reload;
var src = {};
var html2jade = require('gulp-html2jade');
var options = {nspaces:4};


gulp.task('htmljade', function(){
  gulp.src('assets/tmp/index.html')
    .pipe(html2jade(options))
    .pipe(gulp.dest('tmp'));
});

// // Ignored files
// src.jade.files.push('!'+src.jade.ignore);

// // Complite JADE and inject links CSS
gulp.task('jade', function() {
// 	var sources = gulp.src([
// 							'./public/app/bs4/bootstrap-flex.css',
// 							'./public/app/vendor/fancybox/jquery.fancybox.css',
// 							'./public/font/**/*.css',
// 							'./public/app/app.css',
// 							'./public/blocks/**/*.css',
// 							'./public/app/vendor/fotorama/fotorama.css',
// 							'./public/app/vendor/bootstrap/bootstrap.min.js',
// 							'./public/app/vendor/fotorama/fotorama.js', 
// 							'./public/app/vendor/fancybox/jquery.fancybox.pack.js', 
// 							'./public/app/*.js', 
// 							], {read: false});

	return gulp.src(['assets/pages/*.jade', '!assets/**/_*.jade', '!./assets/pages/blocks.jade'])
		.pipe(plumber({errorHandler: onError}))
			.pipe(jade({
				pretty: true,
				basedir: 'assets'
			}))
		// 	.pipe(inject(sources , {
		// 		transform: function(filepath) {
		// 				var str = filepath;
		// 				var res = str.substring(7);
		// 				if (filepath.slice(-3) === '.js') {
		// 						return '<script src="' + res + '"></script>';
		// 				} else if(filepath.slice(-4) === '.css') {
		// 						return '<link rel="stylesheet" href="' + res + '">';
		// 				}
		// 				return inject.transform.apply(inject.transform, arguments);
		// 		}
		// }))
		.pipe(gulp.dest('public'))
		.pipe(browserSync.reload({stream: true}));
});

// // Complite JADE and inject links CSS
// gulp.task('buildjade', function() {
// 	var sources = gulp.src([
// 							'./public/app/bs4/bootstrap-flex.css',
// 							'./public/font/**/*.css',
// 							'./public/app/app.css',
// 							'./public/app/vendor/fotorama/fotorama.css',
// 							'./public/app/vendor/bootstrap/bootstrap.min.js',
// 							'./public/app/vendor/fotorama/fotorama.js', 
// 							'./public/app/common.js', 
// 							], {read: false});
// 	return gulp.src(['assets/pages/*.jade', '!assets/**/_*.jade', '!./assets/pages/blocks.jade'])
// 		.pipe(plumber({errorHandler: onError}))
// 			.pipe(jade({
// 				pretty: true,
// 				basedir: 'assets'
// 			}))
// 			.pipe(inject(sources , {
// 				transform: function(filepath) {
// 						var str = filepath;
// 						var res = str.substring(7);
// 						if (filepath.slice(-3) === '.js') {
// 								return '<script src="' + res + '"></script>';
// 						} else if(filepath.slice(-4) === '.css') {
// 								return '<link rel="stylesheet" href="' + res + '">';
// 						}
// 						return inject.transform.apply(inject.transform, arguments);
// 				}
// 		}))
// 		.pipe(gulp.dest('public/pages'))
// 		.pipe(browserSync.reload({stream: true}));
// });