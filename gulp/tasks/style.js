"use strict";
var gulp = require('gulp');
var newer = require('gulp-newer');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// var lost = require('lost');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var errorHandler = require('../utils/errorHandler');
var src = {};
var browsers ={};


// Sourse files
src.styl = {
		'files': [
				'assets/**/**/*.styl'
		],
		'dest': 'public/app',
		'name': 'all.min.css',
		'ignore': 'assets/**/_*.styl'
};

// Ignored files
src.styl.files.push('!'+src.styl.ignore);

// Options autoprefixer version browsers
var autoprefixerOptions = {
	browsers: [
			'android > 4',
			'chrome > 42',
			'firefox > 37',
			'ie > 8',
			'ios > 7',
			'opera > 28',
			'safari > 7'
		], cascade: false
	};

// Complite STYLUS and automatically Prefix CSS
gulp.task('stylus', function() {
	return gulp.src(src.styl.files)
				.pipe(plumber({errorHandler: onError}))
				.pipe(stylus())
				.pipe(postcss([
					autoprefixer()
				]))
				.pipe(gulp.dest('public'))
				.pipe(browserSync.reload({stream: true}));
});

gulp.task('stylusNoFlexbox', function() {
	return gulp.src(['assets/app/no-flexbox.styl'])
				.pipe(plumber({errorHandler: onError}))
				.pipe(stylus())
				.pipe(postcss([
					autoprefixer()
				]))
				.pipe(gulp.dest('public/app'))
				.pipe(browserSync.reload({stream: true}));
});