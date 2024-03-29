/* eslint-disable no-unused-vars */
'use strict';

const inception = 753300000000;
const millisecondweek = 1000 * 60 * 60 * 24 * 7;
const d = new Date();
const weekslived = (d.getTime() - inception) / millisecondweek;
// Change 'newmoment' value to identify the week of a moment.
const newmoment = 1571976000000;
const dateplanning = (newmoment - inception) / millisecondweek;

const modal = document.getElementById('moment-modal');
const modalclose = document.getElementsByClassName('close-moment')[0];


// FIND THIS MOMENT SELECTION
// menuclick.onclick = function(){
// 	modal.style.display = 'block';
// };

window.onload = function(){
	modal.style.display = 'none';
}

// modalclose.onclick = function(){
// 	modal.style.display = 'none';
// 	poemSelectionMenu.innerHTML = '';
// };

window.onclick = function(event){
	if (event.target === modal){
		modal.style.display = 'none';
	}
};


function populateBoxes(){
	console.log('Running lifeinweeks.js!');
	console.log(dateplanning);

	const weeks = 52;
	const years = 78;
	const spans = new Array(weeks * years).fill(0).map((_, i) => {
		const span = document.createElement('span');
		span.classList.add('momentbox');
		span.title = i + 1;
		span.id = `box${i}`;
		return span;
	});

	const boxinput = document.getElementById('boxinput');
	spans.forEach(s => boxinput.appendChild(s));

	spans.forEach((span, i) => {
		if (i < weekslived){
			span.classList.add('momentboxfilled');
		}

		// First Year Moment
		if (i === 0){
			span.classList.add('moment', 'firstyear-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('firstyear-moment');
			}, false);
		}
		// High School Moment
		if (i === 715){
			span.classList.add('moment', 'highschool-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('highschool-moment');
			}, false);
		}
		// Undergraduate School Moment
		if (i === 924){
			span.classList.add('moment', 'undergrad-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('undergrad-moment');
			}, false);
		}
		// Graduate School Moment
		if (i === 1132){
			span.classList.add('moment', 'gradschool-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('gradschool-moment');
			}, false);
		}
		// Jail Hired Moment
		if (i === 1239){
			span.classList.add('moment', 'jailhired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('jailhired-moment');
			}, false);
		}
		// Jail Fired Moment
		if (i === 1252){
			span.classList.add('moment', 'jailfired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('jailfired-moment');
			}, false);
		}
		// UPS Hired Moment
		if (i === 1254){
			span.classList.add('moment', 'upshired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('upshired-moment');
			}, false);
		}
		// Security Hired Moment
		if (i === 1261){
			span.classList.add('moment', 'securityhired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('securityhired-moment');
			}, false);
		}
		// Tech Company WV Moment
		if (i === 1353){
			span.classList.add('moment', 'techwv-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techwv-moment');
			}, false);
		}
		// Tech Company VA Moment
		if (i === 1366){
			span.classList.add('moment', 'techva-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techva-moment');
			}, false);
		}
		// Tech Company Furloughed
		if (i === 1384){
			span.classList.add('moment', 'techvafurloughed-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techvafurloughed-moment');
			}, false);
		}
		// NC Relocation Moment
		if (i === 1395){
			span.classList.add('moment', 'ncrelocation-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('ncrelocation-moment');
			}, false);
		}
		// Covid Moment
		if (i === 1452){
			span.classList.add('moment', 'covid-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('covid-moment');
			}, false);
		}

		// Covid Moment 2
		if (i === 1469){
			span.classList.add('moment', 'covid2-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('covid2-moment');
			}, false);
		}

		// PERT Tryout
		if (i === 1476){
			span.classList.add('moment', 'perttryout-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('perttryout-moment');
			}, false);
		}

		// Joined PERT
		if (i === 1478){
			span.classList.add('moment', 'joinedpert-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('joinedpert-moment');
			}, false);
		}

		// Moved to Asheville
		if (i === 1488){
			span.classList.add('moment', 'asheville-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('asheville-moment');
			}, false);
		}
	});
} // END populateBoxes()

function displayMomentInfo(moment){
	const iframeleft = '<iframe frameborder="0" style="height: 185px; overflow:scroll; width: 100%' +
		'marginheight="1" marginwidth="1" seamless="seamless" scrolling="yes" frameborder="0"' +
		'allowtransparency="true" src=../lifeinweeks/moments/';
	const iframeright = '.html></iframe>';

	switch (moment){
		case 'highschool-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'highschool' + iframeright;
			break;
		case 'undergrad-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'undergrad' + iframeright;
			break;
		case 'gradschool-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'gradschool' + iframeright;
			break;
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
		case 'techvafurloughed-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'techvafurloughed' + iframeright;
			break;
		case 'covid-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'covid' + iframeright;
			break;
		case 'covid2-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'covid2' + iframeright;
			break;
		case 'perttryout-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'perttryout' + iframeright;
			break;
		case 'joinedpert-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'joinedpert' + iframeright;
			break;
		case 'asheville-moment':
			document.getElementById('moment-info').innerHTML = iframeleft + 'asheville' + iframeright;
			break;
	}
} // END displayMomentInfo()

document.getElementById('weeks-lived').innerHTML = 'Weeks lived: ' + Math.floor(weekslived + 1);
populateBoxes();