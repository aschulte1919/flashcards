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

var image_options =['http://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg', 'http://images6.alphacoders.com/412/412067.jpg', 'https://extension.umass.edu/vegetable/sites/vegetable/files/crops/carrot1.jpg', 'http://cdn.noshon.it/wp-content/uploads/2013-11-04-r-simple-roasted-beet-borscht1.jpg', 'http://continentalicecream.com/wp-content/uploads/2013/10/savoury-Ice-Cream-Cones.jpg', 'http://www.oasisde.com/restaurant/wp-content/uploads/2011/02/falafel-sandwich.jpg', 'http://www.chiantilvpa.com/wp-content/uploads/2014/09/French-fries-deliciouse.jpg', 'http://www.aperitif.no/var/aperitif/storage/images/oppskrifter2/sesongmat/julemenyen/alt-om-lutefisk/302612-23-nor-NO/Alt-om-lutefisk.jpg', 'http://i443.photobucket.com/albums/qq153/jlocklin_photos/Food%20Shots/Beef%20Stroganoff/IMG_4707.jpg', 'http://www.sarahwilson.com.au/wp-content/uploads/2012/03/cream_cheese_16x9.jpg', 'http://know.burrp.com/wp-content/uploads/2012/11/2-KUTCHI-GOSHT-BIRYANI.jpg']

	
function Random_image_key() {
	var random_photo;
	random_photo = Math.random() * image_options.length; 
	random_photo = Math.floor(random_photo);
	return random_photo;
}

function generate_question() {
	document.getElementById('A').innerHTML = Random_word();
	document.getElementById('B').innerHTML = Random_word();
	document.getElementById('C').innerHTML = Random_word();
	document.getElementById('thomas').src= Random_image();
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

var hold;

function connect() {
	var store;
	store = Random_image_key();
	store = image_options[random_photo];
	store = options[];
	
	
	var connection;
	thomas.src = options[random_photo];
	return connection;

}
	
	
