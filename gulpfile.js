var gulp  = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var addStream = require('add-stream');
var angularTemplateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


/**
 * Scripts
 */
var scriptsInput = './src/*.js';
var scriptsOutput = './dist';

gulp.task('scripts', function() {
    return gulp.src(scriptsInput)
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(ngAnnotate())
    .pipe(concat('angular-ratings.js'))
    .pipe(gulp.dest(scriptsOutput))
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(uglify())
    .pipe(gulp.dest(scriptsOutput));
});


/**
 * Styles
 */
var stylesInput = './src/*.scss';
var stylesOutput = './dist';

gulp.task('sass', function() {
    return gulp
        .src(stylesInput) // Find all `.scss` files from the `stylesheets/` folder
        .pipe(sass({outputStyle: 'compressed'})) // Run Sass on those files
        .pipe(autoprefixer()) // Auto-prefix styles
        .pipe(gulp.dest(stylesOutput)); // Write the resulting CSS in the output folder
});


/**
 * Watch
 */
gulp.task('watch', function() {
    return gulp

        // Watch the input folder for change, and run `sass` task when something happens
        .watch([stylesInput, scriptsInput], ['sass', 'scripts'])

        // When there is a change, log a message in the console
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});




/**
 * Build task
 */
gulp.task('build', ['sass', 'scripts']);


/**
 * Default task (simply calls build)
 */
gulp.task('default', ['build']);





function prepareTemplates() {
    return gulp.src('./src/stars.html')
        .pipe(minifyHTML())
        .pipe(angularTemplateCache());
}
