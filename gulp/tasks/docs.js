"use strict";
var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var newer = require('gulp-newer');
var plumber = require('gulp-plumber');
var errorHandler = require('../utils/errorHandler');
var rename = require("gulp-rename");
var src = {};

// Sourse files
src.fileBlocks = {
		'files': [
		'assets/blocks/*.*', 
		'assets/blocks/**/*.*'
		],
		'dest': 'public/blocks'
};

// Creat index.html
gulp.task('index', function() {
	return gulp.src('assets/pages/_index.jade')
					.pipe(plumber({errorHandler: onError}))
					.pipe(jade({
						pretty: true,
						basedir: 'assets'
					}))
					.pipe(rename('index.html'))
					.pipe(gulp.dest('public'))
					.pipe(browserSync.reload({stream: true}));
});

// Copy docs file functional At (docs)
gulp.task('docsFile', function() {
	return gulp.src(['assets/docs/*.{js,css}'])
					.pipe(newer('public/docs'))
					.pipe(gulp.dest('public/docs'))
					.pipe(browserSync.reload({stream: true}));
});

// Copy All blocks *.styl and *.jade At (blocks)
gulp.task('docs', function() {
	return gulp.src(src.fileBlocks.files)
					.pipe(newer('public/blocks'))
					.pipe(gulp.dest(src.fileBlocks.dest))
					.pipe(browserSync.reload({stream: true}));
});


gulp.task('doc', [
	'docs',
	'docsFile',
	'index'
]);