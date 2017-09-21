//gulp.js 配置
var gulp = require('gulp');
var postcss = require('gulp-postcss');

//应用postcss插件
gulp.task('css', function() {
	return gulp.src('src/main.css')
		.pipe(postcss([
			require('autoprefixer')({}),
			require('cssnano')
			])
		)
		.pipe(gulp.dest('dest/css'));
});

//default task
gulp.task('default', function() {
	// body...
});

//watcher
var watcher = gulp.watch('src/**/*',['css']);
watcher.on('change', function(e) {
	console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
});
