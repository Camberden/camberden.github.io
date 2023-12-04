'use strict';

window.onload = () => console.log('Running!');

const workAnniversary = new Date(1602156600000);
const fiscalYear2024 = 1719806400000;
const salarySchedule2023 = [
	['36525', '39801', '41427', '43498', '45237', '46595', '47527'], // C/OI
	['37727', '40367', '42790', '44929', '46726', '48127', '49090'], // C/OII
	['40348', '43173', '45764', '48052', '49974', '51473', '52503'], // C/OIII
];
const salarySchedule2024 = [
	['37621', '40253', '42670', '44803', '46594', '47993', '48953'], // C/OI
	['38859', '41578', '44074', '46277', '48128', '49571', '50563'], // C/OII
	['41558', '44468', '47137', '49494', '51473', '53017', '54078'], // C/OIII
];
const now = new Date();
let fiscalYear; // because it is fy 2024

const determineCurrentFiscalYear = function () {
	return fiscalYear = (5 < now.getMonth()) + now.getFullYear() - 1; // July or Later // -1 for FY
}
// This is executed onload:
determineCurrentFiscalYear();

const getMonthID = (date = new Date()) => date.getUTCFullYear() * 12 + date.getUTCMonth();
const getYearID = (date = new Date()) => date.getUTCFullYear();

const govtServiceMonths = getMonthID(now) - getMonthID(new Date(workAnniversary)) + 1; // Adjusted from base Zero
const govtServiceYears = getYearID(now) - getYearID(new Date(workAnniversary));
const pslfRequirement = 120;

let salarySchedule;
const setSalarySchedule = function (fiscalYear) {
	console.log('sss')
	switch (fiscalYear) {
		// TODO: make past cases
		case (2023):
			salarySchedule = salarySchedule2023;
			break;
		case (2024):
			salarySchedule = salarySchedule2024;
			break;
		default:
			salarySchedule = fiscalYear;
			break;
	}
}

// Executed onload:
setSalarySchedule(fiscalYear);

const displaySalarySchedule = function () {
	for (let i = 0; i < salarySchedule.length; i++) {
		for (let j = 0; j < salarySchedule[i].length; j++) {
			console.log('$ ' + salarySchedule[i][j]);
		}
	}
};

//const girlunaDispSalSched = () => salarySchedule2023.forEach(x => x.forEach(y => console.debug(`$${y}`)));

class Officer {
	constructor(name, startDate, grade) {
		this.name = name;
		this.startDate = startDate;
		this.grade = grade; // COI = 0; COII = 1; COIII = 2
	}
	get yearsExperience() {
		return getYearID() - getYearID(this.startDate);
	}

	get step() {
		return (this.yearsExperience > 6 ? 6 : this.yearsExperience);
	}

	get salary() {
		return '$' + salarySchedule[this.grade][this.step];
	}
}

const chrispy = new Officer("Chrispy", workAnniversary, 0);
console.log("Years experience: " + chrispy.yearsExperience);
console.log("Step: " + chrispy.step);
console.log('Chrispy base rate ' + chrispy.salary);

/// --- PSLF BAR

const pslfProgressBar = document.getElementById('pslfProgressBar');
document.getElementById('pslfHeading').innerHTML = govtServiceMonths + " of " + pslfRequirement + " months completed!";
const pslfCompletionPercentage = govtServiceMonths / pslfRequirement * 100;
pslfProgressBar.innerHTML = `<span style="width:` + pslfCompletionPercentage + `%;"></span>`;
