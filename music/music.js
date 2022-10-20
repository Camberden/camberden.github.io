/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const meaning = new Audio('../assets/Meaning.mp3');
const woai = new Audio('../assets/WarOfArtInstrumental.mp3');

const tunes = document.querySelectorAll('tune');

// const credit = document.getElementById('credit');
const currentlyrics = document.getElementById('playing-lyrics');

let playcounter = 0;
let songline = 0;
let playingAudio = new Audio;
const modal = document.getElementById('info-modal');
const specificModal = document.getElementById('specific-modal');
document.getElementById('close-modal').onclick = function(){
	modal.style.display = 'none';
};

function writeLyrics(song, lyrics){
	const timestamp = Math.floor(song.currentTime);
	// UNCOMMENT THIS CONSOLE LOG TO PINPOINT LYRICS SUNG DURING TRACK
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
				specificModal.innerHTML = meaningModalText + meaningModalImage;
				document.getElementById(song + 'tune').classList.add('currentlyplaying');
				document.getElementById('track1').classList.add('currentlyplayingbox');
				document.getElementById('backdrop').classList.add('animatedgradient');
				document.getElementById(song + '-info').classList.add('songinfo-deploy');
				document.getElementById(song + '-info').innerHTML = '[info]';
				document.getElementById(song + '-info').onclick = function(){
					modal.style.display = 'block';
				};
				setInterval(function(){
					writeLyrics(meaning, meaninglyrics);
				}, 1000);
			}
			else {
				playingAudio.pause();
				playingAudio.currentTime = 0;
				songline = 0;
				document.getElementById(song + 'tune').classList.remove('currentlyplaying');
				document.getElementById('track1').classList.remove('currentlyplayingbox');
				document.getElementById('backdrop').classList.remove('animatedgradient');
				document.getElementById(song + '-info').classList.remove('songinfo-deploy');
				document.getElementById(song + '-info').innerHTML = '&#8201';
				currentlyrics.innerHTML = '&#8201';
				// credit.innerHTML = '';
			}
			break;

		case 'woai':
			if (playcounter % 2){
				playingAudio = woai;
				playingAudio.play();
				specificModal.innerHTML = woaiModalText;
				document.getElementById(song + 'tune').classList.add('currentlyplaying');
				document.getElementById('track2').classList.add('currentlyplayingbox');
				document.getElementById('backdrop').classList.add('animatedgradient');
				document.getElementById(song + '-info').classList.add('songinfo-deploy');
				document.getElementById(song + '-info').innerHTML = '[info]';
				document.getElementById(song + '-info').onclick = function(){
					modal.style.display = 'block';
				};
				setInterval(function(){
					writeLyrics(woai, woailyrics);
				}, 1000);
			}
			else {
				playingAudio.pause();
				playingAudio.currentTime = 0;
				songline = 0;
				document.getElementById(song + 'tune').classList.remove('currentlyplaying');
				document.getElementById('track2').classList.remove('currentlyplayingbox');
				document.getElementById('backdrop').classList.remove('animatedgradient');
				document.getElementById(song + '-info').classList.remove('songinfo-deploy');
				document.getElementById(song + '-info').innerHTML = '&#8201';
				currentlyrics.innerHTML = '&#8201';
				// credit.innerHTML = '';
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
	[42,	'paralyzed...🎵'],
	[44,	'directionless and overwhelmed'],
	[49,	'I close my eyes...'],
	[51,	'fostering the will to take my leave'],
	[56,	'...🎵'],
	[76,	'I understand'],
	[79,	'my perseverence'],
	[81,	'is fielding over much to many'],
	[85,	'things to do...🎵'],
	[87,	'and people with whom'],
	[88,	'my anxiousness and social withdraw'],
	[94,	'disunite.'],
	[97,	'This inner fight'],
	[99,	'breeds isolation speaking naught.'],
	[103,	'I steal away...'],
	[105,	'and lock myself inside this state of mind.'],
	[110,	'...🎵'],
	[134,	'My soul!'],
	[136,	'It comes alive!'],
	[138,	'For just this night!'],
	[140,	'I realize is only now!'],
	[143,	'I do surmise a lack of meaning'],
	[150,	'to come...🎵'],
	[152,	'from what I do,'],
	[154,	'the day by day,'],
	[156,	'the black and grey'],
	[158,	'the solitude,'],
	[160,	'this mental cage'],
	[162,	'There\'s just so little sense of meaning'],
	[167,	'to me...'],
	[170,	'My soul!'],
	[172,	'It comes alive!'],
	[175,	'For just this night!'],
	[178,	'I realize is only now!'],
	[180,	'I do surmise a lack of meaning'],
	[184,	'to come...'],
	[188,	'from what I do,'],
	[190,	'the day by day,'],
	[192,	'the black and grey'],
	[194,	'the solidude,'],
	[195,	'this mental cage'],
	[198,	'There\'s just so little sense of meaning'],
	[202,	'to me...🎵'],
	[205,	'Little sense of meaning...🎵'],
	[210,	'Little sense of meaning!'],
]);

const woailyrics = new Map([
	[1,	'🎵 Instrumental Version! 🎵'],
]);

// --- SONG-SPECIFIC MODALS --- //

const meaningModalText = `This is a song about Meaning.<br>`;
const meaningModalImage = `<img src="../assets/meaning-paper.jpg">`;
const woaiModalText = `This is a song about forcing oneself to keep working on projects in front of the computer screen.`;