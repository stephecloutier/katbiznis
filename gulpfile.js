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
    csso = require( "gulp-csso" ),
    pug = require( "gulp-pug" ),
    babel = require( "gulp-babel" );

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
});

// --- Tasks for pug

gulp.task( "html", function() {
    gulp.src( "src/pug/**/*.pug" )
        .pipe( pug( {
            "data": require("./src/data.json")
        } ) )
        .pipe( gulp.dest( "." ) )
});

// --- Tasks for js

gulp.task( "js", function(){
    gulp.src( "src/js/**/*.js" )
        .pipe( babel() )
        .pipe( gulp.dest( "assets/js" ) )
} );

// --- Watch tasks

gulp.task( "watch", function(){
    gulp.watch( "src/images/**", [ "images" ] );
    gulp.watch( "src/sass/**/*.scss", [ "css" ] );
    gulp.watch( "src/pug/**/*.pug", [ "html" ] );
    gulp.watch( "src/js/**/*.js", [ "js" ] );
} );

// --- Aliases

gulp.task( "default", [ "images", "html", "css", "js" ] );
gulp.task( "work", [ "default", "watch" ] );
