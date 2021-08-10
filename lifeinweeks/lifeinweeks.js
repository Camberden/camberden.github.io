/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running lifeinweeks.js!');
window.onload = populateBoxes();

function populateBoxes(){
	const inception = 753300000000;
	const millisecondweek = 604800000;
	const d = new Date();
	const weekslived = (d.getTime() - inception) / millisecondweek;

	console.log(weekslived);
	const weeks = 52;
	const years = 78;
	const box = '☐';
	const filled = '■';
	const boxes = box.repeat(weeks);
	let boxchart = boxes.repeat(years);
	const chartspace = document.getElementById('boxinput');

	console.log('populated!');
	console.log(boxchart.length);

	boxchart = boxchart.substring(0, weekslived).replaceAll(box, filled) +
		boxchart.substring(weekslived, boxchart.length);

	chartspace.innerHTML = boxchart;
}

function highlightBoxes(){
	const piece = document.getElementById('boxinput').innerHTML.substring(0, 4);
}

document.getElementById('boxinput').substring(0, 4).onclick = function(){
	document.getElementById('boxinput').substring(0, 4).innerHTML = 'oofoofoofoofoof';
};


