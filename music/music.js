/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const meaning = new Audio('../assets/Meaning.mp3');
const woai = new Audio('../assets/WarOfArtInstrumental.mp3');
// CHANGE PLAYTEXT TO TUNE AGNOSTIC
const playtext = document.getElementById('meaningtune');
const credit = document.getElementById('credit');
// ASSIGN THE VARIABLE TO THE LYRICS FUNCTION BASED ON THE TUNE CLICKED UPON
const currentlyrics = document.getElementById('meaning-lyrics');

let playcounter = 0;
let songline = 0;

// THIS FUNCTION NEEDS TO BECOME TUNE AGNOSTIC.
// MAKE IT SUCH THAT SELECTING A TUNE DOES NOT REQUIRE AN EXTENDING IF STATEMENT.
// PERHAPS QUERY SELECT THE TEXT IN THE BOX AND RETRIEVE THE MP3 FILE THROUGH IT.

// ADD SONG PARAMETER TO FUNCTION
playtext.addEventListener('click', function(){
	++playcounter;
	console.log(playcounter);
	if (playcounter % 2){
		meaning.play();
		document.getElementById('meaningtune').classList.add('currentlyplaying');
		document.getElementById('track1').classList.add('currentlyplayingbox');
		setInterval(function(){
			writeLyrics();
		}, 1000);
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

// --- LYRIC PAGES (MAPS) --- //

const meaninglyrics = new Map([
	[21, 'Another day...'],
	[24, 'I\'m all alone'],
	[26, 'I wonder what to do again...'],
	[31, 'I take a seat,'],
	[34, 'then I endure'],
	[36, 'cascading flows of thoughts and so I'],
	[40, 'freeze again'],
	[42, 'paralyzed...'],
	[45, 'directionless and overwhelmed'],
	[49, 'I close my eyes...'],
	[51, 'fostering the will to take my leave'],
]);

const warofartlyrics = [
	'Yes, I\'ve a contenance appearing sad',
	'I\'ve fallen off the track on which I forged a plan.',
	'Yes, my resolve is taking flight again,',
	'I wonder if I will follow through the course this time',
];

// --- WRITING FUNCTIONS --- //

function writeLyrics(){
	const timestamp = Math.floor(meaning.currentTime);
	console.log(timestamp);

	if (meaninglyrics.has(timestamp)){
		currentlyrics.innerHTML = meaninglyrics.get(timestamp);
	}
}

// --- TEXT FILE CODE --- //

// const reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

// function boiBoi(){
// 	reader.open('get', 'boilyrics.txt', true);
// 	reader.onreadystatechange = boiBoiBoi;
// 	reader.send(null);
// }

// function boiBoiBoi(){
// 	if (reader.readyState !== 4)
// 		return;
// 	const tsPairs = reader.responseText.split('\n').map(l => {
// 		const out = l.split('\t');
// 		out[0] = parseInt(out[0]);
// 		return out;
// 	});
// 	let ts;
// 	let line = 0;
// 	while ((ts = meaning.currentTime) <= meaning.duration){
// 		console.debug(ts);
// 		if (tsPairs[line][0] <= ts){
// 			line++;
// 			continue;
// 		}
// 		currentlyrics.innerHTML = tsPairs[line][1];
// 	}
// }