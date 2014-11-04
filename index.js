"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

function correct_answer() {
	document.getElementById('response').innerHTML = 'Correct' ;
	}
	document.getElementById('A').addEventListener('click', correct_answer) ;
	var subtotal;