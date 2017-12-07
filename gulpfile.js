var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
})
gulp.task('watch', function () {
    gulp.watch("css/*.scss", ['sass'])
})
