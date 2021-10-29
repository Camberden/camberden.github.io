/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const meaning = new Audio('../assets/Meaning.mp3');
const woai = new Audio('../assets/WarOfArtInstrumental.mp3');
const playtext = document.getElementById('meaningtune');
const credit = document.getElementById('credit');
// ASSIGN THE VARIABLE TO THE LYRICS FUNCTION BASED ON THE TUNE CLICKED UPON
const currentlyrics = document.getElementById('meaning-lyrics');


let playcounter = 0;


// THIS FUNCTION NEEDS TO BECOME TUNE AGNOSTIC.
// MAKE IT SUCH THAT SELECTING A TUNE DOES NOT REQUIRE AN EXTENDING IF STATEMENT.
// PERHAPS QUERY SELECT THE TEXT IN THE BOX AND RETRIEVE THE MP3 FILE THROUGH IT.
playtext.addEventListener('click', function(){
	++playcounter;
	console.log(playcounter);
	if (playcounter % 2){
		meaning.play();
		document.getElementById('meaningtune').classList.add('currentlyplaying');
		document.getElementById('track1').classList.add('currentlyplayingbox');
		setInterval(function(){
			meaningLyrics();
		}, 500);
	}
	else {
		meaning.pause();
		meaning.currentTime = 0;
		document.getElementById('warofartinstrumentaltune').classList.remove('currentlyplaying');
		document.getElementById('track1').classList.remove('currentlyplayingbox');
		currentlyrics.innerHTML = '';
		credit.innerHTML = '';
	}
});

function meaningLyrics(){
	const ts = meaning.currentTime;
	if (ts === 0){
		currentlyrics.innerHTML = '';
	}
	if (ts < 22 && ts > 0){
		currentlyrics.innerHTML = 'huff...';
		credit.innerHTML = '<br><br>Chrispy 2021';
	}
	if (ts > 22 && ts < 24){
		currentlyrics.innerHTML = 'Another day...';
	}
	if (ts > 24 && ts < 26){
		currentlyrics.innerHTML = ' I\'m all alone';
	}
	if (ts > 26 && ts < 30){
		currentlyrics.innerHTML = ' I wonder what to do again...';
	}
}

