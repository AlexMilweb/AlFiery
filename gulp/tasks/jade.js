"use strict";
var gulp = require('gulp');
var newer = require('gulp-newer');
var plumber = require('gulp-plumber');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');
var jade = require('gulp-jade');
var reload = browserSync.reload;
var src = {};

// Sourse files
src.jade = {
		'files': [
				'assets/**/**/*.jade'
		],
		'dest': 'public/pages/',
		'ignore': [
		'assets/**/_*.jade',
		'assets/pages/blocks.jade'
		]
};


// Ignored files
src.jade.files.push('!'+src.jade.ignore);

// Complite JADE and inject links CSS
gulp.task('jade', function() {
	var sources = gulp.src([
							'./public/app/bs3.css',
							'./public/font/**/*.css',
							'./public/app/app.css',
							'./public/blocks/**/*.css',
							'./public/app/vendor/fotorama/fotorama.css',
							'./public/app/vendor/owl-carousel/owl.carousel.css',
							'./public/app/vendor/owl-carousel/owl.theme.default.min.css',
							'./public/app/vendor/ion-slider/ion.rangeSlider.css',
							'./public/app/vendor/ion-slider/ion.rangeSlider.skinNice.css'
							], {read: false});

	return gulp.src(['assets/pages/*.jade', '!assets/**/_*.jade', '!./assets/pages/blocks.jade'])
		.pipe(plumber({errorHandler: onError}))
			.pipe(jade({
				pretty: true,
				basedir: 'assets'
			}))
			.pipe(inject(sources , {
				transform: function(filepath) {
					var str = filepath;
					var res = str.substring(7);
					if (filepath.slice(-3) === '.js') {
						return '<script src="' + res + '"></script>';
					} else if(filepath.slice(-4) === '.css') {
						return '<link rel="stylesheet" href="' + res + '">';
					}
					return inject.transform.apply(inject.transform, arguments);
				}
		}))
		.pipe(gulp.dest('public/pages'))
		.pipe(browserSync.reload({stream: true}));
});

// Complite JADE and inject links CSS
gulp.task('buildjade', function() {
	var sources = gulp.src([
							'./public/app/app.css',
							], {read: false});
	return gulp.src(['assets/pages/*.jade', '!assets/**/_*.jade', '!./assets/pages/blocks.jade'])
		.pipe(plumber({errorHandler: onError}))
			.pipe(jade({
				pretty: true,
				basedir: 'assets'
			}))
			.pipe(inject(sources , {
				transform: function(filepath) {
					var str = filepath;
					var res = str.substring(7);
					if (filepath.slice(-3) === '.js') {
						return '<script src="' + res + '"></script>';
					} else if(filepath.slice(-4) === '.css') {
						return '<link rel="stylesheet" href="' + res + '">';
					}
					return inject.transform.apply(inject.transform, arguments);
				}
		}))
		.pipe(gulp.dest('public/pages'))
		.pipe(browserSync.reload({stream: true}));
});