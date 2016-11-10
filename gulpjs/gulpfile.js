// 获取gulp
var gulp=require('gulp');

// 获取 uglify 模块（用于压缩 JS）
var uglify=require('gulp-uglify');

// 压缩js
// 在命令行，使用 gulp script 启动此任务
gulp.task('script',function () {
	// 找到要压缩的文件
	gulp.src('js/*.js')
		// 压缩文件
		.pipe(uglify())
		// 另存压缩后的文件
		.pipe(gulp.dest("dist/js"));
});

// 在命令行，使用 gulp auto 启动此任务
gulp.task('auto',function(){
	// 监听文件修改，当文件被修改，则执行script 任务
	gulp.watch('js/*.js',['script']);
});

// 在命令行，使用 gulp default 启动此任务
gulp.task('default',['script','auto']);