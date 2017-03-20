/**
 * Created by huxiangtao on 2017/3/20.
 */
var gulp = require('gulp'),
    jsmin = require('gulp-jsmin'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean');

gulp.task('styleclean',function() {
    return gulp.src('dist/css', {read: false})
        .pipe(clean());
});

gulp.task('fontsclean',function() {
    return gulp.src('dist/fonts', {read: false})
        .pipe(clean());
});

gulp.task('bootclean',function() {
    return gulp.src('_sass/bootstrap/*')
        .pipe(clean());
})
gulp.task('bootstrap',['bootclean'],function() {
    return gulp.src('node_modules/bootstrap-sass/assets/stylesheets/**')
        .pipe(gulp.dest('_sass/bootstrap'))
})


gulp.task('fonts',['fontsclean'],function() {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/**')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('sass',['styleclean','bootstrap'],function() {
    return gulp.src(['_sass/main.scss','_sass/custom/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('basebuild',['fonts','sass']);
