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
	[21,	'Another day...'],
	[24,	'I\'m all alone'],
	[26,	'I wonder what to do again...'],
	[31,	'I take a seat,'],
	[33,	'then I endure'],
	[36,	'cascading flows of thoughts and so I'],
	[40,	'freeze again'],
	[42,	'paralyzed...'],
	[44,	'directionless and overwhelmed'],
	[49,	'I close my eyes...'],
	[51,	'fostering the will to take my leave'],
	[56,	'...'],
	[76,	'I understand'],
	[79,	'my perseverence'],
	[81,	'is fielding over much to many'],
	[85,	'things to do...'],
	[87,	'and people with whom'],
	[90,	'my anxiousness and social withdraw'],
	[94,	'disunite.'],
	[97,	'This inner fight'],
	[99,	'breeds isolation speaking naught.'],
	[103,	'I steal away...'],
	[106,	'and lock myself inside this state of mind.'],
	[110,	'...'],
	[135,	'My soul!'],
	[137,	'It comes alive!'],
	[138,	'For just this night!'],
	[143,	'I realize is just for now!'],
	[146,	'I do surmise a lack of meaning'],
	[150,	'to come...'],
	[152,	'from what I do,'],
	[154,	'the day by day,'],
	[156,	'the black and grey'],
	[161,	'the solidude,'],
	[162,	'this mental cage'],
	[164,	'There\'s just so little sense of meaning'],
	[167,	'to me...'],
]);

// --- WRITING FUNCTIONS --- //

function writeLyrics(){
	const timestamp = Math.floor(meaning.currentTime);
	console.log(timestamp);

	if (meaninglyrics.has(timestamp)){
		currentlyrics.innerHTML = meaninglyrics.get(timestamp);
	}
}
