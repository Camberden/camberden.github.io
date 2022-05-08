/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const meaning = new Audio('../assets/Meaning.mp3');
const woai = new Audio('../assets/WarOfArtInstrumental.mp3');

const tunes = document.querySelectorAll('tune');

const credit = document.getElementById('credit');
const currentlyrics = document.getElementById('playing-lyrics');

let playcounter = 0;
let songline = 0;
let playingAudio = new Audio;

function writeLyrics(song, lyrics){
	const timestamp = Math.floor(song.currentTime);
	console.log(timestamp);

	if (lyrics.has(timestamp)){
		currentlyrics.innerHTML = lyrics.get(timestamp);
	}
}

const recognizeSong = function(song){
	++playcounter;
	console.log(playcounter);

	switch (song){
		case 'meaning':
			if (playcounter % 2){
				playingAudio = meaning;
				playingAudio.play();
				document.getElementById('meaningtune').classList.add('currentlyplaying');
				document.getElementById('track1').classList.add('currentlyplayingbox');
				setInterval(function(){
					writeLyrics(meaning, meaninglyrics);
				}, 1000);
			}
			else {
				playingAudio.pause();
				playingAudio.currentTime = 0;
				songline = 0;
				document.getElementById('meaningtune').classList.remove('currentlyplaying');
				document.getElementById('track1').classList.remove('currentlyplayingbox');
				currentlyrics.innerHTML = '';
				credit.innerHTML = '';
			}
			break;

		case 'woai':
			if (playcounter % 2){
				playingAudio = woai;
				playingAudio.play();
				document.getElementById('woaitune').classList.add('currentlyplaying');
				document.getElementById('track2').classList.add('currentlyplayingbox');
				setInterval(function(){
					writeLyrics(woai, woailyrics);
				}, 1000);
			}
			else {
				playingAudio.pause();
				playingAudio.currentTime = 0;
				songline = 0;
				document.getElementById('woaitune').classList.remove('currentlyplaying');
				document.getElementById('track2').classList.remove('currentlyplayingbox');
				currentlyrics.innerHTML = '';
				credit.innerHTML = '';
			}
			break;
	}
};

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
	[89,	'my anxiousness and social withdraw'],
	[94,	'disunite.'],
	[97,	'This inner fight'],
	[99,	'breeds isolation speaking naught.'],
	[103,	'I steal away...'],
	[105,	'and lock myself inside this state of mind.'],
	[110,	'...'],
	[134,	'My soul!'],
	[137,	'It comes alive!'],
	[138,	'For just this night!'],
	[140,	'I realize is only now!'],
	[142,	'I do surmise a lack of meaning'],
	[150,	'to come...'],
	[152,	'from what I do,'],
	[154,	'the day by day,'],
	[156,	'the black and grey'],
	[158,	'the solidude,'],
	[159,	'this mental cage'],
	[160,	'There\'s just so little sense of meaning'],
	[163,	'to me...'],
	[165,	'My soul!'],
	[167,	'It comes alive!'],
	[168,	'For just this night!'],
	[173,	'I realize is only now!'],
	[176,	'I do surmise a lack of meaning'],
	[180,	'to come...'],
	[182,	'from what I do,'],
	[184,	'the day by day,'],
	[186,	'the black and grey'],
	[188,	'the solidude,'],
	[189,	'this mental cage'],
	[190,	'There\'s just so little sense of meaning'],
	[193,	'to me...'],
]);

const woailyrics = new Map([
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
	[89,	'my anxiousness and social withdraw'],
	[94,	'disunite.'],
	[97,	'This inner fight'],
	[99,	'breeds isolation speaking naught.'],
	[103,	'I steal away...'],
	[105,	'and lock myself inside this state of mind.'],
	[110,	'...'],
	[134,	'My soul!'],
	[137,	'It comes alive!'],
	[138,	'For just this night!'],
	[140,	'I realize is only now!'],
	[142,	'I do surmise a lack of meaning'],
	[150,	'to come...'],
	[152,	'from what I do,'],
	[154,	'the day by day,'],
	[156,	'the black and grey'],
	[158,	'the solidude,'],
	[159,	'this mental cage'],
	[160,	'There\'s just so little sense of meaning'],
	[163,	'to me...'],
	[165,	'My soul!'],
	[167,	'It comes alive!'],
	[168,	'For just this night!'],
	[173,	'I realize is only now!'],
	[176,	'I do surmise a lack of meaning'],
	[180,	'to come...'],
	[182,	'from what I do,'],
	[184,	'the day by day,'],
	[186,	'the black and grey'],
	[188,	'the solidude,'],
	[189,	'this mental cage'],
	[190,	'There\'s just so little sense of meaning'],
	[193,	'to me...'],
]);
