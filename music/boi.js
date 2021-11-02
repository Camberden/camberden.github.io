/* exported omegaBoi */
'use strict';

const meaning = new Audio('../assets/Meaning.mp3');
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
	let line = 0;
	while (meaning.currentTime > tsPairs[line][0])
		line++;
	console.debug(document.getElementById('meaning-lyrics').innerHTML = tsPairs[line][1]);
}

let interval;
let playcounter = 0;
function omegaBoi(){
	playcounter++;
	console.log(playcounter);
	if (playcounter % 2){
		meaning.play();
		document.getElementById('meaningtune').classList.add('currentlyplaying');
		interval = setInterval(boiBoi, 1000);
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