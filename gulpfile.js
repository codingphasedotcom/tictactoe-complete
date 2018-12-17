const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
var exec = require('child_process').exec;

gulp.task('default', ['browser-sync'], () => {
	// gulp.watch('./assets/scss/**/*', ['webpack']);
	// gulp.watch('./assets/**/*', ['webpack']);
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
		])
		.on('change', reload);
});

// gulp.task('styles', () => {
// 	gulp
// 		.src('assets/sass/**/*.scss')
// 		.pipe(
// 			sass({
// 				outputStyle: 'compressed'
// 			}).on('error', sass.logError)
// 		)
// 		.pipe(
// 			autoprefixer({
// 				browsers: ['last 2 versions']
// 			})
// 		)
// 		.pipe(gulp.dest('./public/css'))
// 		.pipe(browserSync.stream());
// });

gulp.task('browser-sync', function() {
	// THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
	// browserSync.init({
	//   proxy: {
	//     target: 'localhost:3000', // can be [virtual host, sub-directory, localhost with port]
	//     ws: true // enables websockets
	//   },
	//   serveStatic: ['.', './public']
	// })

	browserSync.init({
		server: './public',
		notify: false,
		open: false //change this to true if you want the broser to open automatically
	});
});

gulp.task('webpack', cb => {
	exec('npm run dev', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

// gulp.task('webpack', shell.task([
//   'webpack'
// ]))

// gulp.task('server', shell.task([
//   'yarn run server'
// ]))
