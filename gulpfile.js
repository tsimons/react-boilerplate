var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
;

gulp.task('js', function () {
  return gulp.src('client/js/index.jsx')
    .pipe(browserify({
      extensions: [".jsx"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});