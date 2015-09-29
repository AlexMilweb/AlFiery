"use strict";
var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('sftp', function () {
	return gulp.src('public/**/*')
		.pipe(sftp({
			host: '185.5.250.59',
			user: 'frontend',
			remotePath: '/home/frontend/sites/scale'
		}));
});

gulp.task('sftp-main', ['main'], function () {
	return gulp.src('public/**/*')
		.pipe(sftp({
			host: '185.5.250.59',
			user: 'frontend',
			remotePath: '/home/frontend/sites/scale'
		}));
});

gulp.task('sftp-build', ['build'], function () {
	return gulp.src('public/**/*')
		.pipe(sftp({
			host: '185.5.250.59',
			user: 'frontend',
			remotePath: '/home/frontend/sites/scale'
		}));
});