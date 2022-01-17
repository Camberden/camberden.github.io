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
const ins = 60.76;
const wat = 80.24;
const ele = 77.39;
const int = 34.99;
const gym = 23.06;
const cre = 0.00;
let total = car + nav + sal + ren + ins + wat + ele + int + gym + cre;

const all = [car, nav, sal, ren, ins, wat, ele, int, gym, cre];


document.getElementById('car-cost').innerHTML = car;
document.getElementById('nav-cost').innerHTML = nav;
document.getElementById('sal-cost').innerHTML = sal;
document.getElementById('ren-cost').innerHTML = ren;
document.getElementById('ins-cost').innerHTML = ins;
document.getElementById('wat-cost').innerHTML = wat;
document.getElementById('ele-cost').innerHTML = ele;
document.getElementById('int-cost').innerHTML = int;
document.getElementById('gym-cost').innerHTML = gym;
document.getElementById('cre-cost').innerHTML = cre;


const calculateNewBalance = function(){
	for (let i = 0; i < all.length; ++i){
		const e = all[i];
		if (e.checked === true){
			console.log(e + e.checked);
			total -= e;
		} else {
			console.log('no check print');
		}
	}
	const endbalance = startbalance - total;
	document.getElementById('endbalance').innerHTML = endbalance.toFixed(2);
};

// Add a class to trigger the checkbox selection to have a value of $0.00

const insurance = document.getElementById('ins-cost');
console.log(insurance.checked);

calculateNewBalance();