/* eslint-disable no-unused-vars */
'use strict';


function populateBoxes(){
	console.log('Running lifeinweeks.js!');
	const inception = 753300000000;
	const millisecondweek = 1000*60*60*24*7;
	const d = new Date();
	const weekslived = (d.getTime() - inception) / millisecondweek;

	console.log(weekslived);
	const weeks = 52;
	const years = 78;
	const spans = new Array(weeks*years).fill(0).map((_, i) => {
		const span = document.createElement('span');
		span.classList.add('momentbox');
		span.id = `box${i}`;
		// debugger;
		return span;
	});

	//SEGMENTS

	//Filled
	spans.forEach((span, i) => {
		if (i < weekslived)
			span.classList.add('momentboxfilled');
	});
	spans.forEach((span, i) => {
		if (i < weeks)
			span.classList.add('firstyearmoment');
	});
	const boxinput = document.getElementById('boxinput');
	spans.forEach(s => boxinput.appendChild(s));
	//debugger;
}

populateBoxes();