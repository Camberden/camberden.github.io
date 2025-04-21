window.onload = () => console.log("Running!");

// ---------- EXPENSE MANAGEMENT ---------- //
// TODO Load balance after last typed character

let startbalance = document.getElementById("balance").value;
const startbalanceupdate = document.getElementById("balance");

startbalanceupdate.onkeydown = function () {
	startbalance = document.getElementById("balance").value;
		calculateNewBalance();
};

const car = 1291.61;
const nav = 222.07;
const sal = 884.15;
const ren = 200.00;
const rti = 0.00;
const ins = 107.13;
const loa = 0.00;
const wat = 15.00;
const ele = 70.27;
const int = 71.99;
const mus = 6.39;
const don = 10.00;
const gym = 25.05;
let inp; // CUSTOM INPUT: INP
function updateInp() {
	all[all.length - 1] = inp = parseFloat(document.getElementById("inp-cost").value);
}

// ADD NEW VARIABLES TO all
const all = [car, nav, sal, ren, rti, ins, loa, wat, ele, int, mus, don, gym, inp];
// ADD NEW VARIABLES TO expenseNames
const expenseNames = Array.from("car nav sal ren rti ins loa wat ele int mus don gym inp".split(" "));
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

const getMonthID = (date = new Date()) => date.getUTCFullYear() * 12 + date.getUTCMonth();
const getYearID = (date = new Date()) => date.getUTCFullYear();

const pslfRequirement = 120;
const creditedPSLFMonths = 45;
document.getElementById("pslf-heading").innerHTML = creditedPSLFMonths + " months credited as of " + nowDisplay;

const pslfBoxes = document.getElementById("pslf-boxes");

function populatePSLFBoxes() {
	for (i = 0; i < pslfRequirement; i++) {
		if (i % 12 === 0) {
			const pslfBoxLine = document.createElement("hr");
			pslfBoxes.appendChild(pslfBoxLine);
		}
		const pslfBox = document.createElement("span");
		pslfBox.classList.add("pslf-box");

		if (i >= pslfRequirement - creditedPSLFMonths) {
			pslfBox.classList.add("pslf-box-filled");
		}
		pslfBoxes.appendChild(pslfBox);
	}

	pslfBoxes.classList.add("list-background");
}
populatePSLFBoxes();

// ----- STEP PAY PLAN MODULE ----- //

// 160 Sick Hours == 1 Month Service

const salarySchedule2020 = [
	["33130", "33130", "33130", "33130", "33130", "33130", "33130"], // C/OI
	["34220", "34220", "34220", "34220", "34220", "34220", "34220"], // C/OII
	["36598", "36598", "36598", "36598", "36598", "36598", "36598"], // C/OIII
];
const salarySchedule2021 = [
	["33130", "35449", "37576", "39455", "41033", "42264", "43109"], // C/OI
	["34220", "36615", "38812", "40753", "42383", "43654", "44527"], // C/OII
	["36598", "39160", "41510", "43586", "45329", "46689", "47623"], // C/OIII
];
const salarySchedule2022 = [
	["33958", "36335", "38515", "40441", "42059", "43321", "44187"], // C/OI
	["35076", "37530", "39782", "41772", "43443", "44745", "45640"], // C/OII
	["37513", "40139", "42548", "44676", "46462", "47856", "48814"], // C/OIII
];
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
// Pending
const salarySchedule2025 = [
	["40066", "42869", "45444", "47715", "49623", "51113", "52135"], // C/OI
	["41385", "44281", "46985", "49285", "51256", "52793", "53793"], // C/OII
	["44259", "47358", "50201", "52711", "54819", "56463", "57593"], // C/OIII
];
// Pending
const salarySchedule2026 = [
	["40066", "42869", "45444", "47715", "49623", "51113", "52135"], // C/OI
	["41385", "44281", "46985", "49285", "51256", "52793", "53793"], // C/OII
	["44259", "47358", "50201", "52711", "54819", "56463", "57593"], // C/OIII
];

const fiscalYear = 2024;
const fiscalYearDisplay = document.getElementById("fiscal-year");
fiscalYearDisplay.innerHTML = `FY ${fiscalYear}-${fiscalYear + 1}`;

const salarySchedule = salarySchedule2024;
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
	let currentHourlyRate = currentSalary / 52 / 40;
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

calculateStep();

function increaseCustodyLevel() {
	if (custodyLevel >= 1 && custodyLevel < 3){
		custodyLevel += 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function decreaseCustodyLevel() {
	if (custodyLevel <= 3 && custodyLevel > 1){
		custodyLevel -= 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function increaseYearsExperience(){
	if (yearsExperience >= 0 && yearsExperience < 6){
		yearsExperience += 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function decreaseYearsExperience() {
	if (yearsExperience > 0 && yearsExperience <= 6){
		yearsExperience -= 1;
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
toggleExperienceBonus();

function enableStepPayPlanButtons() {
	document.querySelectorAll(".step-pay-plan-button").forEach(button => {
		button.onclick = () => {
			ButtonInterface.buttonOnClick(button);
		switch (button.value) {
			case ("increase-custody-level"):
				increaseCustodyLevel();
				break;
			case ("decrease-custody-level"):
				decreaseCustodyLevel();
				break;
			case ("increase-years-experience"):
				increaseYearsExperience();
				break;
			case ("decrease-years-experience"):
				decreaseYearsExperience();
				break;
			case ("toggle-experience-bonus"):
				toggleExperienceBonus();
				break;
			default:
				console.log("Hi");
				break;
			};
		};

		button.onmouseenter = () => {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});
}
enableStepPayPlanButtons();

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

function cpaModalAccess() {
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
}
cpaModalAccess();

// PRIMARY CPA DIV
let cpaCredits = 0;
const cpaCreditsDisplay = document.getElementById("cpa-credits");
const cpaProgressBar = document.getElementById("cpa-progress-bar");

function initCpaCredits() {
	document.querySelectorAll(".taken").forEach(course => {
		cpaCredits += course.value;
	});
	document.querySelectorAll(".taking").forEach(course => {
		cpaCredits += course.value;
	});
}
initCpaCredits();

function displayCpaCredits() {
	cpaCreditsDisplay.innerHTML = cpaCredits;
	cpaCompletionPercentage = cpaCredits / 30 * 100;
	if (cpaCredits >= 30) {
		console.log("Where's my bar???")
		cpaProgressBar.innerHTML = `<span style="width:100%;"></span>`
	} else {
		console.log("Stop hiding my bar!!!")
		cpaProgressBar.innerHTML = `<span style="width:${cpaCompletionPercentage}%;"></span>`;
	}
}
displayCpaCredits();

function enableCpaProjection(){
	document.querySelectorAll(".not-taken").forEach(course => {
		let clicked = false;
		course.onclick = function() {
			if (!clicked) {
			console.log(course.value);
			clicked = true;
			cpaCredits += course.value;
			course.classList.add("planned-or-completed");
			} else {
				cpaCredits -= course.value;
				clicked = false;
				course.classList.remove("planned-or-completed");
			}
			displayCpaCredits();
		}
	});
}
enableCpaProjection();

// ---------- REFERENCE DOCUMENTS ---------- //

// TODO

const seasonTunes = [
	"July 2022: Orbital - Somewhere Out There, Part 2",
	"September 2023: Orbital - Nowhere",
	"December 2024: Pet Shop Boys - Suburbia",
	"January 2025: Nobonoko - Cat Comet",
	"February 2025: Napcast - People Places",
	"March 2025: Yu Takahashi - Ashita wa Kitto Ii Hi ni Naru",
	"April 2025: Huwie Ishizaki - Peanuts Butter",
];
const seasonTunesList = document.getElementById("season-tunes-list");
// Generates Any Reference Document if Present in Assets
for (const tune of seasonTunes) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	const text = document.createTextNode(tune);
	a.classList.add("marker");
	a.appendChild(text);
	// a.setAttribute("href", doc);
	// a.setAttribute("target", "_blank");
	li.appendChild(a);
	seasonTunesList.appendChild(li);
};


// ---------- REFERENCE DOCUMENTS ---------- //

const refdocs = [
	"../assets/refdoc-acc220-schedule.pdf",
	"../assets/refdoc-acc220-syllabus.pdf",
	"../assets/refdoc-acc220-acronyms.pdf",
	"../assets/refdoc-acc121-schedule.pdf",
	"../assets/refdoc-chzc-chant2020.pdf",
	"../assets/refdoc-cti110-key.pdf",
	"../assets/refdoc-duolingo-japanese-vocab.pdf",
	"../assets/refdoc-mat121-manual.pdf",
	"../assets/refdoc-mat171-manual.pdf",
	"../assets/refdoc-mat171-transformations.pdf",
	"../assets/refdoc-mysql-phpadmin-setup.pdf",
	"../assets/refdoc-mysql-phpadmin-setup.pdf",
	"../assets/refdoc-nc-college-equivalence.pdf",
	"../assets/refdoc-oryoki-guide.pdf",
	"../assets/refdoc-chzc-condensed.pdf",
];
const refdocsList = document.getElementById("refdocs-list");
// Generates Any Reference Document if Present in Assets
for (const doc of refdocs) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	const text = document.createTextNode(doc.substring(17, doc.length - 4));
	a.classList.add("marker");
	a.appendChild(text);
	a.setAttribute("href", doc);
	a.setAttribute("target", "_blank");
	li.appendChild(a);
	refdocsList.appendChild(li);
};
