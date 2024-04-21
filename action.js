/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

// --- INFO AND ENTRYWAYS --- //

const musiclink = '<a href="music/music.html">';
const musingslink = '<a href="poems/poems.html">';
const personalrecordlink = '<a href="personalrecord/personalrecord.html">';
const lifeinweekslink = '<a href="lifeinweeks/lifeinweeks.html">';
const billcalculatorlink = '<a href="billcalculator/billcalculator.html">';
const studydocumentslink = '<a href="studydocuments/studydocuments.html">';
const dashboardlink = '<a href="dashboard/dashboard.html">';
const deadlink = 'PENDING UPDATE';
const linkending = 'Enter</a>';

const music = document.getElementById('music');
// const musings = document.getElementById('musings');
// const personalrecord = document.getElementById('personalrecord');
// const lifeinweeks = document.getElementById('lifeinweeks');
const billcalculator = document.getElementById('billcalculator');
// const studydocuments = document.getElementById('studydocuments');
// const dashboard = document.getElementById('dashboard');

// const item1 = document.getElementById('item1');
// const item2 = document.getElementById('item2');
// const item3 = document.getElementById('item3');
// const item4 = document.getElementById('item4');
// const item5 = document.getElementById('item5');
// const item6 = document.getElementById('item6');
// const item7 = document.getElementById('item7');

// function populateInfoAndEntryways(selection) {
// 	switch (selection) {
// 		case music:
// 			document.getElementById('music-info').innerHTML =
// 				'Here you can find some of my musical works';
// 			document.getElementById('music-entry').innerHTML =
// 				// musiclink + linkending;
// 				deadlink;
// 			break;
// 		case musings:
// 			document.getElementById('musings-info').innerHTML =
// 				'Here I write and record some quotes and musings. You may write along too.';
// 			document.getElementById('musings-entry').innerHTML =
// 				// musingslink + linkending;
// 				deadlink;
// 			break;
// 		case personalrecord:
// 			document.getElementById('personalrecord-info').innerHTML =
// 				'Here, I write about my future plans concerning work and re-education.';
// 			document.getElementById('personalrecord-entry').innerHTML =
// 				// personalrecordlink + linkending;
// 				deadlink;
// 			break;
// 		case lifeinweeks:
// 			document.getElementById('lifeinweeks-info').innerHTML =
// 				'Here, I detail events of my life using a chart featuring each week of my life as the timeline.';
// 			document.getElementById('lifeinweeks-entry').innerHTML =
// 				// lifeinweekslink + linkending;
// 				deadlink;
// 			break;
// 		case billcalculator:
// 			document.getElementById('billcalculator-info').innerHTML =
// 				'Here, I plan my finances month-by-month based on my current situation.';
// 			document.getElementById('billcalculator-entry').innerHTML =
// 				billcalculatorlink + linkending;
// 			break;
// 		case studydocuments:
// 			document.getElementById('studydocuments-info').innerHTML =
// 				'Here, I provide personal resources';
// 			document.getElementById('studydocuments-entry').innerHTML =
// 				studydocumentslink + linkending;
// 			break;
// 		case dashboard:
// 			document.getElementById('dashboard-info').innerHTML =
// 				'Here, I display personally relevant statistics on progress';
// 			document.getElementById('dashboard-entry').innerHTML =
// 				dashboardlink + linkending;
// 			break;
// 	}
// }

// --- ITEM BOX STYLES --- //

// function styleItemBoxes(item, selection) {
// 	item.classList.add('flourish');
// 	selection.classList.add('text-flourish');
// }
//
// function unstyleItemBoxes(item, selection) {
// 	item.classList.remove('flourish');
// 	selection.classList.remove('text-flourish');
// }


// --- REMOVAL FUNCTIONS --- // REMOVED FOR APRIL 2024 UPDATES

// const infos = document.getElementsByClassName('info-box');
// const entries = document.getElementsByClassName('entry-box');
//
// function removeInfoBox(selection) {
// 	for (let i = 0; i < infos.length; ++i) {
// 		infos[i].innerHTML = '';
// 	}
// }
//
// function removeEntryBox(selection) {
// 	for (let i = 0; i < entries.length; ++i) {
// 		entries[i].innerHTML = '';
// 	}
// }
//
// function removeInfoAndEntry() {
// 	removeInfoBox(infos);
// 	removeEntryBox(entries);
// }

// --- ON CLICK FUNCTIONS --- //

let counter = 1;

// music.onclick = function () {
// 	console.log(counter);
// 	populateInfoAndEntryways(music);
// 	styleItemBoxes(item1, music);
// 	++counter;
// 	if (counter > 1 && counter % 2) {
// 		console.log('removed!');
// 		unstyleItemBoxes(item1, music);
// 		removeInfoAndEntry();
// 		counter = 1;
// 	}
// };
// musings.onclick = function () {
// 	console.log(counter);
// 	populateInfoAndEntryways(musings);
// 	styleItemBoxes(item2, musings);
// 	++counter;
// 	if (counter > 1 && counter % 2) {
// 		console.log('removed!');
// 		unstyleItemBoxes(item2, musings);
// 		removeInfoAndEntry();
// 		counter = 1;
// 	}
// };

// personalrecord.onclick = function () {
// 	console.log(counter);
// 	populateInfoAndEntryways(personalrecord);
// 	styleItemBoxes(item3, personalrecord);
// 	++counter;
// 	if (counter > 1 && counter % 2) {
// 		console.log('removed!');
// 		unstyleItemBoxes(item3, personalrecord);
// 		removeInfoAndEntry();
// 		counter = 1;
// 	}
// };

// lifeinweeks.onclick = function () {
// 	console.log(counter);
// 	populateInfoAndEntryways(lifeinweeks);
// 	styleItemBoxes(item4, lifeinweeks);
// 	++counter;
// 	if (counter > 1 && counter % 2) {
// 		console.log('removed!');
// 		unstyleItemBoxes(item4, lifeinweeks);
// 		removeInfoAndEntry();
// 		counter = 1;
// 	}
// };

// billcalculator.onclick = function () {
// 	console.log(counter);
// 	populateInfoAndEntryways(billcalculator);
// 	styleItemBoxes(item5, billcalculator);
// 	++counter;
// 	if (counter > 1 && counter % 2) {
// 		console.log('removed!');
// 		unstyleItemBoxes(item5, billcalculator);
// 		removeInfoAndEntry();
// 		counter = 1;
// 	}
// };

// studydocuments.onclick = function () {
// 	console.log(counter);
// 	populateInfoAndEntryways(studydocuments);
// 	styleItemBoxes(item6, studydocuments);
// 	++counter;
// 	if (counter > 1 && counter % 2) {
// 		console.log('removed!');
// 		unstyleItemBoxes(item6, studydocuments);
// 		removeInfoAndEntry();
// 		counter = 1;
// 	}
// };

// dashboard.onclick = function () {
// 	console.log(counter);
// 	populateInfoAndEntryways(dashboard);
// 	styleItemBoxes(item7, dashboard);
// 	++counter;
// 	if (counter > 1 && counter % 2) {
// 		console.log('removed!');
// 		unstyleItemBoxes(item7, dashboard);
// 		removeInfoAndEntry();
// 		counter = 1;
// 	}
// };
