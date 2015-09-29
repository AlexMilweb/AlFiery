"use strict";
var gulp = require('gulp');
var concats = require('gulp-concat');
var order = require("gulp-order");
var src = {};

src.appCss = {
		'files': [
			'public/app/bs3.css',
			'public/font/**/*.css',
			'public/app/app.css',
			'public/blocks/**/*.css',
			'public/app/vendor/fotorama/fotorama.css',
			'public/app/vendor/owl-carousel/owl.carousel.css',
			'public/app/vendor/owl-carousel/owl.theme.default.min.css',
			'public/app/vendor/ion-slider/ion.rangeSlider.css',
			'public/app/vendor/ion-slider/ion.rangeSlider.skinNice.css'
		],
		'dest': 'public/app'
};

gulp.task('concat', function () {
		return gulp.src(src.appCss.files)
			.pipe(order(src.appCss.files))
			.pipe(concats('app.css'))
			.pipe(gulp.dest(src.appCss.dest));
});