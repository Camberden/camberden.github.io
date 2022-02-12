/* eslint-disable no-unused-vars */
'use strict';

window.onload = () => console.log('Running!');

const taking = document.querySelectorAll('.taking');
const cpccourses = document.querySelectorAll('.cpcreq');
const gcpcourses = document.querySelectorAll('.cpcreq, .gcpreq');
const mcscourses = document.querySelectorAll('.cpcreq, .gcpreq, .mcsreq');
const osucourses = document.querySelectorAll('.osureq');
const ecucourses = document.querySelectorAll('.ecureq');
const psucourses = document.querySelectorAll('.psureq');

const currentlyTaking = document.getElementById('currently-taking');
const aas = document.getElementById('aas');
const cpc = document.getElementById('cpc');
const gcp = document.getElementById('gcp');
const mcs = document.getElementById('mcs');
const osu = document.getElementById('osu');
const ecu = document.getElementById('ecu');
const psu = document.getElementById('psu');

console.log(mcs);

currentlyTaking.onmouseover = function(){
	currentlyTaking.classList.add('takinghighlight');
};
currentlyTaking.onmouseleave = function(){
	currentlyTaking.classList.remove('takinghighlight');
};

currentlyTaking.onclick = function(){
	for (let i = 0; i < taking.length; ++i){
		const course = taking[i];
		course.classList.add('takinghighlight');
	}
};

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

osu.onmouseenter = function(){
	for (let i = 0; i < osucourses.length; ++i){
		const course = osucourses[i];
		course.classList.add('osureqhighlight');
		displayCredits(osu);
	}
};

osu.onmouseleave = function(){
	for (let i = 0; i < osucourses.length; ++i){
		const course = osucourses[i];
		course.classList.remove('osureqhighlight');
	}
};

ecu.onmouseenter = function(){
	for (let i = 0; i < ecucourses.length; ++i){
		const course = ecucourses[i];
		course.classList.add('ecureqhighlight');
		displayCredits(ecu);
	}
};

ecu.onmouseleave = function(){
	for (let i = 0; i < ecucourses.length; ++i){
		const course = ecucourses[i];
		course.classList.remove('ecureqhighlight');
	}
};

psu.onmouseenter = function(){
	for (let i = 0; i < psucourses.length; ++i){
		const course = psucourses[i];
		course.classList.add('psureqhighlight');
		displayCredits(psu);
	}
};

psu.onmouseleave = function(){
	for (let i = 0; i < psucourses.length; ++i){
		const course = psucourses[i];
		course.classList.remove('psureqhighlight');
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
		case osu:
			document.getElementById('credit-info-or').innerHTML =
				'<p>CREDIT HOUR w/o FEES: $527.00<br>' +
				'MTH 111 COURSE: $1324.00<br>' +
				'PER 4 CREDIT COURSE: $2,108.00<br>' +
				'FOR ALL 60 CREDITS $32,220,00';
			break;
		case ecu:
			document.getElementById('credit-info-ecu').innerHTML =
				'<p>CREDIT HOUR w/o FEES: $289.11<br>' +
				'PER 3 CREDIT COURSE: $867.33<br>' +
				'FOR ALL 19 CREDITS $8673.30';
			break;
		case psu:
			document.getElementById('credit-info-psu').innerHTML =
				'<p>CREDIT HOUR w/o FEES: $996.00<br>' +
				'PER 3 CREDIT COURSE: $2988.00<br>' +
				'FOR ALL 36 CREDITS $35,856.30';
			break;
	}
}

