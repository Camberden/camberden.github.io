/* exported boiBoi */
'use strict';

const meaning = new Audio('../assets/Meaning.mp3');
const reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
const currentlyrics = document.getElementById('meaning-lyrics');

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
		console.debug(ts);
		if (tsPairs[line][0] <= ts){
			line++;
			continue;
		}
		currentlyrics.innerHTML = tsPairs[line][1];
	}
}

const playtext = document.getElementById('meaningtune');
let playcounter = 0;
playtext.addEventListener('click', function(){
	++playcounter;
	console.log(playcounter);
	if (playcounter % 2){
		meaning.play();
		document.getElementById('meaningtune').classList.add('currentlyplaying');
		document.getElementById('track1').classList.add('currentlyplayingbox');
		boiBoi();
	}
	else {
		meaning.pause();
		meaning.currentTime = 0;
		document.getElementById('meaningtune').classList.remove('currentlyplaying');
		document.getElementById('track1').classList.remove('currentlyplayingbox');
		currentlyrics.innerHTML = '';
	}
});