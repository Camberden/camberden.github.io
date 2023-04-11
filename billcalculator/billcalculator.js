/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');


let startbalance = document.getElementById('balance').value;
const startbalanceupdate = document.getElementById('balance');

startbalanceupdate.onkeypress = function(){
	startbalance = document.getElementById('balance').value;
	calculateNewBalance();
};

const car = 514.03;
const nav = 0.00;
const sal = 884.15;
const ren = 1190.00;
const rti = 9.36;
const ins = 60.18;
const loa = 169.10;
const wat = 0.00;
const ele = 115.00;
const int = 54.99;
const gym = 0.00;
const cre = 0.00;

// CUSTOM INPUT: INP
let inp;
console.log(document.getElementById('inp-cost').innerHTML);

function updateInp(){
	all[all.length - 1] = inp = parseFloat(document.getElementById('inp-cost').value);
}



const all = [car, nav, sal, ren, rti, ins, loa, wat, ele, int, gym, cre, inp];
// text box element list
const expenseNames = Array.from('car nav sal ren rti ins loa wat ele int gym cre inp'.split(' '));
const allElem = expenseNames
	.map(str => document.getElementById(str + '-cost'));
// check box element list
const allElem2 = expenseNames
	.map(str => document.getElementById(str + '-check'));

const baserate = 20.00;
const retirement = 10778.72;
const vacationleave = 267.99;
const sickleave = 211.57;
const holidayleave = 96.00;
//const mutualfund = 49.16;
//const cryptofund = 19.17;
const securitydeposit = 300.00;

// Removed mutualfund and cryptofund from reserves
const reserves = [retirement, vacationleave, sickleave, securitydeposit];
const reservestotal = retirement + (vacationleave * baserate) + (sickleave * baserate) +
	(holidayleave * baserate) + securitydeposit;
document.getElementById('r-retirement').innerHTML = retirement;
document.getElementById('r-sickleave').innerHTML = sickleave * baserate;
document.getElementById('r-vacationleave').innerHTML = vacationleave * baserate;
document.getElementById('r-holidayleave').innerHTML = holidayleave * baserate;
//document.getElementById('r-mutualfund').innerHTML = mutualfund;
//document.getElementById('r-cryptocurrency').innerHTML = cryptofund;
document.getElementById('r-securitydeposit').innerHTML = securitydeposit;

document.getElementById('totalreserves').innerHTML = Math.floor(reservestotal, 0);

// CHECKBOX LOGIC

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

// autoupdate
allElem2.forEach(elem => elem.onclick = calculateNewBalance);
// Add a class to trigger the checkbox selection to have a value of $0.00

// const insurance = document.getElementById('ins-cost');

calculateNewBalance();
