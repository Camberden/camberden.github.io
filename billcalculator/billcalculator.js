/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

let startbalance = document.getElementById('balance').value;
const startbalanceupdate = document.getElementById('balance');

startbalanceupdate.onkeypress = function(){
	startbalance = document.getElementById('balance').value;
	calculateNewBalance();
};

const car = 0.00;
const nav = 53.85;
const sal = 884.15;
const ren = 801.00;
const hrt = 801.00;
const rti = 10.88;
const ins = 85.15;
const loa = 300.00;
const wat = 15.00;
const ele = 70.27;
const int = 54.99;
const mus = 11.73;
const gym = 0.00;
let inp; // CUSTOM INPUT: INP
console.log(document.getElementById('inp-cost').innerHTML);
function updateInp(){
	all[all.length - 1] = inp = parseFloat(document.getElementById('inp-cost').value);
}

// ADD NEW VARIABLES TO all
const all = [car, nav, sal, ren, hrt, rti, ins, loa, wat, ele, int, mus, gym, inp];
// text box element list
// ADD NEW VARIABLES TO expenseNames
const expenseNames = Array.from('car nav sal ren hrt rti ins loa wat ele int mus gym inp'.split(' '));
const allElem = expenseNames
	.map(str => document.getElementById(str + '-cost'));
// check box element list
const allElem2 = expenseNames
	.map(str => document.getElementById(str + '-check'));

allElem.forEach((elem, i) => elem.innerHTML = all[i]);

const calculateNewBalance = function(){
	updateInp();
	let sum = 0;
	all.forEach((e, i) => {
		const elem = allElem2[i];
		if (elem.checked){
			console.log(`73; e = ${e}; e.checked = ${e.checked}`);
			sum += e;
		}
		else {
			console.log(`77; i = ${i}; e = ${e}`);
		}
	});
	const endbalance = startbalance - sum;
	document.getElementById('endbalance').innerHTML = endbalance.toFixed(2);
};

allElem2.forEach(elem => elem.onclick = calculateNewBalance);

calculateNewBalance();
