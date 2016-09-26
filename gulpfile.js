var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('config', function() {
  return gulp.src(['node_modules/vconsole/dist/vconsole.min.js', 'src/*.js'])
    .pipe(concat('vconsole.min.js', {newLine: ';'}))
    .pipe(uglify({
      output: { beautify: false }
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['config'], function() {
  //
});