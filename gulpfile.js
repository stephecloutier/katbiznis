/* stephe/katbiznis
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by stephecloutier@gmail.com
 * started at 09/02/2017
 */

var gulp = require( "gulp" ),
    image = require( "gulp-image" );

// --- Tasks for images

gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) );
} );

// --- Tasks for styles

// --- Tasks for pug

// --- Tasks for js

// --- Watch tasks

// --- Aliases
