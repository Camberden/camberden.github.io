/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const cpccourses = document.querySelectorAll('.cpcreq');
console.log(cpccourses);
const gcpcourses = document.querySelectorAll('.cpcreq, .gcpreq');
console.log(gcpcourses);
const mcscourses = document.querySelectorAll('.cpcreq, .gcpreq, .mcsreq');
console.log(mcscourses);

const cpc = document.getElementById('cpc');
const gcp = document.getElementById('gcp');
const mcs = document.getElementById('mcs');

cpc.onmouseenter = function(){
	for (let i = 0; i < cpccourses.length; ++i){
		const course = cpccourses[i];
		course.classList.add('cpcreqhighlight');
	}
};
cpc.onmouseleave = function(){
	for (let i = 0; i < cpccourses.length; ++i){
		const course = cpccourses[i];
		course.classList.remove('cpcreqhighlight');
	}
};

gcp.onmouseenter = function(){
	for (let i = 0; i < gcpcourses.length; ++i){
		const course = gcpcourses[i];
		course.classList.add('gcpreqhighlight');
	}
};
gcp.onmouseleave = function(){
	for (let i = 0; i < gcpcourses.length; ++i){
		const course = gcpcourses[i];
		course.classList.remove('gcpreqhighlight');
	}
};

mcs.onmouseenter = function(){
	for (let i = 0; i < mcscourses.length; ++i){
		const course = mcscourses[i];
		course.classList.add('mcsreqhighlight');
	}
};
mcs.onmouseleave = function(){
	for (let i = 0; i < mcscourses.length; ++i){
		const course = mcscourses[i];
		course.classList.remove('mcsreqhighlight');
	}
};