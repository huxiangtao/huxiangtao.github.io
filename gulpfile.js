/**
 * Created by huxiangtao on 2017/3/20.
 */
var gulp = require('gulp'),
    jsmin = require('gulp-jsmin'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean');

/*style start*/
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

gulp.task('fontsclean',function() {
    return gulp.src('dist/fonts/*', {read: false})
        .pipe(clean());
})


var bootNodePath = 'node_modules/bootstrap-sass/assets/';
gulp.task('bootstrap',['bootclean'],function() {
    return gulp.src(bootNodePath+'stylesheets/bootstrap/**')
        .pipe(gulp.dest('_sass/bootstrap'))
})

gulp.task('fonts',['fontsclean'],function() {
    return gulp.src(bootNodePath+'fonts/**')
        .pipe(gulp.dest('dist/fonts'))
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
/*style end*/

/*javascript start*/
gulp.task('jsnodeclean',function() {
    return gulp.src('dist/js/node_modules/*', {read: false})
        .pipe(clean());
})
gulp.task('node_modules',['jsnodeclean'],function() {
    return gulp.src([
        'node_modules/requirejs/require.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/lunr/lunr.min.js',
    ]).pipe(gulp.dest('dist/js/node_modules'))
})
gulp.task('jsmoudleclean',function() {
    return gulp.src('dist/js/modules/*', {read: false})
        .pipe(clean());
})

gulp.task('js',['jsmoudleclean'],function() {
    return gulp.src('_js/modules/**')
        .pipe(gulp.dest('dist/js/modules'));
})
gulp.task('mainjsclean',function() {
    return gulp.src('dist/js/main.js')
        .pipe(clean());
})
gulp.task('mainjs',['mainjsclean'],function() {
    return gulp.src('_js/main.js')
        .pipe(gulp.dest('dist/js'));
})


/*javascript end*/



gulp.task('cssbuild',['sass','images','fonts']);

gulp.task('jsbuild',['node_modules','mainjs','js']);
