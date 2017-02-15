/* stephe/katbiznis
 *
 * /src/js/script.js - Main scripts
 *
 * coded by stephecloutier@gmail.com
 * started at 09/02/2017
 */

 console.log( "Hello, world!" );


let fFlipButton = document.getElementsByClassName('flip')[0];

const fFlip = function () {
    document.getElementsByClassName( 'flip-container' )[0].classList.toggle( 'hover' );
};


fFlipButton.addEventListener( "click", fFlip, "false" );
