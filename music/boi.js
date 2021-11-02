/* exported boiBoi omegaBoi */
'use strict';

const meaning = new Audio('../assets/Meaning.mp3');
const reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
let boilyrics;

function boiBoi(){
	reader.open('get', 'boilyrics.txt', true);
	reader.onreadystatechange = () => {
		if (reader.readyState !== 4)
			return;
		boilyrics = reader.responseText.split('\n').map(l => {
			const out = l.split('\t');
			out[0] = parseInt(out[0]);
			return out;
		});
	};
	reader.send(null);
}

function boiBoiBoi(){
	let line = 0;
	while (meaning.currentTime > boilyrics[line][0])
		line++;
	document.getElementById('meaning-lyrics').innerHTML = boilyrics[line][1];
}

let interval;
let playcounter = 0;
function omegaBoi(){
	playcounter++;
	console.log(playcounter);
	if (playcounter % 2){
		meaning.play();
		document.getElementById('meaningtune').classList.add('currentlyplaying');
		interval = setInterval(boiBoiBoi, 1000);
	}
	else {
		meaning.pause();
		// meaning.currentTime = 0;
		document.getElementById('meaningtune').classList.remove('currentlyplaying');
		document.getElementById('track1').classList.remove('currentlyplayingbox');
		// currentlyrics.innerHTML = '';
		clearInterval(interval);
	}
}