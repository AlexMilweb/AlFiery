// Delete in public all files before start gulp
var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('del', function () {
  return gulp.src(['public/*', '!public/CNAME', '!public/.git'])
    .pipe(vinylPaths(del));
});