"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

function correct_answer() {
	document.getElementById('response').innerHTML = 'Correct' ;
	generate_question();
	}
	
function incorrect_answer() {
	document.getElementById('response').innerHTML = 'Incorrect' ;
	}
	document.getElementById('B').addEventListener('click', incorrect_answer) ;
	
	
	
var options =['Apple', 'Pizza', 'Carrot', 'Borscht', 'Ice Cream', 'Falafel', 'French Fries', 'Lutefisk', 'Beef Stroganoff', 'Cream Cheese', 'Biryani'] ;

function generate_question() {
	document.getElementById('A').innerHTML = Random_word();
	document.getElementById('B').innerHTML = Random_word();
	document.getElementById('C').innerHTML = Random_word();
}	
function Random_word() {
	var random_answer;
	random_answer = Math.random() * options.length; 
	random_answer = Math.floor(random_answer);
	random_answer = options[random_answer] ;
	hold = random_answer
	return random_answer;
}

generate_question();

var hold 

