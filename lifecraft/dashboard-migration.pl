
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
	new DashboardExpense("car", 1291.61, true, 4, false),
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
const cpaCreditsDisplay = document.getElementById("cpa-credits");
const cpaProgressBar = document.getElementById("cpa-progress-bar");

// const modal = document.querySelector(".modal");
// const closeModal = document.getElementsByClassName("close-modal")[0];

// ---------- EXPENSE MANAGEMENT ---------- //

function selectApplicable() {
	document.getElementById("select-applicable").onclick = function() {
		dashboardExpenses.forEach(expense => {
			if (expense.applicable) {
				document.getElementById(expense.name + "-check").checked = true;
			}
			document.getElementById("select-applicable").style.display = "none";
			document.getElementById("deselect-applicable").style.display = "block";
			calculateNewBalance();
		});
	}
		document.getElementById("deselect-applicable").onclick = function() {
		dashboardExpenses.forEach(expense => {
			if (expense.applicable) {
				document.getElementById(expense.name + "-check").checked = false;
			}
			document.getElementById("deselect-applicable").style.display = "none";
			document.getElementById("select-applicable").style.display = "block";
			calculateNewBalance();
		});
	}
}
/**
 * 
 * @param {DashboardExpense[]} expenses 
 */
function generateDashboardExpenses(expenses) {
	const expenseList = document.getElementById("expense-list");

	expenses.forEach(expense => {
		const li = document.createElement("li");
		const inputCheckbox = document.createElement("input");
		const textCheckbox = document.createTextNode(`${expense.name.toUpperCase()} = $ `);
		inputCheckbox.setAttribute("type", "checkbox");
		inputCheckbox.setAttribute("id", `${expense.name}-check`);
		//inbuilt func
		// inputCheckbox.addEventListener("onclick", calculateNewBalance());

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
				li.setAttribute("class", "inactive-payment");
				spanAutomation.setAttribute("class", "non-automated-payment");
				// TODO: Make default condition the non-automated-payment.
				const textInactive = document.createTextNode(` Inactive `);
				spanAutomation.appendChild(textInactive);
			}

			li.appendChild(inputCheckbox);
			li.appendChild(textCheckbox);
			li.appendChild(spanApplicable);
			li.appendChild(spanAutomation);
		
		}
	
		if (expense.custom) {
			const inputCustom = document.createElement("input");
			inputCustom.setAttribute("type", "text");
			inputCustom.setAttribute("placeholder", ` Input Value`);
			inputCustom.setAttribute("id", `${expense.name}-cost`);

			li.appendChild(inputCheckbox);
			li.appendChild(textCheckbox);
			li.appendChild(inputCustom);
		}

		expenseList.appendChild(li);
	});

	document.getElementById("starting-balance").onkeyup = function () {
		calculateNewBalance();
		document.getElementById("expense-modal").style.display = "block";
};

	dashboardExpenses.forEach(expense => {
		document.getElementById(expense.name + "-check").onclick = function(){
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
		// console.log("Is this one checked? " + document.getElementById(expense.name + "-check").checked);

		if(checkbox.checked && !expense.custom) {
			sum += parseFloat(costbox.textContent);
			console.log("Checked Box Cost Value: " + costbox.textContent);
			console.log(sum);
		}
		if (checkbox.checked && expense.custom) {
			sum += parseFloat(costbox.value);
			console.log("Checked Box Cost Value: " + costbox.value);
			console.log(sum);
		}
		const endingBalance = parseFloat(startingBalance - sum).toFixed(2);
		document.getElementById("ending-balance").textContent = endingBalance;

		}
}

// ----- PSLF DATA TABLES AND PROGRESS BAR ----- //

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
	document.getElementById("overtime-diff").innerHTML = ((currentHourlyRate * 1.5) - currentHourlyRate).toFixed(2) + " ($ " + (12.25 * (currentHourlyRate * 1.5)).toFixed(2) + ")";
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

// ---------- REEDUCATION INFORMATION ----------//

// PRIMARY CPA DIV

function initCpaCredits() {
	document.querySelectorAll(".taken").forEach(course => {
		cpaCredits += course.value;
	});
	document.querySelectorAll(".taking").forEach(course => {
		cpaCredits += course.value;
	});
}
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

// ---------- PENSION CALCULATOR ---------- //
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
	setInterval(function (){document.getElementById("pension-sums").classList.remove("fade-in-data")}, 1000);
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

// ---------- MODAL ---------- //

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
	console.log("Modal Cleared!");
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
			<li class="taking">BUS 115</li>
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
		prompt.onclick = function() {
			switch(prompt.id) {
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

(()=>{
	// selectApplicable();
	// generateDashboardExpenses(dashboardExpenses);
	// calculateStep();
	// enableStepPayPlanButtons();
	// populateSalaryTable();
	// initCpaCredits();
	// displayCpaCredits();
	// enableCpaProjection();
	// generatePensionTable();
	// enablePensionButtons();
	// dashboardModalAccess();
})();

<div class="lifecraft-item">
	<div class="lifecraft-notes-item">
		<ul id="expense-list">
			<li>PAYCHECK = $&emsp;
				<input type="text" placeholder=" Input Value" id="starting-balance" name="balance" label="balance">
			</li>
			<br>
			<li><span class="marker" id="select-applicable">Select Applicable</span></li>
			<li><span class="marker" id="deselect-applicable" style="display: none">Deselect Applicable</span></li>
		</ul>
		<ul><!-- TOTAL AFTER DEDUCTIONS -->
			<li>ENDING BALANCE = $<span id="ending-balance">0</span>
			</li>
			<span class="marker modal-prompt" id="expense-modal">Project Expenses</span>
		</ul>
	</div>

	<!-- STEP PAY PLAN -->
	<div class="lifecraft-notes-item">

		<div class="marker">
			<h2>Step Pay Plan</h2>
		</div>
		<div>
			<div id="salary-table-div">
				<table id="salary-table">
					<tr>
						<th id="salary-table-corner"></th>
						<th>Step 0</th>
						<th>Step 1</th>
						<th>Step 2</th>
						<th>Step 3</th>
						<th>Step 4</th>
						<th>Step 5</th>
						<th>Step 6</th>
					</tr>
					<tr>
						<th>COI</th>
						<td id="co1-0"></td>
						<td id="co1-1"></td>
						<td id="co1-2"></td>
						<td id="co1-3"></td>
						<td id="co1-4"></td>
						<td id="co1-5"></td>
						<td id="co1-6"></td>
					</tr>
					<tr>
						<th>COII</th>
						<td id="co2-0"></td>
						<td id="co2-1"></td>
						<td id="co2-2"></td>
						<td id="co2-3"></td>
						<td id="co2-4"></td>
						<td id="co2-5"></td>
						<td id="co2-6"></td>
					</tr>
					<tr>
						<th>COIII</th>
						<td id="co3-0"></td>
						<td id="co3-1"></td>
						<td id="co3-2"></td>
						<td id="co3-3"></td>
						<td id="co3-4"></td>
						<td id="co3-5"></td>
						<td id="co3-6"></td>
					</tr>
				</table>
			</div>
			<ul id="salary-values">
				<li>Base-Rate Salary: $<span id="current-salary"></span></li>
				<hr>
				<li>Base-Rate Monthly: $<span id="monthly-salary"></span></li>
				<li>Base-Rate Hourly: $<span id="hourly-salary"></span></li>
				<li>Base-Rate 11HR Gap: $<span id="gap-pay"></span></li>
				<hr>
				<li>Differential Overtime: $<span id="overtime-diff"></span></li>
				<li>Differential Nightly: $<span id="night-diff"></span></li>
				<li>Differential Weekend: $<span id="weekend-diff"></span></li>
				<li>Differential Holiday: $<span id="holiday-diff"></span></li>

			</ul>
		</div>
		<div id="input-step-information">
			<p>CO<span id="custody-level">_</span> 
				<button class="step-pay-plan-button" value="decrease-custody-level" >Decrease</button>
				<button class="step-pay-plan-button" value="increase-custody-level">Increase</button></p>
			<p>Years Experience: <span id="years-experience" label="years-experience">_</span> 
				<button class="step-pay-plan-button" value="decrease-years-experience">Decrease</button>
				<button class="step-pay-plan-button" value="increase-years-experience">Increase</button></p>
			<p>Fiscal Year: <span id="fiscal-year">_</span> 
				<button class="step-pay-plan-button" value="previous-fiscal-year">Previous</button>
				<button class="step-pay-plan-button" value="next-fiscal-year">Next</button></p>
		</div>
	</div>

	<!-- RE-EDUCATION INFORMATION -->
	<div class="lifecraft-notes-item">

		<div class="marker">
			<h2>Re-Education Information</h2>
		</div>
		<span class="marker modal-prompt" id="accounting-modal">Additional Information</span>
		
		<div class="list-background">CPA Credits: <span id="cpa-credits"></span>/30</div>
		<div id="cpa-progress-bar"></div>

		<ul id="acc-courses">
			<span class="marker">Advanced Core Requirements</span>
			<li class="taken acc-core adv-acc-core planned-or-completed" value="3">ACC 120 - Prin of Financial Accounting (3)</li>
			<li class="taken acc-core adv-acc-core planned-or-completed" value="3">ACC 121 - Prin of Managerial Accounting (3)</li>
			<li class="taking acc-core adv-acc-core planned-or-completed" value="3">BUS 115 - Business Law I (3)</li>
			<li class="taken adv-acc-core planned-or-completed" value="4">ACC 220 - Intermediate Accounting I (4)</li>
			<li class="not-taken adv-acc-core" value="3">ACC 129 - Individual Income Taxes (3)</li>
			<li class="taken adv-acc-core planned-or-completed" value="4">ACC 221 - Intermediate Accounting II (4)</li>
			<li class="not-taken adv-acc-core" value="3">ACC 269 - Auditing & Assurance Services (3)</li>
			<hr><span class="marker">To Fulfill CPA Requirements</span>
			<li class="not-taken acc-dpl" value="3">ACC 240 - Gov & Non-Profit Accounting (3)</li>
			<li class="not-taken acc-dpl acc-soft-app" value="2">ACC 149 - Intro to ACC Spreadsheets (2)</li>
			<li class="not-taken acc-dpl acc-soft-app" value="2">ACC 150 - Accounting Software Applications (2)</li>
			<hr><span class="marker">Optional Diploma Requirements</span>
			<li class="not-taken acc-dpl" value="2">ACC 140 - Payroll Accounting (2)</li>
			<li class="not-taken acc-dpl" value="3">ACC 130 - Business Income Taxes (3)</li>
			<li class="not-taken acc-dpl" value="3">ACC 215 - Ethics in Accounting (3)</li>
			<li class="not-taken acc-dpl" value="0">ECO 251 - Prin of Microeconomics (3)</li>
			<li class="not-taken acc-dpl" value="0">CIS 110 - Intro to Computers (3)</li>
			<hr><span class="marker">Optional AAS Requirements</span>
			<li class="not-taken acc-aas" value="3">ACC 227 - Practices in Accounting (3)</li>
			<li class="not-taken acc-aas" value="0">ENG 112 - Writing/Research in the Disc (3)</li>
			<li class="not-taken acc-aas" value="0">HUM 115 - Critical Thinking (3)</li>
			<li class="not-taken acc-aas" value="0">BUS 225 - Business Finance (3)</li>

			<hr><span class="marker">Miscellaneous</span>
			<li class="taken planned-or-completed" value="0">BUS 110 - Intro to Business: Japan</li>
		</ul>
	</div>

	<!-- PENSION CALCULATOR -->
	<div class="lifecraft-notes-item">
		<div class="marker">
			<h2>Pension Calculator</h2>
		</div>

		<div id="subgrid-pension-calculator">

			<div id="pension-data">
				<ul id="pension-inputs">
					<li class="no-bullet">Age at Retirement: <input type="text" placeholder="50" value="50" id="retirement-age"></li>
					<li class="no-bullet">Service Years: <input type="text" placeholder="24" value="24" id="service-years"></li>
					<li class="no-bullet">Year 1: <input type="text" placeholder="74692.84" value="74692.84" class="salary-for-pension"
							id="yr1-for-pension" label="yr1-for-pension"></li>
					<li class="no-bullet">Year 2: <input type="text" placeholder="71415.51" value="71415.51" class="salary-for-pension"
							id="yr2-for-pension" label="yr2-for-pension"></li>
					<li class="no-bullet">Year 3: <input type="text" placeholder="74732.21" value="74732.21" class="salary-for-pension"
							id="yr3-for-pension" label="yr3-for-pension"></li>
					<li class="no-bullet">Year 4: <input type="text" placeholder="75482.28" value="75482.28" class="salary-for-pension"
							id="yr4-for-pension" label="yr4-for-pension"></li>
					<br>
					<button class="pension-buttons">Generate Pension</button>
					<br>
					<hr>
					<li class="no-bullet"><span id="pension-notice"></span></li>
					<hr>

				</ul>
				<ul id="pension-sums">
					<p class="pension-reduction-highlight">Gross Pension: $<span id="gross-pension"></span></p>
					<hr>
					<p><span id="reduction-percentage"></span></p>
					<p><span id="reduction-amount"></span></p>
					<hr>
					<p><span id="net-pension"></span></p>
					<p><span id="monthly-pension"></span></p>
				</ul>

			</div>
			<div id="pension-table-div">
				<table id="pension-table"></table>
			</div>
		
		</div>

	</div>
</div>