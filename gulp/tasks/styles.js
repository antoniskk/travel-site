var gulp = require('gulp'),
postcss = require('gulp-postcss')
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', function()
{
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo){ // the name of the event we are interested in. So on error:
			///errorInfo:any phrase that we like
			console.log(errorInfo.toString());
			this.emit('end'); //tell gulp that the styles task is completed
		})
		.pipe(gulp.dest('./app/temp/styles'));
});