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
let songline = 0;

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
			writeMeaningLyrics();
		}, 500);
	}
	else {
		meaning.pause();
		meaning.currentTime = 0;
		songline = 0;
		document.getElementById('meaningtune').classList.remove('currentlyplaying');
		document.getElementById('track1').classList.remove('currentlyplayingbox');
		currentlyrics.innerHTML = '';
		credit.innerHTML = '';
	}
});

const meaninglyrics = [
	'Another day...',
	'I\'m all alone',
	'I wonder what to do again...',
	'I take a seat,',
	'then I endure',
	'cascading flows of thoughts and so I',
	'freeze again',
	'paralyzed...',
	'directionless and overwhelmed',
	'I close my eyes...',
	'fostering the will to take my leave',
];

function nextLyrics(song){
	currentlyrics.innerHTML = song[songline];
	// false
}

function writeMeaningLyrics(){
	const ts = meaning.currentTime;
	if (ts === 0){
		currentlyrics.innerHTML = '';
	}
	if (ts < 22 && ts > 0){
		currentlyrics.innerHTML = 'huff...';
		credit.innerHTML = '<br><br>Chrispy 2021';
	}
	if (ts > 22 && ts < 24){
		nextLyrics(meaninglyrics);
		songline++;
	}
	if (ts > 24 && ts < 26){
		nextLyrics(meaninglyrics);
		songline++;
	}
	if (ts > 26 && ts < 30){
		nextLyrics(meaninglyrics);
		songline++;
	}
}

const reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

function boiBoi(){
	reader.open('get', 'boilyrics.txt', true);
	reader.onreadystatechange = boiBoiBoi;
	reader.send(null);
}

function boiBoiBoi(){
	if (reader.readyState !== 4)
		return;
	const tsPairs = reader.responseText.split('\n').map(l => {
		const out = l.split('\t');
		out[0] = parseInt(out[0]);
		return out;
	});
	let ts;
	let line = 0;
	while ((ts = meaning.currentTime) <= meaning.duration){
		if (tsPairs[line][0] <= ts){
			line++;
			continue;
		}
		currentlyrics.innerHTML = tsPairs[line][1];
	}
}