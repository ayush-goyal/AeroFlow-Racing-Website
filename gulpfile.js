var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var changed = require('gulp-changed');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass', function() {
	return gulp.src('src/scss/main.scss')
		.pipe(changed('dist/css/'))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(changed('dist/js/'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'))
})

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(changed('dist/'))
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('img', function() {
	return gulp.src(['src/img/**/*.+(png|jpg|svg)', '!src/img/**/other/**'])
		.pipe(changed('dist/img/'))
		.pipe(imagemin({
			verbose: true
		}))
		.pipe(gulp.dest('dist/img/'))
})

gulp.task('extras', function() {
	return gulp.src('src/favicon.ico')
		.pipe(gulp.dest('dist/'))
})

gulp.task('watch', function() {
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/img/**', ['img']);
	gulp.watch('src/js/**', ['js']);
	gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['sass', 'html', 'img', 'js', 'extras'], function() {
	console.log('Building dist folder...');
});