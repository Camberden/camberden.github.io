/* eslint-disable no-unused-vars */
'use strict';
/* exported sampleTypingTest */


window.onload = () => console.log('Running!');

// const redstyle = `
// 	#sampleTypingField {
// 		color: red;
// 	}
// `;

// const typeReddening = function(){
// 	const redsheet = document.createElement('style');
// 	redsheet.type = 'text/css';
// 	redsheet.innerText = redstyle;
// 	document.head.appendChild(redsheet);
// };

function sampleTypingTest(){
	const para = 'Wayward I drifted, loosely guided by principle and conviction whose strength teetered and peaked with a worrying frequency. Each inevitable workplace dejection garnered close company with the pangs of such teetering strength, hallmarked by decisional regret of both the short and long term: the inescapable failings of a misguided youth.';
	const typed = document.getElementById('sampleTypingField').value;
	const marker = document.getElementById('fortyping');

	if (typed === para.substring(0, typed.length) && typed.length){
		marker.innerHTML = para.replace(typed, '<span class="writinginitial" style="color:rgb(123, 153, 184);">' + typed[0] + '</span> <span style="color:rgb(123, 153, 184);">' + typed.substring(1, typed.length) + '</span>');
	}


	if (typed === para){
		document.getElementById('sampleTypingField').value = '';
		marker.innerHTML = '<span class="writinginitial">' + para[0] + '</span>' + para.substring(1, para.length);
		alert('✨');
	}
}
