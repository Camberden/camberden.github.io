/* eslint-disable no-unused-vars */
'use strict';
/* exported sampleTypingTest */

window.onload = () => console.log('Running!');

/* To associate with an audiofile, use a Map */
const poems = [
	'Wayward I drifted, loosely guided by principle and conviction whose strength teetered and peaked with a worrying frequency. Each inevitable workplace dejection garnered close company with the pangs of such teetering strength, hallmarked by decisional regret of both the short and long term: the inescapable failings of a misguided youth.',
	'Something else like this is not what I would have expected, for sure.',
	'This is a third quote. Work exists to be done, dontcha know. You\'re most attractive when you\'re not worried about who you\'re attracting.',
];

let poemnumber = 0;
let selectedpoem = poems[poemnumber];

// document.getElementById('poemnumberref').innerHTML = poemnumber;
document.getElementById('fortyping').innerHTML = '<span class="writinginitial">' + selectedpoem[0] + '</span>' + selectedpoem.substring(1, selectedpoem.length);

function nextPoem(){
	if (poemnumber === poems.length - 1){
		poemnumber = 0;
		selectedpoem = poems[poemnumber];
	}
	else {
		selectedpoem = poems[++poemnumber];
	}
	console.log('Testing nextPoem function!');
	document.getElementById('fortyping').innerHTML = '<span class="writinginitial">' + selectedpoem[0] + '</span>' + selectedpoem.substring(1, selectedpoem.length);
	document.getElementById('sampleTypingField').value = '';
}

function previousPoem(){
	if (poemnumber === 0){
		poemnumber = poems.length - 1;
		selectedpoem = poems[poemnumber];
	}
	else {
		selectedpoem = poems[--poemnumber];
	}
	console.log('Testing previous function!');
	document.getElementById('fortyping').innerHTML = '<span class="writinginitial">' + selectedpoem[0] + '</span>' + selectedpoem.substring(1, selectedpoem.length);
	document.getElementById('sampleTypingField').value = '';
}

function sampleTypingTest(){
	const para = selectedpoem;
	const typed = document.getElementById('sampleTypingField').value;
	console.log('TYPED = ' + typed);
	const marker = document.getElementById('fortyping');

	if (typed === selectedpoem.substring(0, typed.length) && typed.length){
		marker.innerHTML = para.replace(typed, '<span class="writinginitial" style="color:rgb(123, 153, 184);">' + typed[0] + '</span> <span style="color:rgb(123, 153, 184);">' + typed.substring(1, typed.length) + '</span>');
	}

	if (typed === selectedpoem){
		document.getElementById('sampleTypingField').value = '';
		document.getElementById('fortyping').innerHTML = '<span class="writinginitial">' + selectedpoem[0] + '</span>' + selectedpoem.substring(1, selectedpoem.length);
		alert('✨');
	}
}
