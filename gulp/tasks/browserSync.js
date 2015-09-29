'use strict';

// All browserSync
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gutil = require('gulp-util');

// Gulp --open open browser page localhost:3000
var serverOpen = false,
		reloadBrowser = false;
if(gutil.env.open === true){
	serverOpen = true;
};
if(gutil.env.live === true){
	reloadBrowser = true;
};

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: "public"
    },
    open: serverOpen,
    codeSync: reloadBrowser
  });
});