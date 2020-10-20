/* eslint-disable no-unused-vars */
'use strict';
/* exported typingTest */

window.onload = () => console.log('Running!');

function focusWriting(){
	const foc = document.getElementById('sampleTypingField').autofocus = true;
	document.getElementById('sampleTypingField').innerHTML = foc;
	console.log('Focus Writing is triggering!');
}

focusWriting();


/* To associate with an audiofile, use a Map */
const poems = [
	'Wayward I drifted, loosely guided by principle and conviction whose strength teetered and peaked with a worrying frequency. Each inevitable workplace dejection garnered close company with the pangs of such teetering strength, hallmarked by decisional regret of both the short and long term: the inescapable failings of a misguided youth.',
	'If you will read and follow the rules in this booklet, your time in prison will be easier. The people who work for the prisons can be of help to you. If you have any questions about any matter, ask a member of the staff. If you have any questions about any of the rules in this booklet, see a staff member and they will answer your questions. Obey all prison rules and make the most of chances to show that you can act in a manner which can lead to your release.',
	'You\'re most attractive when you\'re not worried about who you\'re attracting.',
	'A gentle breeze was the only thing I had heard. All I could see surrounding my small, green oasis were immaculate dunes, some of stature, some modest, subjacent to a brilliant, pristine, blue sky whose fields spread dotted by puffy, white clouds, inching away ever so slowly, their movement involving enough in this remarkably empty scene so as to merit my attention and enrapture me in contemplative wonder.',
];

let poemnumber = 0;
let selectedpoem = poems[poemnumber];

function getPoemNumber(){
	document.getElementById('poemnum').innerHTML = 'Passage #' + (poemnumber + 1);
}
getPoemNumber();

/* SETS THE POEM INTO THE FORTYPING ID ELEMENT */
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
	focusWriting();
	getPoemNumber();
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
	focusWriting();
	getPoemNumber();
}

function typingTest(){
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



// MODAL

const modal = document.getElementById('menumodal');
const menuclick = document.getElementById('menulabel');
const menuclose = document.getElementsByClassName('closemenu')[0];

menuclick.onclick = function(){
	modal.style.display = 'block';
};

menuclose.onclick = function(){
	modal.style.display = 'none';
};

window.onclick = function(event){
	if (event.target === modal){
		modal.style.display = 'none';
	}
};
