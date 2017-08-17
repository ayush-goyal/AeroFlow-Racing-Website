var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var changed = require('gulp-changed');
var htmlmin = require('gulp-htmlmin');


function onError(error) {
	console.log(error);
	this.emit('end');
}

gulp.task('clean', function() {
	return del([
		'dist/**/*'
	]);
});

gulp.task('sass', function() {
	return gulp.src('src/sass/main.scss')
		.pipe(changed('dist/css/'))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', onError)
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(changed('dist/js/'))
		.pipe(uglify())
		.on('error', onError)
		.pipe(gulp.dest('dist/js/'))
})

gulp.task('css', function() {
	return gulp.src('src/css/**/*')
		.pipe(gulp.dest('dist/css/'))
})

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(changed('dist/'))
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.on('error', onError)
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
	return gulp.src(['src/favicon.ico', 'CNAME'])
		.pipe(gulp.dest('dist/'))
})

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts/'))
})

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/img/**', ['img']);
	gulp.watch('src/js/**', ['js']);
	gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['sass', 'html', 'img', 'js', 'css', 'extras', 'fonts'], function() {
	console.log('Building dist folder...');
});