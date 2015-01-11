var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , rename = require('gulp-rename')
  , livereload = require('gulp-livereload')
;

gulp.task('js', function () {
  return gulp.src('client/js/index.jsx')
    .pipe(browserify({
      extensions: [".jsx"]
    }))
    .pipe(uglify())
    .pipe(rename('app.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(livereload())
});

gulp.task('watch', function () {
  livereload.listen();
  console.log('Now listening for changes...');
  gulp.watch(['client/js/**/*.js', 'client/js/**/*.jsx'], ['js']);
})

gulp.task('default', ['watch', 'js'], function () {
});