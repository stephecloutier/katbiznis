/* stephe/katbiznis
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by stephecloutier@gmail.com
 * started at 09/02/2017
 */

var gulp = require( "gulp" ),
    image = require( "gulp-image" ),
    sass = require( "gulp-sass" ),
    autoprefixer = require( "gulp-autoprefixer" ),
    csso = require( "gulp-csso" );

// --- Tasks for images

gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) );
} );

// --- Tasks for styles

gulp.task( "css", function() {
    gulp.src( "src/sass/**/*.scss" )
        .pipe( sass().on( "error", sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( csso() )
        .pipe( gulp.dest( "assets/css" ) );
})

// --- Tasks for pug

// --- Tasks for js

// --- Watch tasks

// --- Aliases
