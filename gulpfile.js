const gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('tests', function(){
    gulp.src([
        './tests/*.js'
    ]).pipe(mocha())
})

gulp.task('watcher', function(){
    gulp.watch('./*.js',['tests'])
})