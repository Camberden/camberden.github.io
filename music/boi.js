/* exported boiBoi omegaBoi */
'use strict';

const meaning = new Audio('../assets/Meaning.mp3');
const reader = new XMLHttpRequest();
/** @type {[number, string][]} */
let boilyrics;

/** boiloads the boilyricfile */
function boiBoi(){
	reader.open('get', 'boilyrics.txt', true);
	reader.onreadystatechange = () => {
		if (reader.readyState !== 4)
			return;
		// boisplit boifile into boilines
		boilyrics = reader.responseText.split('\n').map(l => {
			// boisplit boiline into boitimestamp and boilyrics
			const out = l.split('\t');
			// boichange boitimestamp from a boistring to a boiint
			out[0] = parseInt(out[0]);
			return out;
		});
	};
	reader.send(null);
}

/** boichecks which boilyric to boiuse */
function boiBoiBoi(){
	let line = 0;
	while (meaning.currentTime > boilyrics[line][0])
		line++;
	document.getElementById('meaning-lyrics').innerHTML = boilyrics[line][1];
}


/** @type {number} */
let interval;
let playcounter = 0;
/** boihandles boiplay and boipause */
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