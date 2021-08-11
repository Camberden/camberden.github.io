/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running lifeinweeks.js!');
window.onload = populateBoxes();

function populateBoxes(){
	const inception = 753300000000;
	const millisecondweek = 1000*60*60*24*7;
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

	// MOMENTS
	// Attempting to create highlightable substrings with onhover and onclick elements.
	// Consider CSS classes with <span>, boi
	const firstyearmoment = boxchart.substring(0, 52);

	boxchart = `<span style="background-color: #FFFF00">${firstyearmoment}</span>` +
		boxchart.substring(52, boxchart.length);

	// const ncrelocationmoment = boxchart[1395];
	//boxchart = '<span style="background-color: #FFFF00">' + ncrelocationmoment + '</span>' +
	// boxchart.substring(1396, boxchart.length);


	chartspace.innerHTML = boxchart;
}
