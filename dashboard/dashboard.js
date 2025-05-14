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

// const pslfRequirement = 120;
// const creditedPSLFMonths = 45;
// document.getElementById("pslf-heading").innerHTML = creditedPSLFMonths + " months credited as of " + nowDisplay;

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

const salarySchedules = [
	salarySchedule2020, salarySchedule2021, salarySchedule2022, salarySchedule2023, salarySchedule2024, salarySchedule2025, salarySchedule2026,
];

let fiscalYear = 2024;
const fiscalYearDisplay = document.getElementById("fiscal-year");
fiscalYearDisplay.innerHTML = `${fiscalYear}-${fiscalYear + 1}`;

let currentSchedule = salarySchedules[fiscalYear - 2020];
let currentSalary;
let highlightedSalary;
let custodyLevel = 1;
let yearsExperience = 4;

function nextFiscalYear() {
		fiscalYear++;
		fiscalYearDisplay.innerHTML = `${fiscalYear}-${fiscalYear + 1}`;
		currentSchedule = salarySchedules[fiscalYear - 2020];
		removeHighlightedSalary();
		populateSalaryTable();
		calculateStep();
}

function previousFiscalYear() {
		fiscalYear--;
		fiscalYearDisplay.innerHTML = `${fiscalYear}-${fiscalYear + 1}`;
		currentSchedule = salarySchedules[fiscalYear - 2020];
		removeHighlightedSalary();
		populateSalaryTable();
		calculateStep();
}

function calculateStep(){

	currentSalary = currentSchedule[custodyLevel - 1][yearsExperience];
	document.getElementById("current-salary").innerHTML = currentSalary;
	document.getElementById("monthly-salary").innerHTML = (currentSalary / 12).toFixed(2);
	let currentHourlyRate = currentSalary / 52 / 40;
	document.getElementById("hourly-salary").innerHTML = currentHourlyRate.toFixed(2);
	document.getElementById("gap-pay").innerHTML = (currentHourlyRate * 11).toFixed(2);
	document.getElementById("overtime-diff").innerHTML = ((currentHourlyRate * 1.5) - currentHourlyRate).toFixed(2);
	document.getElementById("night-diff").innerHTML = (currentHourlyRate / 10).toFixed(2);
	document.getElementById("weekend-diff").innerHTML = (currentHourlyRate / 10).toFixed(2);
	document.getElementById("holiday-diff").innerHTML = ((currentHourlyRate * 1.75) - currentHourlyRate).toFixed(2);

	document.getElementById("custody-level").innerHTML = ("I".repeat(custodyLevel));
	document.getElementById("years-experience").innerHTML = yearsExperience;
	highlightedSalary = document.getElementById(`co${custodyLevel}-${yearsExperience}`);
	highlightedSalary.classList.add("salary-highlight");
}

function highlightSalary(level, step) {
	document.getElementById(`co${level + 1}-${step}`).classList.add("salary-highlight");
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
			case ("next-fiscal-year"):
				nextFiscalYear();
				break;
			case ("previous-fiscal-year"):
				previousFiscalYear();
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
	for (i = 0; i < currentSchedule.length; i++) {
		for (j = 0; j < currentSchedule[i].length; j++){
			document.getElementById(`co${i + 1}-${j}`).innerHTML = currentSchedule[i][j];
			// if (currentSchedule[i][j] === currentSalary) {
			// 	document.getElementById(`co${i + 1}-${j}`).classList.add("salary-highlight");
			// }
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
		// console.log("Where's my bar???")
		cpaProgressBar.innerHTML = `<span style="width:100%;"></span>`
	} else {
		// console.log("Stop hiding my bar!!!")
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


// ---------- PENSION CALCULATOR UTILITY ---------- //

// TODO: lock in age and service, press up and down arrows to adjust.
// TODO: add monthly increments, perhaps.


function generatePensionTable() {
	const table = document.getElementById("pension-table");
	while (table.lastChild) {
		table.removeChild(table.lastChild);
	}
	let retirementAge = 60;
	let retirementService = 30;
	const reductionIncrements = [95, 90, 85, 80, 75, 70, 65, 60, 55, 52, 50];
	let reductionLow = 3; // 59 years

	for (let i = 0, j = 0; i < 11; i++) {
	
		let tr = document.createElement("tr");
		tr.setAttribute("id", `pension-row-${retirementAge}`);
		let th = document.createElement("th");
		let text;
		if (i === 0 && j === 0) {
			th.setAttribute("id", `pension-age-${retirementAge}-service-${retirementService}`);
			text = document.createTextNode(retirementAge + "/" + retirementService + `\n100%`);
		} else {
			th.setAttribute("id", `pension-age-${retirementAge}`);
			text = document.createTextNode(retirementAge);
		}
		th.appendChild(text);
		tr.appendChild(th);

		if (i === 0) {
			while (j < 10) {
				let th = document.createElement("th");
				th.setAttribute("id", `pension-service-${--retirementService}`);
				let text = document.createTextNode(retirementService);
				th.appendChild(text);
				tr.appendChild(th);
				j++
			}
			j = 0;
		} else {
			while (j < 10) {
				let td = document.createElement("td");
				td.setAttribute("id", `pension-age-${retirementAge}-service-${--retirementService}`);
				let reduction = reductionLow >= j ? reductionIncrements[j] : reductionIncrements[reductionLow];
				let text = document.createTextNode(reduction + "%");
				td.appendChild(text);
				tr.appendChild(td);
				j++;
			}
			j = 0;
			reductionLow++;
			// Accounts for 52% for Age 53 @ 20 years of service.
			if (retirementAge === 53) {
				reductionIncrements[reductionLow - 1] = reductionIncrements[reductionLow]
			}
		}
		retirementService = 30;
		table.appendChild(tr);
		retirementAge--;
	}
	retirementAge = 60;
	retirementService = 30;
}
generatePensionTable();

function displayNotice(age, service) {
	const notice = document.getElementById("pension-notice");
	notice.textContent = service + " years of service and retiring at " + age;


	if (age < 50) {
		notice.textContent = "Retirement must occur at or beyond age 50.";
	} else if (service < 20) {
		notice.textContent = "Retirement must occur at or beyond 20 years of service.";
	} else if (age >= 60 || service >= 30) {
		notice.textContent = "Retirement at 60 years of age or 30 years of service is full in most cases (TBD).";
	}
}

function generatePension() {

	const pensionModifier =  0.0182;
	let retirementAge = document.getElementById("retirement-age").value;
	let serviceYears = document.getElementById("service-years").value;
	
	displayNotice(retirementAge, serviceYears);
	
	let fourSalariesAverage = 0.00;
	const fourSalaries = document.querySelectorAll(".salary-for-pension");
	for (let salary of fourSalaries) {
		fourSalariesAverage += parseFloat(salary.value);
	}
	fourSalariesAverage /= 4;

	const grossPension = (fourSalariesAverage * pensionModifier * serviceYears).toFixed(2);
	document.getElementById("gross-pension").innerHTML = grossPension;

	let reductionString;
	if (retirementAge >= 60 || serviceYears >= 30) {
		reductionString = "0%";
		document.getElementById("reduction-percentage").textContent = `Full, Unreduced Pension`;
		document.getElementById("reduction-amount").textContent = `increases with service years`;
		document.getElementById("net-pension").textContent = `Net Pension: $${grossPension}`;
		document.getElementById("monthly-pension").textContent = `Net Pension Monthly: $${(grossPension / 12).toFixed(2)}`;

	} else if (retirementAge < 50 || serviceYears < 20) {
		reductionString = "100%"
		document.getElementById("reduction-percentage").textContent = `Ineligible`;
		document.getElementById("reduction-amount").textContent = ``;
		document.getElementById("net-pension").textContent = `Prospective Full Pension: $${grossPension}`;
		document.getElementById("monthly-pension").textContent = `Prospective Pension Monthly: $${(grossPension / 12).toFixed(2)}`;
	} else {
		reductionString = document.getElementById(`pension-age-${retirementAge}-service-${serviceYears}`).textContent;
		const percentageReduction = reductionString.substring(0, reductionString.length - 1);
		document.getElementById("reduction-percentage").textContent = `Reduced to ${parseInt(percentageReduction)}% of Gross Pension`;
		document.getElementById("reduction-amount").textContent = `Amount Lost: - $${(grossPension - (grossPension * (percentageReduction / 100))).toFixed(2)}`;
		const annualPension = (grossPension * (percentageReduction / 100)).toFixed(2);
		document.getElementById("net-pension").textContent = `Net Pension: $${annualPension}`;
		document.getElementById("monthly-pension").textContent = `Net Pension Monthly: $${(annualPension / 12).toFixed(2)}`;
	}

	highlightPensionReduction(retirementAge, serviceYears);
	
}

// TODO: INCLUDE POST-60YR OLD TABLE
function highlightPensionReduction(age, service) {
	document.querySelector(".pension-reduction-highlight").classList.remove("pension-reduction-highlight");
	let cell;
	
	if (age >= 60 || service >= 30) {
		cell = document.getElementById(`pension-age-60-service-30`);
	} else if (age < 50 || service < 20) {
		// TODO: NOTIFICATION BAR AT TOP 
		cell = document.getElementById(`pension-notice`);
	} else {
		cell = document.getElementById(`pension-age-${age}-service-${service}`);
	}
	cell.classList.add("pension-reduction-highlight");
}

function enablePensionButtons() {
	document.querySelectorAll(".pension-buttons").forEach(button => {
		button.onclick = () => {
			generatePension();
			ButtonInterface.buttonOnClick(button);
		}
		button.onmouseenter = () => {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});
}
enablePensionButtons();