/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const meaning = new Audio('../assets/Meaning.mp3');
const playtext = document.getElementById('meaningtune');

function playTune(){
	document.getElementById('demotxt').style = 'color:red;';
	meaning.play();
	console.log('Playing!');
	// stopPlay();
}

// meaning.addEventListener('ended', function(){
// 	meaning.currentTime = 0;
// 	console.log('meaning ended');
// 	document.getElementById('demotxt').style = 'font-size:inherit; color:inherit;';
// });

let playcounter = 0;

function stopPlay(){
	setTimeout(() => document.getElementById('meaningtune').style = 'color: inherit;', 4000);
}

playtext.addEventListener('click', function(){
	++playcounter;
	console.log(playcounter);
	if (playcounter % 2){
		meaning.play();
		document.getElementById('meaningtune').classList.add('currentlyplaying');
	}
	else {
		meaning.pause();
		meaning.currentTime = 0;
		document.getElementById('meaningtune').classList.remove('currentlyplaying');
	}
});