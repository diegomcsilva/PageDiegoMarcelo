var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
    return gulp.src('Style/sass/**/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('Style/css'));
});