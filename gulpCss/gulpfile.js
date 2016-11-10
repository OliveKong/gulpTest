// 获取gulp
var gulp = require('gulp');

// 获取gulp-minify-css
var minifyCSS = require('gulp-minify-css');

// 压缩css文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function() {
	//找到文件
	gulp.src('css/*.css')
		//压缩文件
		.pipe(minifyCSS())
		// 另存为压缩文件
		.pipe(gulp.dest('dist/css'));
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function() {
	// 监听文件修改，当文件被修改则执行 css 任务
	gulp.watch('css/*.css', ['css']);
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
gulp.task('default', ['css', 'auto']);