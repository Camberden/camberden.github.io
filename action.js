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

// printTimer();
// setInterval(printTimer, 1000);

// function printTimer(){
// 	const d = new Date();
// 	const dd = d.toLocaleTimeString();
// 	let cc;
// 	const nn = parseInt(dd.substring(0, 2));

// 	if (dd.substring(dd.length - 2, dd.length - 1) === 'P'){
// 		cc = dd.replace(dd.substring(0, 2), nn + 12);
// 	}
// 	if (dd.charAt(1) === '2' && dd.substring(dd.length - 2, dd.length - 1) === 'A'){
// 		cc = dd.replace(dd.substring(0, 2), '00');
// 	}
// 	if (dd.charAt(1) === ':'){
// 		cc = '0'.concat(dd);
// 	}
// document.getElementById('miniclock').innerHTML = cc.substring(0, 8);
//}

// function inMo(){
// 	document.getElementById('demotxt').style = 'color:red; user-select:none';
// 	missouri.play();
// 	moSign();
// 	moRemove();
// }

// function moSign(){
// 	setTimeout(() => document.getElementById('grid3').style = 'background-image: url(assets/missouri-getty.jpg); background-position-x: 100%; background-repeat: no-repeat; background-size: cover;', 2100);
// }

// function moRemove(){
// 	setTimeout(() => document.getElementById('grid3').style = 'background-image: transparent;', 4000);
// 	setTimeout(() => document.getElementById('demotxt').style = 'color: inherit;', 4000);
// }

missouri.addEventListener('ended', function(){
	missouri.currentTime = 0;
	console.log('missouri ended');
	document.getElementById('demotxt').style = 'font-size:inherit; color:inherit;';
});

// --- INFO AND ENTRYWAYS --- //

const musingslink = '<a href="poems/poems.html">';
const personalrecordlink = '<a href="personalrecord/personalrecord.html">';
const lifeinweekslink = '<a href="lifeinweeks/lifeinweeks.html">';
const billcalculatorlink = '<a href="billcalculator/billcalculator.html">';
const linkending = 'Enter</a>';

const musings = document.getElementById('musings');
const personalrecord = document.getElementById('personalrecord');
const lifeinweeks = document.getElementById('lifeinweeks');
const billcalculator = document.getElementById('billcalculator');

function populateInfoAndEntryways(selection){
	switch (selection){
		case musings:
			document.getElementById('musings-info').innerHTML =
				'This is a test and stuff';
			document.getElementById('musings-entry').innerHTML =
				musingslink + linkending;
			console.log(document.getElementById('musings-entry'));

			break;
		case personalrecord:
			document.getElementById('personalrecord-info').innerHTML =
				'Here, I write about my future plans concerning work and re-education.';
			document.getElementById('personalrecord-entry').innerHTML =
				personalrecordlink + linkending;
			console.log(document.getElementById('personalrecord-entry'));
			break;
		case lifeinweeks:
			document.getElementById('lifeinweeks-info').innerHTML =
				'Here, I detail events of my life using a chart featuring each week of my life as the timeline.';
			document.getElementById('lifeinweeks-entry').innerHTML =
				lifeinweekslink + linkending;
			break;
		case billcalculator:
			document.getElementById('billcalculator-info').innerHTML =
					'Here, I plan my finances month-by-month based on my current situation.';
			document.getElementById('billcalculator-entry').innerHTML =
					billcalculatorlink + linkending;
			break;
	}
}


// --- REMOVAL FUNCTIONS --- //

const infos = document.getElementsByClassName('info-box');
function removeInfoBox(selection){
	for (let i = 0; i < infos.length; ++i){
		infos[i].innerHTML = '';
	}
}

const entries = document.getElementsByClassName('entry-box');
function removeEntryBox(selection){
	for (let i = 0; i < entries.length; ++i){
		entries[i].innerHTML = '';
	}
}

function removeInfoAndEntry(){
	removeInfoBox(infos);
	removeEntryBox(entries);
}

// --- ON CLICK FUNCTIONS --- //

let counter = 1;
musings.onclick = function(){
	console.log(counter);
	populateInfoAndEntryways(musings);
	++counter;
	if (counter > 1 && counter % 2){
		console.log('removed!');
		removeInfoAndEntry();
		counter = 1;
	}
};

personalrecord.onclick = function(){
	console.log(counter);
	populateInfoAndEntryways(personalrecord);
	++counter;
	if (counter > 1 && counter % 2){
		console.log('removed!');
		removeInfoAndEntry();
		counter = 1;
	}
};

lifeinweeks.onclick = function(){
	console.log(counter);
	populateInfoAndEntryways(lifeinweeks);
	++counter;
	if (counter > 1 && counter % 2){
		console.log('removed!');
		removeInfoAndEntry();
		counter = 1;
	}
};

billcalculator.onclick = function(){
	console.log(counter);
	populateInfoAndEntryways(billcalculator);
	++counter;
	if (counter > 1 && counter % 2){
		console.log('removed!');
		removeInfoAndEntry();
		counter = 1;
	}
};

console.log(musings);
