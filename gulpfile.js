var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , rename = require('gulp-rename')
  , sass = require('gulp-sass')
  , livereload = require('gulp-livereload')
  , notify = require('gulp-notify')
  , plumber = require('gulp-plumber')
;

gulp.task('css', function () {
  return gulp.src('client/sass/app.scss')
    .pipe(sass({
      onSuccess: notify({
        title: 'Sass',
        message: 'Successfully Compiled',
        icon: 'assets/sass.png'
      }),
      onError: function (err) {
        return notify().write(err);
      }
    }))
    .pipe(gulp.dest('client/build/css'))
    .pipe(notify({
      title: 'Sass',
      message: 'Successfully compiled',
      icon: 'assets/sass.png'
    }))
    .pipe(livereload())
  ;
})

gulp.task('js', function () {
  return gulp.src('client/js/index.jsx')
    .pipe(plumber({errorHandler: notify.onError({
      title: 'ERROR',
      message: '<%= error.message %>',
      icon: 'assets/js.png'
    })}))
    .pipe(browserify({
      extensions: ['.jsx']
    }))
    .pipe(uglify())
    .pipe(rename('app.js'))
    .pipe(gulp.dest('client/build/js'))
    .pipe(notify({
      title: 'SUCCESS',
      icon: 'assets/js.png'
    }))
    .pipe(livereload())
  ;
});

gulp.task('watch', function () {
  livereload.listen();
  console.log('Now listening for changes...');
  gulp.watch(['client/js/**/*.js', 'client/js/**/*.jsx'], ['js']);
  gulp.watch(['client/sass/**/*.scss'], ['css']);
})

gulp.task('default', ['watch', 'js', 'css'], function () {
});