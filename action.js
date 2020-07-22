'use strict';
/* exported clickmeboy sampleTypingTest */

let q = 0;

window.onload = function(){
	console.log('Running!');
};

function clickmeboy(){
	q = q + 1;
	document.getElementById('pedestal').innerHTML = q;
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

	if (typed.substring(0, typed.length) === para.substring(0, typed.length)){
		marker.innerHTML = para.replace(typed, '<span style="color:red">' + typed + '</span>');
	}

	if (typed === para){
		document.getElementById('sampleTypingField').value = '';
		marker.innerHTML = para;
		alert('Nice!');
	}
}
