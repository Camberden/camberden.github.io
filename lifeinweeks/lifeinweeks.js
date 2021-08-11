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
		return span;
	});

	// --- BEGIN MOMENTS SECTION ---

	//Filled
	spans.forEach((span, i) => {
		if (i < weekslived)
			span.classList.add('momentboxfilled');
	});
	//First Year
	spans.forEach((span, i) => {
		if (i < weeks){
			span.classList.add('firstyearmoment');
			span.addEventListener('click', function(){
				displayMomentInfo('firstyearmoment');
			}, false);
		}
	});
	//NC Relocation
	spans.forEach((span, i) => {
		if (i === 1395){
			span.classList.add('ncrelocationmoment');
			span.addEventListener('click', function(){
				displayMomentInfo('ncrelocationmoment');
			}, false);
		}
	});

	// --- END MOMENTS SECTION ---
	const boxinput = document.getElementById('boxinput');
	spans.forEach(s => boxinput.appendChild(s));
}

function displayMomentInfo(moment){
	const iframetext = '<iframe frameborder="0" style="height: 185px; overflow:scroll; width: 100%' +
		'marginheight="1" marginwidth="1" seamless="seamless" scrolling="no" frameborder="0"' +
		'allowtransparency="true" src=../lifeinweeks/moments/';
	if (moment === 'firstyearmoment'){
		document.getElementById('moment-info').innerHTML = iframetext + 'firstyear.html></iframe';
	}
	if (moment === 'ncrelocationmoment'){
		document.getElementById('moment-info').innerHTML = iframetext + 'ncrelocation.html></iframe>';
	}
}
populateBoxes();