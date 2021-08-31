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
const ins = 91.16;
const wat = 80.24;
const ele = 77.39;
const int = 34.99;
const gym = 23.06;
const cre = 0.00;
const total = car + nav + sal + ren + ins + wat + ele + int + gym + cre;


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
	const endbalance = startbalance - total;
	document.getElementById('endbalance').innerHTML = endbalance.toFixed(2);
	// const expenses = parseInt(document.getElementsByClassName('expense').value);
	// let total = 0;
	// expenses.forEach(expense => {
	// 	total += expense;
	// });
	// console.log(expenses);
	// document.getElementById('endbalance').innerHTML = total;
};

calculateNewBalance();