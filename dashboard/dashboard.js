window.onload = () => console.log("Running!");

// ----- EXPENSE MANAGEMENT ----- //

let startbalance = document.getElementById("balance").value;
const startbalanceupdate = document.getElementById("balance");

startbalanceupdate.onkeydown = function () {
	startbalance = document.getElementById("balance").value;
	calculateNewBalance();
};

const car = 0.00;
const nav = 53.85;
const sal = 884.15;
const ren = 801.00;
const hrt = 801.00;
const rti = 10.79;
const ins = 66.98;
const loa = 300.00;
const wat = 15.00;
const ele = 70.27;
const int = 71.99;
const mus = 6.39;
const gym = 0.00;
let inp; // CUSTOM INPUT: INP
function updateInp() {
	all[all.length - 1] = inp = parseFloat(document.getElementById("inp-cost").value);
}

// ADD NEW VARIABLES TO all
const all = [car, nav, sal, ren, hrt, rti, ins, loa, wat, ele, int, mus, gym, inp];
// ADD NEW VARIABLES TO expenseNames
const expenseNames = Array.from("car nav sal ren hrt rti ins loa wat ele int mus gym inp".split(" "));
const allElem = expenseNames
	.map(str => document.getElementById(str + "-cost"));
// check box element list
const allElem2 = expenseNames
	.map(str => document.getElementById(str + "-check"));

allElem.forEach((elem, i) => elem.innerHTML = all[i]);

const calculateNewBalance = function () {
	updateInp();
	let sum = 0;
	all.forEach((e, i) => {
		const elem = allElem2[i];
		if (elem.checked) {
			// console.log(`73; e = ${e}; e.checked = ${e.checked}`);
			sum += e;
		}
		else {
			// console.log(`77; i = ${i}; e = ${e}`);
		}
	});
	const endbalance = startbalance - sum;
	document.getElementById("endbalance").innerHTML = endbalance.toFixed(2);
};

allElem2.forEach(elem => elem.onclick = calculateNewBalance);

calculateNewBalance();


// ----- PSLF DATA TABLES AND PROGRESS BAR ----- //

const workAnniversary = new Date(1602156600000);
const fiscalYear2024 = 1719806400000;

const now = new Date();
const nowDisplay = now.toLocaleString("en-US");
const fiscalYear = (5 < now.getMonth()) + now.getFullYear() - 1; // July or Later // -1 for FY
const fiscalYearDisplay = document.getElementById("fiscal-year");
fiscalYearDisplay.innerHTML = `FY ${fiscalYear}-${fiscalYear + 1}`;

const getMonthID = (date = new Date()) => date.getUTCFullYear() * 12 + date.getUTCMonth();
const getYearID = (date = new Date()) => date.getUTCFullYear();

const govtServiceMonths = getMonthID(now) - getMonthID(new Date(workAnniversary)) + 1; // Adjusted from base Zero
const govtServiceYears = getYearID(now) - getYearID(new Date(workAnniversary));

const pslfRequirement = 120;
const creditedPSLFMonths = 45;

const pslfProgressBar = document.getElementById("pslf-progress-bar");
document.getElementById("pslf-heading").innerHTML = 4 + " years of service with " + creditedPSLFMonths + " months credited as of " + nowDisplay;
const pslfCompletionPercentage = creditedPSLFMonths / pslfRequirement * 100;
pslfProgressBar.innerHTML = `<span style="width:${pslfCompletionPercentage}%;"></span>`;

pslfBoxes = document.getElementById("pslf-boxes");

function populatePSLFBoxes() {
	for (i = 0; i < pslfRequirement; i++) {
		if (i % 12 === 0) {
			const pslfBoxLine = document.createElement("hr");
			pslfBoxes.appendChild(pslfBoxLine);
		}
		const pslfBox = document.createElement("span");
		pslfBox.classList.add("pslf-box");

		if (i > pslfRequirement - creditedPSLFMonths) {
			pslfBox.classList.add("pslf-box-filled");
		}
		pslfBoxes.appendChild(pslfBox);
	}

	pslfBoxes.classList.add("list-background");
}
populatePSLFBoxes();



// ----- STEP PAY PLAN MODULE ----- //

// 160 Sick Hours == 1 Month Service

const salarySchedule2023 = [
	["36525", "39801", "41427", "43498", "45237", "46595", "47527"], // C/OI
	["37727", "40367", "42790", "44929", "46726", "48127", "49090"], // C/OII
	["40348", "43173", "45764", "48052", "49974", "51473", "52503"], // C/OIII
];
const salarySchedule2024 = [
	["37621", "40253", "42670", "44803", "46594", "47993", "48953"], // C/OI
	["38859", "41578", "44074", "46277", "48128", "49571", "50563"], // C/OII
	["41558", "44468", "47137", "49494", "51473", "53017", "54078"], // C/OIII
];

const salarySchedule2025 = [
	["37621", "40253", "42670", "44803", "46594", "47993", "48953"], // C/OI
	["38859", "41578", "44074", "46277", "48128", "49571", "50563"], // C/OII
	["41558", "44468", "47137", "49494", "51473", "53017", "54078"], // C/OIII
];
// Pending
const salarySchedule2026 = [
	["37621", "40253", "42670", "44803", "46594", "47993", "48953"], // C/OI
	["38859", "41578", "44074", "46277", "48128", "49571", "50563"], // C/OII
	["41558", "44468", "47137", "49494", "51473", "53017", "54078"], // C/OIII
];

const salarySchedule = salarySchedule2024;
// const setSalarySchedule = fy => {
// 	switch (fy) {
// 		// TODO: make past cases
// 		case (2023):
// 			salarySchedule = salarySchedule2023;
// 			break;
// 		case (2024):
// 			salarySchedule = salarySchedule2024;
// 			break;
// 		default:
// 			salarySchedule = fy;
// 			break;
// 	}
// }

// setSalarySchedule(fiscalYear);

let currentSalary;
let highlightedSalary;
let custodyLevel = 1;
let yearsExperience = 4;
let experienceBonus = 1;
let adjustedExperience;
let activeBonus = true;


function calculateStep(){
	adjustedExperience = yearsExperience === 6 ? yearsExperience : (yearsExperience + experienceBonus);
	currentSalary = salarySchedule2024[custodyLevel - 1][adjustedExperience];
	document.getElementById("current-salary").innerHTML = currentSalary;
	document.getElementById("monthly-salary").innerHTML = (currentSalary / 12).toFixed(2);
	let currentHourlyRate = ((currentSalary / 52) / 40);
	document.getElementById("hourly-salary").innerHTML = currentHourlyRate.toFixed(2);
	document.getElementById("gap-pay").innerHTML = (currentHourlyRate * 11).toFixed(2);
	document.getElementById("overtime-diff").innerHTML = (currentHourlyRate * 1.5).toFixed(2);
	document.getElementById("night-diff").innerHTML = (currentHourlyRate / 10).toFixed(2);
	document.getElementById("weekend-diff").innerHTML = (currentHourlyRate / 10).toFixed(2);
	document.getElementById("holiday-diff").innerHTML = (currentHourlyRate / 1.75).toFixed(2);

	document.getElementById("custody-level").innerHTML = ("I".repeat(custodyLevel));
	document.getElementById("years-experience").innerHTML = yearsExperience;
	highlightedSalary = document.getElementById(`co${custodyLevel}-${adjustedExperience}`);
	highlightedSalary.classList.add("salary-highlight");
}

function removeHighlightedSalary(){
	highlightedSalary.classList.remove("salary-highlight");
}
document.getElementById("toggle-bonus").classList.add("button-toggle-enabled");
document.getElementById("toggle-bonus").innerHTML = "Extra Step Enabled";

calculateStep();

function increaseCustodyLevel() {
	if (custodyLevel >= 1 && custodyLevel < 3){
		custodyLevel+= 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function decreaseCustodyLevel() {
	if (custodyLevel <= 3 && custodyLevel > 1){
		custodyLevel-= 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function increaseYearsExperience(){
	if (yearsExperience >= 0 && (yearsExperience) < 6){
		yearsExperience += 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function decreaseYearsExperience() {
	if (yearsExperience > 0 && (yearsExperience) <= 6){
		yearsExperience-= 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function toggleExperienceBonus(){
	if (yearsExperience >= 0 && yearsExperience < 6 && !activeBonus) {
		experienceBonus = 1;
		activeBonus = true;
		document.getElementById("toggle-bonus").classList.add("button-toggle-enabled");
		document.getElementById("toggle-bonus").innerHTML = "Extra Step Enabled";
	} else if (activeBonus) {
		experienceBonus = 0;
		activeBonus = false;
		document.getElementById("toggle-bonus").classList.remove("button-toggle-enabled");
		document.getElementById("toggle-bonus").innerHTML = "Add Extra Step";
	}
	removeHighlightedSalary();
	calculateStep();
}
function populateSalaryTable(){
	for (i = 0; i < salarySchedule.length; i++) {
		for (j = 0; j < salarySchedule[i].length; j++){
			document.getElementById(`co${i + 1}-${j}`).innerHTML = salarySchedule[i][j];
			if (salarySchedule[i][j] === currentSalary) {
				document.getElementById(`co${i + 1}-${j}`).classList.add("salary-highlight");
			}
		}
	}
}

populateSalaryTable();

// ---------- REEDUCATION INFORMATION ----------//

// MODAL

const modal = document.getElementById("menumodal");
const menuclick = document.getElementById("menulabel");
const menuclose = document.getElementsByClassName("closemenu")[0];

menuclick.onclick = function () {
	modal.style.display = "block";
};

menuclose.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
};
const cpacourses = document.querySelectorAll(".cpa-req");

// ---------- LIFE IN WEEKS VISUALIZER ----------//

const inception = 753300000000;
const millisecondweek = 1000 * 60 * 60 * 24 * 7;
const d = new Date();
const weekslived = (d.getTime() - inception) / millisecondweek;
// Change 'newmoment' value to identify the week of a moment.
const newmoment = 1571976000000;
const dateplanning = (newmoment - inception) / millisecondweek;

function populateBoxes(){
	const weeks = 52;
	const years = 78;
	const spans = new Array(weeks * years).fill(0).map((_, i) => {
		const span = document.createElement('span');
		span.classList.add('momentbox');
		span.title = i + 1;
		span.id = `box${i}`;
		return span;
	});

	const boxinput = document.getElementById('box-input');
	spans.forEach(s => boxinput.appendChild(s));

	spans.forEach((span, i) => {
		if (i < weekslived){
			span.classList.add('momentboxfilled');
		}

		// First Year Moment
		if (i === 0){
			span.classList.add('moment', 'firstyear-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('firstyear-moment');
			}, false);
		}
		// High School Moment
		if (i === 715){
			span.classList.add('moment', 'highschool-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('highschool-moment');
			}, false);
		}
		// Undergraduate School Moment
		if (i === 924){
			span.classList.add('moment', 'undergrad-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('undergrad-moment');
			}, false);
		}
		// Graduate School Moment
		if (i === 1132){
			span.classList.add('moment', 'gradschool-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('gradschool-moment');
			}, false);
		}
		// Jail Hired Moment
		if (i === 1239){
			span.classList.add('moment', 'jailhired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('jailhired-moment');
			}, false);
		}
		// Jail Fired Moment
		if (i === 1252){
			span.classList.add('moment', 'jailfired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('jailfired-moment');
			}, false);
		}
		// UPS Hired Moment
		if (i === 1254){
			span.classList.add('moment', 'upshired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('upshired-moment');
			}, false);
		}
		// Security Hired Moment
		if (i === 1261){
			span.classList.add('moment', 'securityhired-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('securityhired-moment');
			}, false);
		}
		// Tech Company WV Moment
		if (i === 1353){
			span.classList.add('moment', 'techwv-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techwv-moment');
			}, false);
		}
		// Tech Company VA Moment
		if (i === 1366){
			span.classList.add('moment', 'techva-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techva-moment');
			}, false);
		}
		// Tech Company Furloughed
		if (i === 1384){
			span.classList.add('moment', 'techvafurloughed-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('techvafurloughed-moment');
			}, false);
		}
		// NC Relocation Moment
		if (i === 1395){
			span.classList.add('moment', 'ncrelocation-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('ncrelocation-moment');
			}, false);
		}
		// Covid Moment
		if (i === 1452){
			span.classList.add('moment', 'covid-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('covid-moment');
			}, false);
		}

		// Covid Moment 2
		if (i === 1469){
			span.classList.add('moment', 'covid2-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('covid2-moment');
			}, false);
		}

		// PERT Tryout
		if (i === 1476){
			span.classList.add('moment', 'perttryout-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('perttryout-moment');
			}, false);
		}

		// Joined PERT
		if (i === 1478){
			span.classList.add('moment', 'joinedpert-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('joinedpert-moment');
			}, false);
		}

		// Moved to Asheville
		if (i === 1488){
			span.classList.add('moment', 'asheville-moment');
			span.addEventListener('click', function(){
				displayMomentInfo('asheville-moment');
			}, false);
		}
	});
}

document.getElementById('weeks-lived').innerHTML = 'Weeks lived: ' + Math.floor(weekslived + 1);
// populateBoxes();

// ---------- PENSION CALCULATOR ----------//

let retirementAge = 56;
// from 50 to 65
let serviceCredit = 26;
let averageForPension = 70000;

// REDO
let pensionReductionVisual = document.getElementById(retirementAge + "-years-row").children.item(30 - serviceCredit);
let pensionReductionPercentage = parseInt(pensionReductionVisual.innerHTML.replace("%", ""));
let reductionAmount = 0;
let reductionPercentageVisual = document.getElementById("reduction-percentage");
let reductionAmountVisual = document.getElementById("reduction-amount");


// REDO - CONSIDER GENERATING TABLE, BUT MAP TO AN ARRAY OF PERCENTAGE VALUES
function calculateAverageForPension() {
	pensionReductionVisual.classList.remove("salary-highlight");

	averageForPension = 0;
	for (i = 1; i <= 4; i++) {
		averageForPension += parseInt(document.getElementById(`yr${i}-for-pension`).value);
	}
	averageForPension /= 4;
	serviceCredit = parseInt(document.getElementById("service-years-for-pension").value);

	if (serviceCredit >= 30 || serviceCredit < 20 || retirementAge >= 60) {
		pensionReductionVisual.classList.remove("salary-highlight");
		serviceCredit = 30;
		retirementAge = 60;
		document.getElementById("full-service-credit").classList.add("salary-highlight");
		reductionAmount = 0;
		reductionAmountVisual.innerHTML = reductionAmount; 
	} else {
		document.getElementById("full-service-credit").classList.remove("salary-highlight");
		pensionReductionVisual = document.getElementById(retirementAge + "-years-row").children.item(30 - serviceCredit);
		document.getElementById("reduction-percentage").innerHTML = pensionReductionPercentage;
		// 29 years of service is not reducing by 5% properly in Reduction Amount
		reductionAmountVisual.innerHTML = averageForPension * parseFloat("." + (100 - pensionReductionPercentage));
		reductionPercentageVisual.innerHTML = pensionReductionPercentage;
		averageForPension *= parseFloat("." + pensionReductionPercentage);
		
	}
		document.getElementById("average-for-pension").innerHTML = (averageForPension).toFixed(2);
		document.getElementById("pre-monthly-pension").innerHTML = (averageForPension * 0.0182).toFixed(2);
		document.getElementById("annual-pension").innerHTML = (averageForPension * 0.0182 * serviceCredit).toFixed(2);
		document.getElementById("monthly-pension").innerHTML = (averageForPension * 0.0182 * serviceCredit / 12).toFixed(2);
	
	highlightPensionTable();
};

function highlightPensionTable(){
	pensionReductionVisual.classList.remove("salary-highlight");
	pensionReductionVisual.classList.add("salary-highlight");
};

highlightPensionTable();

/*
60+ Table:
64 ... 97%
63 ... 94%
62 ... 91%
61 ... 88%
60 ... 85%
*/ 