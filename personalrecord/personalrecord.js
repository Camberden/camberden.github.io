/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const cpccourses = document.querySelectorAll('.cpcreq');
const gcpcourses = document.querySelectorAll('.cpcreq, .gcpreq');
const mcscourses = document.querySelectorAll('.cpcreq, .gcpreq, .mcsreq');

const aas = document.getElementById('aas');
const cpc = document.getElementById('cpc');
const gcp = document.getElementById('gcp');
const mcs = document.getElementById('mcs');

console.log(mcs);

aas.onmouseenter = function(){
	displayCredits(aas);
};

cpc.onmouseenter = function(){
	for (let i = 0; i < cpccourses.length; ++i){
		const course = cpccourses[i];
		course.classList.add('cpcreqhighlight');
	}
	displayCredits(cpc);
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
		displayCredits(gcp);
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
		displayCredits(mcs);
	}
};
mcs.onmouseleave = function(){
	for (let i = 0; i < mcscourses.length; ++i){
		const course = mcscourses[i];
		course.classList.remove('mcsreqhighlight');
	}
};

function displayCredits(curriculum){
	switch (curriculum){
		case aas:
			document.getElementById('credit-info').innerHTML =
				'<p>CREDIT HOUR w/o FEES: $76<br>' +
				'PER 3 CREDIT COURSE: $357.00<br>';
			break;
		case cpc:
			document.getElementById('credit-info').innerHTML =
				'<p>CREDIT HOUR w/o FEES: $272.29<br>' +
				'PER 3 CREDIT COURSE: $1066.89<br>' +
				'FOR ALL 22 CREDITS: $7740.52';
			break;
		case gcp:
			document.getElementById('credit-info').innerHTML =
				'<p>CREDIT HOUR w/o FEES: $505.28<br>' +
				'PER 3 CREDIT COURSE: $2,782.53<br>' +
				'FOR ALL 12 CREDITS: $11130.12';
			break;
		case mcs:
			document.getElementById('credit-info').innerHTML =
				'<p>CREDIT HOUR w/o FEES: $505.28<br>' +
				'PER 3 CREDIT COURSE: $2,782.53<br>' +
				'FOR ALL 19 CREDITS $19982,99';
			break;
	}
}