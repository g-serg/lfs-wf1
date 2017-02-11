var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/style/*.sass')
    .pipe(plumber({
      errorHandler: notify.onError(function(error) {
        return {
          title: 'Styles',
          message: error.message
        };
      })
    }))
    .pipe(sass())
    .pipe(gulp.dest('build/style/'));
});

gulp.task('default', function(callback) {
  gulp.watch('app/style/*.sass', gulp.series('sass'));
});

gulp.task('test', gulp.series('sass'));