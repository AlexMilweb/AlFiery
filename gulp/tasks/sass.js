"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
// Compile sass
gulp.task('sass', function () {
  gulp.src('assets/app/bs4/scss/bootstrap-flex.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/app/bs4/'));
});