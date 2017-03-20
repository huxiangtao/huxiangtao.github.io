/**
 * Created by huxiangtao on 2017/3/20.
 */
var gulp = require('gulp'),
    jsmin = require('gulp-jsmin'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean');

gulp.task('styleclean',function() {
    return gulp.src('dist/css/*', {read: false})
        .pipe(clean());
});

gulp.task('bootclean',function() {
    return gulp.src('_sass/bootstrap/*')
        .pipe(clean());
})

gulp.task('imagesclean',function() {
    return gulp.src('dist/images/*', {read: false})
        .pipe(clean());
})

var bootNodePath = 'node_modules/bootstrap-sass/assets/';
gulp.task('bootstrap',['bootclean'],function() {
    return gulp.src([bootNodePath+'stylesheets/**',bootNodePath+'fonts/**'])
        .pipe(gulp.dest('_sass/bootstrap'))
})


gulp.task('sass',['styleclean','bootstrap'],function() {
    return gulp.src('_sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images',['imagesclean'],function() {
    return gulp.src('_sass/images/**')
        .pipe(gulp.dest('dist/images'))
})

gulp.task('basebuild',['sass','images']);
