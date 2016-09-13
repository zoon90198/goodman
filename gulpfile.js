var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

gulp.task('sass', function() {
	return gulp.src('./src/**/*.scss')
						 .pipe(sass().on('error', sass.logError))
						 .pipe(gulp.dest('./public/stylesheets/'))
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', ['watch'])