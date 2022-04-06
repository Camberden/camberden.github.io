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
const ren = 775.00;
const rti = 12.10;
const ins = 70.09;
const wat = 80.24;
const ele = 77.39;
const int = 34.99;
const gym = 23.06;
const cre = 0.00;

const all = [car, nav, sal, ren, rti, ins, wat, ele, int, gym, cre];
// text box element list
const allElem = Array.from('car nav sal ren rti ins wat ele int gym cre'.split(' '))
	.map(str => document.getElementById(str + '-cost'));
// check box element list
const allElem2 = Array.from('car nav sal ren rti ins wat ele int gym cre'.split(' '))
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



// for (let i = 0; i < reserves.length; i++){
// 	console.log('testes');
// 	reservestotal += reserves[i];
// }

document.getElementById('totalreserves').innerHTML = Math.floor(reservestotal, 0);

allElem.forEach((elem, i) => elem.innerHTML = all[i]);
// document.getElementById('car-cost').innerHTML = car;
// document.getElementById('nav-cost').innerHTML = nav;
// document.getElementById('sal-cost').innerHTML = sal;
// document.getElementById('ren-cost').innerHTML = ren;
// document.getElementById('ins-cost').innerHTML = ins;
// document.getElementById('wat-cost').innerHTML = wat;
// document.getElementById('ele-cost').innerHTML = ele;
// document.getElementById('int-cost').innerHTML = int;
// document.getElementById('gym-cost').innerHTML = gym;
// document.getElementById('cre-cost').innerHTML = cre;


const calculateNewBalance = function(){
	let sum = 0;
	all.forEach((e, i) => {
		const elem = allElem2[i];
		if (elem.checked){
			console.log(e + e.checked);
			sum += e;
		}
		else {
			console.log('no check print');
		}
	});
	const endbalance = startbalance - sum;
	document.getElementById('endbalance').innerHTML = endbalance.toFixed(2);
};

// autoupdate
allElem2.forEach(elem => elem.onclick = calculateNewBalance);
// Add a class to trigger the checkbox selection to have a value of $0.00

const insurance = document.getElementById('ins-cost');
console.log(insurance.checked);

calculateNewBalance();