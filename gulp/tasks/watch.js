var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function()
{

	browserSync.init({
		//hide toast messsage from browserSync
		//notify :false,
		server: {
			baseDir: "app" 
		}
	});
	//watch above is the variable we have in the second line
	watch('./app/index.html',function() //first argument the file we want to watch, second argument what the watch 
		//function will actually do
		{
			//gulp.start('html'); //trigger html task
			browserSync.reload();
		});

	watch('./app/assets/styles/**/*.css', function(){ //any time we save a change to any css file
													 // we are triggering cssInject task
			gulp.start('cssInject');
	});
});


//browserSync actually doens't need to refresh the browser in case we change our css files
//creating a new task below	to inject our changes on the fly
gulp.task('cssInject', ['styles'], function(){ //styles task is a dependency of the cssInject task
	// before you run the cssInject task you must begin and complete any task inside the []
	return gulp.src('./app/temp/styles/styles.css') //gulp.src points to our root css file
	.pipe(browserSync.stream()); //stream does whatever we are piping available in the browser
});