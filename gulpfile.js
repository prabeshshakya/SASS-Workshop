var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
	dist: "./dist/",
	src: "./src/"
}

gulp.task('sass', function() {
    gulp.src(path.src + 'sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.dist + 'css/'))
});

//Watch task
gulp.task('watch',['sass'], function(){
	 gulp.watch(path.src + 'sass/**/*.scss',['sass']);
});