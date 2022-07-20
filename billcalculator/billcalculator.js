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
const ins = 60.21;
const loa = 169.10;
const wat = 0.00;
const ele = 77.39;
const int = 55.39;
const gym = 23.06;
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

const baserate = 20;
const retirement = 6176.75;
const vacationleave = 173.02;
const sickleave = 146.5;
const holidayleave = 88;
const mutualfund = 1152.79;
const cryptofund = 278.15;
const securitydeposit = 775.00;

const reserves = [retirement, vacationleave, sickleave, mutualfund, cryptofund, securitydeposit];
const reservestotal = retirement + (vacationleave * baserate) + (sickleave * baserate) +
	(holidayleave * baserate) + mutualfund + cryptofund + securitydeposit;
document.getElementById('r-retirement').innerHTML = retirement;
document.getElementById('r-sickleave').innerHTML = sickleave * baserate;
document.getElementById('r-vacationleave').innerHTML = vacationleave * baserate;
document.getElementById('r-holidayleave').innerHTML = holidayleave * baserate;
document.getElementById('r-mutualfund').innerHTML = mutualfund;
document.getElementById('r-cryptocurrency').innerHTML = cryptofund;
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
