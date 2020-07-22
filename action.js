'use strict';
/* exported clickmeboy sampleTypingTest */

let q = 0;

window.onload = () => console.log('Running!');

function clickmeboy(){
	q = q + 1;
	document.getElementById('pedestal').innerHTML = q;
	document.getElementById('hitbutton').classList.add('red');
	setTimeout(() => document.getElementById('hitbutton').classList.remove('red'), 200);
}

setInterval(printTimer, 1000);

function printTimer(){
	const d = new Date();
	document.getElementById('miniclock').innerHTML = d.toLocaleTimeString();
}

function sampleTypingTest(){
	const para = 'The quick brown fox jumps over the lazy dog.';
	const typed = document.getElementById('sampleTypingField').value;
	const marker = document.getElementById('pangram');

	if (typed === para.substring(0, typed.length)){
		marker.innerHTML = para.replace(typed, '<span class="red">' + typed + '</span>');
	}

	if (typed === para){
		document.getElementById('sampleTypingField').value = '';
		marker.innerHTML = para;
		alert('✨');
	}
}
