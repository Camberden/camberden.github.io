class DashboardExpense {
	/**
	 * 
	 * @param {String} name - Three-letter name of string
	 * @param {Number} amount - Expense balance
	 * @param {Boolean} applicable - Expense incurred in current lifestyle?
	 * @param {Number} automated - Automated payment scheduled for Nth day of month.
	 * @param {Boolean} custom - Is this a custom input field?
	 */
	constructor(name, amount, applicable, automated, custom) {
		this.name = name;
		this.amount = amount;
		this.automated = automated;
		this.applicable = applicable;
		this.custom = custom;
	}
}
/**
 * @type {Array} dashboardExpenses
 * 
 */
const dashboardExpenses = [
	new DashboardExpense("car", 0.00, false, -1, false),
	new DashboardExpense("nav", 222.07, false, -1, false),
	new DashboardExpense("sal", 900.00, true, 1, false),
	new DashboardExpense("ren", 200.00, true, 0, false),
	new DashboardExpense("rti", 0.00, false, -1, false),
	new DashboardExpense("ins", 97.68, true, 30, false),
	new DashboardExpense("loa", 0.00, false, -1, false),
	new DashboardExpense("wat", 15.00, false, -1, false),
	new DashboardExpense("ele", 70.27, false, -1, false),
	new DashboardExpense("int", 71.99, false, -1, false),
	new DashboardExpense("mus", 6.39, true, 1, false),
	new DashboardExpense("don", 10.00, true, 1, false),
	new DashboardExpense("gym", 25.05, true, 17, false),
	new DashboardExpense("cre", 0.00, false, 0, true),
	new DashboardExpense("sav", 0.00, false, 0, true),
	new DashboardExpense("inp", 0.00, false, 0, true),
];

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
// Pending: Governor & Senate
const salarySchedule2025 = [
	["40066", "42869", "45444", "47715", "49623", "51113", "52135"], // C/OI
	["41385", "44281", "46985", "49285", "51256", "52793", "53793"], // C/OII
	["44259", "47358", "50201", "52711", "54819", "56463", "57593"], // C/OIII
];
// Pending: House
const salarySchedule2026 = [
	["40281", "43099", "45687", "47971", "49888", "51386", "52414"], // C/OI
	["41606", "44518", "47236", "49549", "51531", "53076", "54138"], // C/OII
	["44496", "47612", "50470", "52993", "55112", "56765", "57901"], // C/OIII
];
// Pending: FY2027-2028
const salarySchedule2027 = [
	["40281", "43099", "45687", "47971", "49888", "51386", "52414"], // C/OI
	["41606", "44518", "47236", "49549", "51531", "53076", "54138"], // C/OII
	["44496", "47612", "50470", "52993", "55112", "56765", "57901"], // C/OIII
];
// Pending: FY2027-2028
const salarySchedule2028 = [
	["40281", "43099", "45687", "47971", "49888", "51386", "52414"], // C/OI
	["41606", "44518", "47236", "49549", "51531", "53076", "54138"], // C/OII
	["44496", "47612", "50470", "52993", "55112", "56765", "57901"], // C/OIII
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
let yearsExperience = 5;

const workAnniversary = new Date(1602156600000);
const fiscalYear2024 = 1719806400000;
const now = new Date();
const nowDisplay = now.toLocaleString("en-US");
const getMonthID = (date = new Date()) => date.getUTCFullYear() * 12 + date.getUTCMonth();
const getYearID = (date = new Date()) => date.getUTCFullYear();

let cpaCredits = 0;
let dplCredits = cpaCredits;
let aasCredits = dplCredits;
const cpaCreditsDisplay = document.getElementById("cpa-credits");
const cpaProgressBar = document.getElementById("cpa-progress-bar");
const dplProgressBar = document.getElementById("dpl-progress-bar");
const aasProgressBar = document.getElementById("aas-progress-bar");

const modal = document.querySelector(".modal");
const closeModal = document.getElementsByClassName("close-modal")[0];

const pslfRequirement = 120;
const pslfCredited = 50;
const pslfServed = 68;
const pslfRemaining = pslfRequirement - pslfServed;
const pslfNotice = [
	`${pslfCredited} months credited.`,
	`${pslfServed - pslfCredited} months uncredited.`,
	`${pslfRequirement - pslfCredited} months of service ahead.`
];
const pslfProgressBar = document.getElementById("pslf-progress-bar");
const pslfCompletionPercentage = pslfCredited / pslfRequirement * 100;
const pslfUncreditedPercentage = (pslfServed - pslfCredited) / pslfRequirement * 100;

const accountingRoles = [
	[
		"Accounting Clerk I", 
		42647.06,
	],
	[
		"Accounting Clerk II", 
		46700.00,
	],
	[
		"Accounting Technician I",
		47184.73,
	],
	[
		"Accounting Technician II",
		52162.02,
	],
	[
		"Accounting Technician III",
		58987.20,
	],
	[
		"Accounting Specialist",
		67030.33,
	],
	[
		"Correctional Training Specialist",
		58909.93,
	],
	[
		"Correctional Training Instructor",
		67214.14,
	],
	[
		"Accountant I",
		67670.60,
	],
	[
		"Accountant II",
		77797.50,
	],
	[
		"Accountant III",
		92173.33,
	],
	[
		"Accountant IV",
		99000.00,
	],
	[
		"Accounting Manager",
		103998.00,
	],
	[
		"Accounting Director I",
		128319.00,
	],
	[
		"Accounting Director II",
		159122.00,
	],
];


// |=====| EXPENSE MANAGEMENT |=====| //

function enableExpenseButtons() {
	document.querySelectorAll(".expense-button").forEach(button => {

		button.onclick = function () {

			switch (button.id) {
				case "select-applicable":
					dashboardExpenses.forEach(expense => {
						if (expense.applicable) {
							document.getElementById(expense.name + "-check").checked = true;
						}
						document.getElementById("select-applicable").style.display = "none";
						document.getElementById("deselect-applicable").style.display = "inline-block";
						calculateNewBalance();
					});
					break;
				case "deselect-applicable":
					dashboardExpenses.forEach(expense => {
						if (expense.applicable) {
							document.getElementById(expense.name + "-check").checked = false;
						}
						document.getElementById("deselect-applicable").style.display = "none";
						document.getElementById("select-applicable").style.display = "inline-block";
						calculateNewBalance();
					});
					break;
				default:
					console.log("Defaulted enableExpenseButtons()");
					break;
			}
		}
	});
}
/**
 * 
 * @param {DashboardExpense[]} expenses 
 */
function generateDashboardExpenses(expenses) {
	const expenseDisplay = document.getElementById("expense-display");

	expenses.forEach(expense => {
		const expenseEntry = document.createElement("div");
		expenseEntry.setAttribute("class", "flex-table-row grid-col-1-1-1");
		const inputCheckbox = document.createElement("input");
		const textCheckbox = document.createTextNode(`${expense.name.toUpperCase()}`);
		inputCheckbox.setAttribute("type", "checkbox");
		inputCheckbox.setAttribute("id", `${expense.name}-check`);

		if (!expense.custom) {
			const spanApplicable = document.createElement("span");
			spanApplicable.setAttribute("id", `${expense.name}-cost`);
			spanApplicable.textContent = expense.amount;
			const spanAutomation = document.createElement("span");

			if (expense.applicable) {
				spanApplicable.setAttribute("class", "applicable");
			}
			if (expense.automated > 0) {
				spanAutomation.setAttribute("class", "automated-payment");
				const textAutomation = document.createTextNode(` Automated: Day ${expense.automated}`);
				spanAutomation.appendChild(textAutomation);
			}
			if (expense.automated === 0) {
				spanAutomation.setAttribute("class", "non-automated-payment");
				const textAutomation = document.createTextNode(` NOT Automated`);
				spanAutomation.appendChild(textAutomation);
			}
			if (expense.automated < 0) {
				// spanAutomation.setAttribute("class", "inactive-payment");
				spanAutomation.setAttribute("class", "non-automated-payment inactive-payment");
				// TODO: Make default condition the non-automated-payment.
				const textInactive = document.createTextNode("Inactive");
				spanAutomation.appendChild(textInactive);
				expenseEntry.style.opacity = 0.3;
			}
			const checkboxWithName = document.createElement("div");
			checkboxWithName.appendChild(inputCheckbox);
			checkboxWithName.appendChild(textCheckbox);
			expenseEntry.appendChild(checkboxWithName);
			expenseEntry.appendChild(spanApplicable);
			expenseEntry.appendChild(spanAutomation);

		}

		if (expense.custom) {
			const inputCustom = document.createElement("input");
			inputCustom.setAttribute("type", "text");
			inputCustom.setAttribute("placeholder", ` Input Value`);
			inputCustom.setAttribute("id", `${expense.name}-cost`);

			const checkboxWithName = document.createElement("div");
			checkboxWithName.appendChild(inputCheckbox);
			checkboxWithName.appendChild(textCheckbox);
			expenseEntry.appendChild(checkboxWithName);
			expenseEntry.appendChild(document.createTextNode("→"));
			expenseEntry.appendChild(inputCustom);
		}
		expenseDisplay.appendChild(expenseEntry);
	});

	document.getElementById("starting-balance").onkeyup = function () {
		calculateNewBalance();
		document.getElementById("expense-modal").style.display = "block";
	};

	dashboardExpenses.forEach(expense => {
		document.getElementById(expense.name + "-check").onclick = function () {
			calculateNewBalance();
		}
	});
}
function calculateNewBalance() {

	let startingBalance = document.getElementById("starting-balance").value;
	/**
	 * @type {Number}
	 */
	let sum = 0;
	for (let expense of dashboardExpenses) {
		let checkbox = document.getElementById(expense.name + "-check");
		let costbox = document.getElementById(expense.name + "-cost");

		if (checkbox.checked && !expense.custom) {
			sum += parseFloat(costbox.textContent);
		}
		if (checkbox.checked && expense.custom) {
			sum += parseFloat(costbox.value);
		}
		const endingBalance = parseFloat(startingBalance - sum).toFixed(2);

		document.getElementById("ending-balance").textContent = endingBalance;
		document.getElementById("starting-balance").value;
	}
	document.getElementById("paycheck-mirror").innerHTML = startingBalance;
	document.getElementById("expenses-mirror").innerHTML = sum.toFixed(2);
	document.getElementById("remainder-mirror").innerHTML = (startingBalance - sum).toFixed(2);

}

// |=====| STEP PAY PLAN MODULE |=====| //

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
function calculateStep() {

	currentSalary = currentSchedule[custodyLevel - 1][yearsExperience];
	document.getElementById("current-salary").innerHTML = currentSalary;
	document.getElementById("monthly-salary").innerHTML = (currentSalary / 12).toFixed(2);
	let currentHourlyRate = currentSalary / 52 / 40;
	document.getElementById("hourly-salary").innerHTML = currentHourlyRate.toFixed(2);
	document.getElementById("gap-pay").innerHTML = (currentHourlyRate * 11).toFixed(2);
	document.getElementById("overtime-diff").innerHTML = ((currentHourlyRate * 1.5) - currentHourlyRate).toFixed(2) + " ($" + (12.25 * (currentHourlyRate * 1.5)).toFixed(2) + ")";
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
function removeHighlightedSalary() {
	highlightedSalary.classList.remove("salary-highlight");
}
function increaseCustodyLevel() {
	if (custodyLevel >= 1 && custodyLevel < 3) {
		custodyLevel += 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function decreaseCustodyLevel() {
	if (custodyLevel <= 3 && custodyLevel > 1) {
		custodyLevel -= 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function increaseYearsExperience() {
	if (yearsExperience >= 0 && yearsExperience < 6) {
		yearsExperience += 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function decreaseYearsExperience() {
	if (yearsExperience > 0 && yearsExperience <= 6) {
		yearsExperience -= 1;
		removeHighlightedSalary();
		calculateStep();
	}
}
function enableStepPayPlanButtons() {
	document.querySelectorAll(".step-pay-plan-button").forEach(button => {
		button.onclick = () => {
			CMBRutil.buttonOnClick(button);
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
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			CMBRutil.buttonOnMouseLeave(button);
		}
	});
}
function populateSalaryTable() {
	for (i = 0; i < currentSchedule.length; i++) {
		for (j = 0; j < currentSchedule[i].length; j++) {
			document.getElementById(`co${i + 1}-${j}`).innerHTML = currentSchedule[i][j];
			// if (currentSchedule[i][j] === currentSalary) {
			// 	document.getElementById(`co${i + 1}-${j}`).classList.add("salary-highlight");
			// }
		}
	}
}

// |=====| REEDUCATION INFORMATION |=====|

function initCpaCredits() {
	document.querySelectorAll(".taken").forEach(course => {
		cpaCredits += course.value;
		dplCredits += course.value;
		aasCredits += course.value;
	});
	document.querySelectorAll(".taking").forEach(course => {
		cpaCredits += course.value;
		dplCredits += course.value;
		aasCredits += course.value;
		if (!course.value && course.classList.contains("acc-dpl")) {
			dplCredits += 3;
		}
		if (!course.value && course.classList.contains("acc-aas")) {
			aasCredits += 3;
		}
	});
}
function displayCpaCredits() {
	cpaCreditsDisplay.innerHTML = cpaCredits;
	let cpaCompletionPercentage = cpaCredits / 30 * 100;
	let dplCompletionPercentage = dplCredits / 44 * 100;
	let aasCompletionPercentage = aasCredits / 56 * 100;

	cpaCredits >= 30 ? cpaCompletionPercentage = 100 : cpaCompletionPercentage;
	dplCredits >= 44 ? dplCompletionPercentage = 100 : dplCompletionPercentage;
	aasCredits >= 56 ? aasCompletionPercentage = 100 : aasCompletionPercentage;

	cpaProgressBar.innerHTML = `<span style="width:${cpaCompletionPercentage}%;"></span>`;
	dplProgressBar.innerHTML = `<span style="width:${dplCompletionPercentage}%;"></span>`;
	aasProgressBar.innerHTML = `<span style="width:${aasCompletionPercentage}%;"></span>`;

}
function enableCpaProjection() {
	document.querySelectorAll(".not-taken").forEach(course => {
		let clicked = false;
		course.onclick = function () {

			if (!clicked) {

				if (!course.value && course.classList.contains("acc-dpl")) {
					dplCredits += 3;
					aasCredits += 3;
				}
				if (!course.value && course.classList.contains("acc-aas")) {
					aasCredits += 3;
				}
				clicked = true;
				cpaCredits += course.value;
				dplCredits += course.value;
				aasCredits += course.value;
				course.classList.add("planned-or-completed");
			} else {
				cpaCredits -= course.value;
				dplCredits -= course.value;
				aasCredits -= course.value;
				clicked = false;
				if (!course.value && course.classList.contains("acc-dpl")) {
					dplCredits -= 3;
					aasCredits -= 3;
				}
				if (!course.value && course.classList.contains("acc-aas")) {
					aasCredits -= 3;
				}
				course.classList.remove("planned-or-completed");
			}
			displayCpaCredits();
		}
	});
}
// ---------- PENSION CALCULATOR ---------- //
// TODO: lock in age and service, press up and down arrows to adjust.
// TODO: add monthly increments, perhaps.

function generatePensionTable() {
	const tbody = document.getElementById("pension-table-body");
	let retirementAge = 60;
	let retirementService = 30;
	const reductionIncrements = [95, 90, 85, 80, 75, 70, 65, 60, 55, 52, 50];
	let reductionLow = 3; // 59 years

	for (let i = 0, j = 0; i < 10; i++) {

		let tr = document.createElement("div");
		tr.setAttribute("class", "flex-table-row grid-col-11x-1");
		tr.setAttribute("id", `pension-row-${--retirementAge}`);
		let th = document.createElement("div");

		th.setAttribute("id", `pension-age-${retirementAge}`);
		const text = document.createTextNode(retirementAge);

		th.appendChild(text);
		tr.appendChild(th);

		while (j < 10) {
			let td = document.createElement("div");
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
			reductionIncrements[reductionLow - 1] = reductionIncrements[reductionLow];
		}

		retirementService = 30;
		tbody.appendChild(tr);
		// retirementAge--;
	}
	retirementAge = 60;
	retirementService = 30;
}
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
function fadeInData() {
	document.getElementById("pension-sums").classList.add("fade-in-data");
	setInterval(function () { document.getElementById("pension-sums").classList.remove("fade-in-data") }, 1000);
}
function generatePension() {

	const pensionModifier = 0.0182;
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
	fadeInData();

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
			CMBRutil.buttonOnClick(button);
		}
		button.onmouseenter = () => {
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			CMBRutil.buttonOnMouseLeave(button);
		}
	});
}

// |=====| DEPOSITORY |=====| //

/**
 * @param content
 * Gathers text within a note's content between custom permille tags such as `<t‰></t‰>`.
 * @param tag
 * The tag name without decorators, such as `t` for `<t‰></t‰>`.
 * @satisfies {NotesRegistry} a registered info note
 * @returns
 */
function parsePermilleTags(content, tag) {
	const perMilleTags = ["t", "b", "g", "p", "a", "l"];
	const l = tag.length + 3;
	return content.substring(content.indexOf("<" + tag + "‰>") + l, content.indexOf("</" + tag + "‰>"));
};
const depoTags = [];
/**
 * 
 * @param {String[]} data 
 */
function initDepoData(notes) {
	/**
	 * @param {String} note
	 * @param {String[]} notes
	 */
	for (let note of notes) {
		const infoNote = new NotesRegistry();
		// |=====| PARSE TEXT INPUT |=====| //
		infoNote.id = (notes.indexOf(note) + 1);
		infoNote.author = parsePermilleTags(note, "u");
		infoNote.title = parsePermilleTags(note, "t");
		infoNote.body = parsePermilleTags(note, "b");
		const preParsedDepoTags = parsePermilleTags(note, "g");
		infoNote.tags = preParsedDepoTags.split(", ");
		infoNote.tags.forEach(tag => { if (!depoTags.includes(tag)) { depoTags.push(tag); } });
		infoNote.photos = parsePermilleTags(note, "p");
		infoNote.audio = parsePermilleTags(note, "a");
		// const videoIdFromUrl = parsePermilleTags(note, "a").split("v=")[1];
		// infoNote.audio = videoIdFromUrl;
		infoNotes.push(infoNote);
	};
};

let results = 10;
const depository = document.getElementById("depository");
/**
 * 
 * @param {NotesRegistry} registeredNote
 */
function displayDepoData(registeredNote) {
	const noteTitle = document.createElement("div");
	const noteBody = document.createElement("div");
	const noteTags = document.createElement("div");
	const txtTitle = document.createTextNode(registeredNote.title);
	const txtBody = document.createTextNode(registeredNote.body);
	const txtTags = document.createTextNode(registeredNote.tags);
	noteTitle.appendChild(txtTitle);
	noteBody.appendChild(txtBody);
	noteTags.appendChild(txtTags);
	depository.appendChild(noteTitle);
	depository.appendChild(noteBody);
	depository.appendChild(noteTags);
}

/**
 * @param {NotesRegistry[]} registry or another permille-based object.
 * @param {String} query input
 * @param {String} filterBy "title" | "body" | "tags"
 */
function queryDepoData(registry, query, filterBy) {
	let c = 0;
	switch (filterBy) {
		case "tags":
			refreshNotes();
			if (query === "all") {
				while (c < results) {
					for (let note of registry) {
						displayDepoData(note);
						c++;
					}
					break;
				}
			}
			for (let note of registry) {
				if (note.tags.includes(query) && c < results) {
					displayDepoData(note);
					c++;
				}
			}
			break;
		case "input":
			console.log("wip");
			break;
		default:
			console.log("pending");
			break;
	}
}

function enableDepoTools() {

	const tagSelect = document.getElementById("depository-tag-select");
	depoTags.forEach(tag => {
		const text = document.createTextNode(tag);
		const option = document.createElement("option");
		option.setAttribute("value", tag);
		option.appendChild(text);
		tagSelect.appendChild(option);
	});
	tagSelect.onchange = function () {
		queryDepoData(infoNotes, tagSelect.value, "tags");
	};

	const resultsSelect = document.getElementById("depository-results-select");
	resultsSelect.onchange = function () {
		results = parseInt(resultsSelect.value);
		queryDepoData(infoNotes, tagSelect.value, "tags");
	}


}

function refreshNotes() {
	while (depository.children.length > 0) {
		depository.removeChild(depository.lastChild);
	}
}
// |=====| MODAL FUNCTIONS |=====| //

function cpaModalAccess() {
	accModalClick.onclick = function () {
		accModal.style.display = "block";
	};
	closeModal.onclick = function () {
		accModal.style.display = "none";
	};
	window.onclick = function (event) {
		if (event.target === accModal) {
			accModal.style.display = "none";
		}
	};
}
function clearModal() {
	document.getElementById("modal-text").innerHTML = "";
	document.getElementById("modal-text").removeAttribute("class", "paycard-grid");

}
function displayExpenseModal() {
	const expenseModalData = document.createElement("div");
	const currentDate = new Date();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	document.getElementById("modal-text").setAttribute("class", "paycard-grid");
	let expenseModalPaycheck = parseFloat(document.getElementById("starting-balance").value);
	let expenseModalEndBalance = parseFloat(document.getElementById("ending-balance").textContent);
	let expenseModalExpenses = parseFloat(expenseModalPaycheck - expenseModalEndBalance).toFixed(2);

	for (let i = 0; i < 4; i++) {
		const ul = document.createElement("ul");
		ul.setAttribute("class", `${currentDate.getFullYear() + i}-projections`);
		const text = document.createTextNode(currentDate.getFullYear() + i);
		ul.appendChild(text);
		const hr = document.createElement("hr");
		ul.appendChild(hr);

		if (currentDate.getFullYear() === currentDate.getFullYear() + i) {
			for (let j = currentDate.getMonth(); j < months.length; j++) {
				const li = document.createElement("li");
				const text = document.createTextNode(months[j] + ": $");
				const span = document.createElement("span");
				span.setAttribute("class", "projected-monthly-expense");
				// const expenseText = document.createTextNode(expenseModalExpenses);
				// span.appendChild(expenseText);
				span.innerHTML = `${expenseModalPaycheck}<br>&nbsp-${expenseModalExpenses}<br>=${expenseModalEndBalance}`;
				li.appendChild(text);
				li.appendChild(span);
				ul.appendChild(li);

			}
		} else if (currentDate.getFullYear() < currentDate.getFullYear() + i) {
			for (let j = 0; j < months.length; j++) {
				const li = document.createElement("li");
				const text = document.createTextNode(months[j] + ": $");
				const span = document.createElement("span");
				span.setAttribute("class", "projected-monthly-expense");
				if (currentDate.getFullYear() + i === 2026 && j === 0) {
					expenseModalExpenses -= 1291.61;
					expenseModalEndBalance += 1291.61;
					ul.innerHTML += " (Car Paid)<hr>";
				}
				if (currentDate.getFullYear() + i === 2027 && j === 0) {
					expenseModalExpenses -= 900.00;
					expenseModalEndBalance += 900.00;
					ul.innerHTML += " (Sal Paid)<hr>";

				}

				span.innerHTML = `${expenseModalPaycheck}<br>&nbsp-${expenseModalExpenses.toFixed(2)}<br>=${expenseModalEndBalance.toFixed(2)}`;
				li.appendChild(text);
				li.appendChild(span);
				ul.appendChild(li);
			}
		}
		expenseModalData.appendChild(ul);
	}


	document.getElementById("modal-text").innerHTML = expenseModalData.innerHTML;
}
function displayAccountingModal() {
	const accountingModalData = `
	<p>I'm doing Accounting now.<br>
		I believe that I will more quickly and easily migrate to a non-custody position
		through this line of work.<br>
		The opportunities are plentiful, even intra-department, and I'm enjoying these studies.<br>
		I expect to be eligible for basic non-custody positions after attaining WTCC's Advanced
		Accounting Core Cert.<br>
		Around then, I would qualify to study for and then sit for the CPA exam.<br>
		Cpa Requirements: <a href="https://nccpaboard.gov/cpa-exam-applicants/"
			target="_blank">[link]</a>
		I would need to work under a CPA to attain mine, necessitating the migration when eligible.<br>
		WTCC's Diploma and Associate's are optional for me.<br>
		The Computer Science ship has sailed and the market for that field is absolutely terrible.<br>
	</p>
	<div class="modal-grid">
		<ul>
			<li class="taken">No more than 6HRS of Accounting Principles</li>
			<li>No more than 3HRS of Business Law</li>
			<li>21HRS in other Accounting Courses</li>
		</ul>

		<ul>
			<li>1YR EXP under CPA in Public Accounting</li>
			<li>1YR EXP under CPA in General Accounting</li>
			<li>4YRS EXP in General Accounting or Teaching it</li>
		</ul>
	</div>

	<div class="acc-schedule-grid">
		<ul>SU2024<hr>
			<li class="taken">ACC 120</li>
		</ul>
		<ul>FA2024<hr>
			<li class="taken">ACC 121</li>
		</ul>
		<ul>SP2025<hr>
			<li class="taken">ACC 220</li>
		</ul>
		<ul>SU2025<hr>
			<li class="taken">BUS 110 日本中</li>
		</ul>
		<ul>FA2025<hr>
			<li class="taken">ACC 221</li>
		</ul>
		<ul>SP2026<hr>
			<li>Job Transition</li>
		</ul>
		<ul>SU2026<hr>
			<li>ACC 129</li>
		</ul>
		<ul>FA2026<hr>
			<li>ACC 269</li>
		</ul>
		<ul>SP2027<hr>
			<li>ACC 130</li>
			<li>ACC 150</li>
		</ul>
		<ul>SU2027<hr>
			<li>ACC 240</li>
			<li>CIS 110</li>
		</ul>
		<ul>FA2027<hr>
			<li>ACC 215</li>
			<li>ECO 251</li>
		</ul>
	</div>
	`;
	document.getElementById("modal-text").innerHTML = accountingModalData;
}
function dashboardModalAccess() {
	document.querySelectorAll(".modal-prompt").forEach(prompt => {
		prompt.onclick = function () {
			switch (prompt.id) {
				case "accounting-modal":
					displayAccountingModal();
					modal.style.display = "block";
					break;
				case "expense-modal":
					displayExpenseModal();
					modal.style.display = "block";
					break;
				default:
					console.log("default");
					break;
			}

		}

	});
	closeModal.onclick = function () {
		clearModal();
		modal.style.display = "none";
	};
	window.onclick = function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
			clearModal();
		}
	}
}

// |=====| PSLF MODULE |=====| //

function initPslfProgress() {
	pslfProgressBar.innerHTML = `<span style="width:${pslfCompletionPercentage}%;" x-on:mouseenter="$tooltip(pslfNotice[0])"></span>`;
	const span = document.createElement("span");
	span.setAttribute("style", `width:${pslfUncreditedPercentage}%`);
	span.setAttribute("x-on:mouseenter", "$tooltip(pslfNotice[1])");
	pslfProgressBar.appendChild(span);
};

function initTooltips() {
	document.addEventListener("alpine:init", () => {
		// Magic: $tooltip
		Alpine.magic("tooltip", el => message => {
			let instance = tippy(el, { content: message, trigger: 'manual' });

			instance.show();

			setTimeout(() => {
				instance.hide();

				setTimeout(() => instance.destroy(), 150);
			}, 2000);
		});

		// Directive: x-tooltip
		Alpine.directive("tooltip", (el, { expression }) => {
			tippy(el, { content: expression });
		});
	});
}

// |=====| CALENDAR UTILITY |=====| //

const lifeEvents = [
	birthEvent = new LifeEvent("My Birth", "1993-11-14", "", 
		"I arrived physically on this planet."),
	rofDay = new LifeEvent("R.O.F. Day", "2017-7-9", "", 
		"Personal Holiday Established: the emotional difficulties encountered marked the very beginning of my 1st self-reinvention."),
	firingDay = new LifeEvent("Firing Day", "2017-11-14", "", 
		"I was fired from my first position after college for tardiness. This event, coupled with July 9th, helped set my 1st self-reinvention in motion"),
	securityCareer = new LifeEvent("Began Security Career", "2017-1-19", "", 
		"I began my new role in private security where I set out to redeem myself for past failures"),
	firstSecurityPromotion = new LifeEvent("First Security Promotion", "2018-6-16", "",
		"I promoted for the first time and donned the white shirt as a shift supervisor."),
	secondSecurityPromotion = new LifeEvent("Second Security Promotion", "2018-9-8", "",
		"I promoted a second time to a floating shift supervisor with more intra-region responsibilities"),
	thirdSecurityPromotion = new LifeEvent("Third Security Promotion", "2018-11-2", "", 
		"I promoted a third time to assistant operations manager, with intra-regional duties including payroll"),
	wvRelocation = new LifeEvent("Relocation to West Virginia", "2019-10-24", "",
		"I relocated to West Virginia to pursue a software development career at a talent-incubator company"),
	vanceRelocation = new LifeEvent("Relocation to North Carolina", "2020-8-9", "", 
		"I uprooted and took my life to Vance County, NC"),
	publicCareer = new LifeEvent("Began Public Service", "2020-8-10", "", 
		"I began my career of service."),
	chathamRelocation = new LifeEvent("Relocation to Chatham County, NC", "2024-12-16", "", 
		"I relocated to Chatham County, NC due to interpersonal events."),
	chryslerTotalled = new LifeEvent("Car Totalled", "2025-3-3", "", 
		"My trusty car was deemed a total loss."),
	whiteCar = new LifeEvent("White Car", "2025-3-4", "", 
		"Got my new ride. Its white coat is familiar as it's the same as those at my workplace."),
	japanTravel1 = new LifeEvent("First Experience in Japan", "2025-6-22", "", 
		"To Tokyo, Nara, Kyoto, and Osaka"),
	workanniversary5 = new LifeEvent("Pension Vested", "2025-8-10", "", 
		"Raise & Vesting"),
	shanghaiAlleyDumpsterFire = new LifeEvent("Shanghai Alley Dumpster Fire", "2026-2-11", "", "Lost my new favorite person. Lots of reflection. Hopefully setting up for 2nd self-reinvention."),
	endOfTour = new LifeEvent("End of Tour", "2026-3-6", "", "Last day in uniformed public service."),
	newCareerBegins = new LifeEvent("A New Career Begins", "2026-3-9", "", "I began my new career in accounting with an 8-hour daytime schedule and am afforded a cool office space. I hope this is worth it."),
	workanniversary6 = new LifeEvent("6th Year Work Anniversary", "2026-8-10", "", 
		"Would have maxxed out CO salary, but no worries."),

];

// |=====| TAXABILITY MODULE |=====| //

function routeTaxabilityModule() {

	const taxButton = document.getElementById("tax-button");
	const url = window.location.href;

	const obj = {
		v1: "javascript",
		v2: "java",
		v3: ["apple", "pear", "banana", "strawberry", "plum", ],
	};

	const keywords = ["apple", "pear", "banana", "strawberry", "plum", ];

	const searchParams = new URLSearchParams();

	// for (let i = 0; i < keywords.length; i++) {
	// 	searchParams.append("v" + (i + 1), keywords[i]);
	// }
	searchParams.append("v1", JSON.stringify(obj));
	console.log("Taxability Query String: " + searchParams);
	const entries = searchParams.values();
	const array = Array.from(entries);

	const result = JSON.parse(array[0]);
	console.table(result);
	console.log(result);
	
	const queryString = searchParams.toString();

	taxButton.addEventListener("click", () => {
		window.location.href = url + queryString;
	});
}

// |=====| DAYS & WEEKS LIVED MODULE |=====| //

/**
 * 
 * @param {Date} present 
 * @param {Date} birth 
 */
function findDaysSinceBirthday(present, birth) {
	const yearsSinceBirth = present.getFullYear() - birth.getFullYear() - 1; // -1 accounts for present year lived months
	
	const monthOfBirthDaysTotal = new Date(birth.getFullYear(), birth.getMonth(), 0).getDate();
	const monthOfBirthDaysLived = monthOfBirthDaysTotal - birth.getDate();
	const presentMonthDaysLived = present.getDate();

	let totalDaysLived = monthOfBirthDaysLived + presentMonthDaysLived;
	const monthsRemainingInBirthYear = 12 % birth.getMonth();
	const monthsRemainingInPresentYear = present.getMonth();

	const daysRemainingInBirthYear = getDaysInMonthOfYear(birth.getFullYear(), (birth.getMonth() + monthsRemainingInBirthYear));

	// Gathers days following birth month for all months of birth year.
	for (let i = 1; i <= monthsRemainingInBirthYear; i++) {
		totalDaysLived += getDaysInMonthOfYear(birth.getFullYear(), (birth.getMonth() + i)); // BIRTH doesn't need +1; it's inbuilt
	}

	// Gathers days before present month for all lived months of current year.
	if (present.getMonth() > 0) {
		for (let i = present.getMonth(); i >= 0; i--) {
			totalDaysLived += getDaysInMonthOfYear(present.getFullYear(), ((present.getMonth() + 1) - i)); // +1 FOR DAY COUNT VALUES ONLY
		}
	}

	// Gathers days between birth year and present year.
	let by = birth.getFullYear() + 1;
	for (let i = 0; i < yearsSinceBirth; i++) {
		for (let j = 1; j <= 12; j++)
		totalDaysLived += getDaysInMonthOfYear(by, j);
	}
	return totalDaysLived;
}

function getDaysInMonthOfYear(year, month) {
	return new Date(year, month, 0).getDate();
}
const daysSinceBirth = findDaysSinceBirthday(new Date(now.getFullYear(), now.getMonth(), now.getDay()), new Date(1993, 11, 14));





(() => {

	CMBRutil.navigationCharter();
	CMBRutil.handleFormDefault(true);

	generateDashboardExpenses(dashboardExpenses);
	enableExpenseButtons();

	calculateStep();
	populateSalaryTable();
	enableStepPayPlanButtons();

	initCpaCredits();
	displayCpaCredits();
	enableCpaProjection();

	generatePensionTable();
	enablePensionButtons();
	dashboardModalAccess();

	initDepoData(noteData);
	enableDepoTools();
	queryDepoData(infoNotes, "all", "tags");

	initPslfProgress();
	initTooltips();


})();