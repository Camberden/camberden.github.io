/* eslint-disable no-unused-vars */
'use strict';

const inception = 753300000000;
const millisecondweek = 1000 * 60 * 60 * 24 * 7;
const d = new Date();
const weekslived = (d.getTime() - inception) / millisecondweek;
// Change 'newmoment' to identify the week of a moment.
const newmoment = 1579791600000;
const dateplanning = (newmoment - inception) / millisecondweek;

function populateBoxes(){
	console.log('Running lifeinweeks.js!');
	console.log(dateplanning + ' = printed event plan');

	const weeks = 52;
	const years = 78;
	const spans = new Array(weeks * years).fill(0).map((_, i) => {
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
			span.classList.add('firstyear-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('firstyear-moment');
			}, false);
		}
	});

	//Jail Hired
	spans.forEach((span, i) => {
		if (i === 1239){
			span.classList.add('jailhired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('jailhired-moment');
			}, false);
		}
	});

	//Jail Fired
	spans.forEach((span, i) => {
		if (i === 1252){
			span.classList.add('jailfired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('jailfired-moment');
			}, false);
		}
	});

	//UPS Hired
	spans.forEach((span, i) => {
		if (i === 1254){
			span.classList.add('upshired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('upshired-moment');
			}, false);
		}
	});

	//Security Hired
	spans.forEach((span, i) => {
		if (i === 1261){
			span.classList.add('securityhired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('securityhired-moment');
			}, false);
		}
	});

	//Tech Company in WV
	spans.forEach((span, i) => {
		if (i === 1300){
			span.classList.add('techwv-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techwv-moment');
			}, false);
		}
	});

	//Tech Company in VA
	spans.forEach((span, i) => {
		if (i === 1366){
			span.classList.add('techva-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techva-moment');
			}, false);
		}
	});

	//NC Relocation
	spans.forEach((span, i) => {
		if (i === 1395){
			span.classList.add('ncrelocation-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('ncrelocation-moment');
			}, false);
		}
	});

	// --- END MOMENTS SECTION ---
	const boxinput = document.getElementById('boxinput');
	spans.forEach(s => boxinput.appendChild(s));
}

function displayMomentInfo(moment){
	const iframeleft = '<iframe frameborder="0" style="height: 185px; overflow:scroll; width: 100%' +
		'marginheight="1" marginwidth="1" seamless="seamless" scrolling="no" frameborder="0"' +
		'allowtransparency="true" src=../lifeinweeks/moments/';
	const iframeright = '.html></iframe>';

	switch (moment){
		case 'firstyear-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'firstyear' + iframeright;
			break;
		case 'ncrelocation-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'ncrelocation' + iframeright;
			break;
		case 'upshired-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'upshired' + iframeright;
			break;
		case 'jailhired-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'jailhired' + iframeright;
			break;
		case 'jailfired-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'jailfired' + iframeright;
			break;
		case 'securityhired-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'securityhired' + iframeright;
			break;
		case 'techwv-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'techwv' + iframeright;
			break;
		case 'techva-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'techva' + iframeright;
			break;
	}
}
document.getElementById('weeks-lived').innerHTML = 'Weeks lived: ' + Math.floor(weekslived);
populateBoxes();