/* eslint-disable no-unused-vars */
'use strict';
/* exported clickmeboy sampleTypingTest */

window.onload = () => console.log('Running!');
const missouri = new Audio('assets/missouri.mp3');


function clickmeboy(){
	document.getElementById('pedestal').innerHTML -= -1;
	document.getElementById('hitbutton').classList.add('red');
	setTimeout(() => document.getElementById('hitbutton').classList.remove('red'), 200);
}

printTimer();
setInterval(printTimer, 1000);

function printTimer(){
	const d = new Date();
	const dd = d.toLocaleTimeString();
	let cc;
	const nn = parseInt(dd.substring(0, 2));
	console.log(nn + 12);

	if (dd.substring(dd.length - 2, dd.length - 1) === 'P'){
		cc = dd.replace(dd.substring(0, 2), nn + 12);
	}
	else if (dd.charAt(1) === '2' && dd.substring(dd.length - 2, dd.length - 1) === 'A'){
		cc = dd.replace(dd.substring(0, 2), '00');
	}

	console.log(dd);
	document.getElementById('miniclock').innerHTML = cc.substring(0, 8);
}

function inMo(){
	document.getElementById('demotxt').style = 'color:red; user-select:none';
	missouri.play();
	moSign();
}

function moSign(){
	setTimeout(() => document.getElementById('grid3').style = 'background-image: url(assets/missouri-getty.jpg); background-position-x: 125%; background-repeat: no-repeat;', 2100);
}

missouri.addEventListener('ended', function(){
	missouri.currentTime = 0;
	console.log('missouri ended');
	document.getElementById('demotxt').style ='font-size:inherit; color:inherit;';
	document.getElementById('grid3').style = 'background-image: none;';
});
