window.onload = () => console.log("Running!");

// ----- EXPENSE MANAGEMENT ----- //

let startbalance = document.getElementById("balance").value;
const startbalanceupdate = document.getElementById("balance");

startbalanceupdate.onkeypress = function () {
	startbalance = document.getElementById("balance").value;
	calculateNewBalance();
};

const car = 0.00;
const nav = 53.85;
const sal = 884.15;
const ren = 801.00;
const hrt = 801.00;
const rti = 10.79;
const ins = 90.47;
const loa = 300.00;
const wat = 15.00;
const ele = 70.27;
const int = 54.99;
const mus = 11.73;
const gym = 0.00;
let inp; // CUSTOM INPUT: INP
console.log(document.getElementById("inp-cost").innerHTML);
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
			console.log(`73; e = ${e}; e.checked = ${e.checked}`);
			sum += e;
		}
		else {
			console.log(`77; i = ${i}; e = ${e}`);
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
const now = new Date();
const fiscalYear = (5 < now.getMonth()) + now.getFullYear() - 1; // July or Later // -1 for FY
const fiscalYearDisplay = document.getElementById("fiscal-year");
fiscalYearDisplay.innerHTML = `FY ${fiscalYear}-${fiscalYear + 1}`;

const getMonthID = (date = new Date()) => date.getUTCFullYear() * 12 + date.getUTCMonth();
const getYearID = (date = new Date()) => date.getUTCFullYear();

const govtServiceMonths = getMonthID(now) - getMonthID(new Date(workAnniversary)) + 1; // Adjusted from base Zero
const govtServiceYears = getYearID(now) - getYearID(new Date(workAnniversary));
const pslfRequirement = 120;

let salarySchedule;
const setSalarySchedule = fy => {
	switch (fy) {
		// TODO: make past cases
		case (2023):
			salarySchedule = salarySchedule2023;
			break;
		case (2024):
			salarySchedule = salarySchedule2024;
			break;
		default:
			salarySchedule = fy;
			break;
	}
}

// Executed onload:
setSalarySchedule(fiscalYear);

//const girlunaDispSalSched = () => salarySchedule2023.forEach(x => x.forEach(y => console.debug(`$${y}`)));

class Officer { //REFACTOR BASED ON MONTHS OF EXP.
	constructor(name, startDate, grade) {
		this.name = name;
		this.startDate = startDate;
		this.grade = grade; // COI = 0; COII = 1; COIII = 2
	}
	get yearsExperience() {
		return (getYearID() - getYearID(this.startDate) - 1); // HARD CODED -1 TO CORRECT FOR ISSUE
	}

	get step() {

		return (this.yearsExperience > 6 ? 6 : this.yearsExperience);
	}

	get salary() {
		return "$" + salarySchedule[this.grade][this.step];
	}
}

const chrispy = new Officer("Chrispy", workAnniversary, 0);
console.log("Years experience: " + chrispy.yearsExperience);
console.log("Step: " + chrispy.step);
console.log("Chrispy base rate " + chrispy.salary);

// ----- PSLF BAR

const pslfProgressBar = document.getElementById("pslf-progress-bar");
document.getElementById("pslf-heading").innerHTML = govtServiceMonths + " of " + pslfRequirement + " months completed!";
const pslfCompletionPercentage = govtServiceMonths / pslfRequirement * 100;
pslfProgressBar.innerHTML = `<span style="width:${pslfCompletionPercentage}%;"></span>`;

function generateSalaryTable(salary) {
	// Add table headings and CO Grade Column
	const salaryTable = document.createElement("table");
	const salaryTableBody = document.createElement("tbody");

	for (let i = -1; i < salarySchedule.length; i++) {
		const salaryRow = document.createElement("tr");
		salaryTableBody.appendChild(salaryRow);

		if (i === -1) {
			for (let k = -1; k < salarySchedule[0].length; k++) {
				const salaryCellHeader = document.createElement("th");
				const salaryCellHeaderText = document.createTextNode("Step " + (k));
				salaryRow.appendChild(salaryCellHeader);
				if (k < 0) {
					continue;
				}
				salaryCellHeader.appendChild(salaryCellHeaderText);
			}
			continue;
		}


		for (let j = 0; j < salarySchedule[i].length; j++) {
			if (j === 0) {
				const salaryCellGrade = document.createElement("td");
				const salaryCellGradeText = document.createTextNode("CO" + (i + 1));
				salaryCellGrade.appendChild(salaryCellGradeText);
				salaryRow.appendChild(salaryCellGrade);
			}

			const salaryCell = document.createElement("td");
			if ("$" + salarySchedule[i][j] === salary) {
				salaryCell.classList.add("salary-highlight");
			}
			const salaryCellText = document.createTextNode("$" + salarySchedule[i][j]);
			salaryCell.appendChild(salaryCellText);
			salaryRow.appendChild(salaryCell);
		}
	}
	salaryTable.appendChild(salaryTableBody);
	document.getElementById("salary-table-div").appendChild(salaryTable);
	// document.body.appendChild(salaryTable);
	salaryTable.setAttribute("border", "2");
};

// This is executed onload:
generateSalaryTable(chrispy.salary);

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

