window.onload = () => console.log("Running!");

// ---------- GENERAL ITEM UTILITY ---------- //

const blockOne = document.getElementById("block-1");
const allButtons = document.querySelectorAll("button");
const itemSelectedDisplay = document.getElementById("item-title");
const itemList = document.getElementById("item-list");
const listOptions = document.getElementById("list-options");

function enableToyButtons() {
	document.querySelectorAll(".w-item").forEach(e => {
		e.onclick = function () {
			console.log(e.id);
			switch (e.id) {
				case ("pankair"):
					e.style.color = "green";
					break;
				case ("pankair-sw"):
					e.style.color = "blue";
					break;
				case ("busmat"):
					e.style.color = "orange";
					break;
				case ("elaor"):
					e.style.color = "pink";
					break;
				case ("nao"):
					e.style.color = "white";
			}
		}
		e.onmouseenter = function() {
			e.classList.add("w-item-over");
		}
		e.onmouseleave = function() {
			e.classList.remove("w-item-over");
			e.classList.add("w-item-leave");
		}
	});
}
enableToyButtons();

// ----- BUDGET APP

// ----- PAYCARD TEMPLATE ----- //

let typ = 4400.00;

let sav = 1000.00;
let hys = 8000.00;
let dbt = 300.00;

let equities = [sav, hys, dbt];
let equityNames = Array.from("sav hys dbt".split(" "));
const equityValues = equityNames.map(string => document.getElementById(string + "-equity-t"));
equityValues.forEach((e, i) => e.innerHTML = equities[i]);

let car = 0.00;
let nav = 0.00;
let sal = 884.15;
let ren = 200.00;
let rti = 0.00;
let ins = 70.81;
let loa = 300.00;
let wat = 0.00;
let ele = 0.00;
let int = 0.00;
let mus = 6.39;
let don = 10.00;
let gym = 25.05;

let expenses = [car, nav, sal, ren, rti, ins, loa, wat, ele, int, mus, don, gym];
let expenseNames = Array.from("car nav sal ren rti ins loa wat ele int mus don gym".split(" "));

const expenseValues = expenseNames.map(string => document.getElementById(string + "-cost-t"));
expenseValues.forEach((e, i) => e.innerHTML = expenses[i]);
let totalMonthlyExpenses = 0;

const preSavings = document.getElementById("pre-savings-t");
const lessSavings = document.getElementById("less-savings-t");
const remainder = document.getElementById("remainder-t");
const totalSavings = document.getElementById("total-savings-t");

// SHOULD PARSE FLOATS
// Might be better practice to focus on innerHTML as the js values may take precedence.
// The JS values are only for pre-population

function updateTemplate() {
	totalMonthlyExpenses = 0.00;

		for (let val of expenseValues) {
			totalMonthlyExpenses += parseFloat(val.innerHTML);
		}
		document.getElementById("total-monthly-expenses-t").innerHTML = totalMonthlyExpenses;
		preSavings.innerHTML = document.getElementById("paycheck-t").innerHTML - totalMonthlyExpenses;
		lessSavings.innerHTML = sav;
		remainder.innerHTML = preSavings.innerHTML - sav;
		totalSavings.innerHTML = hys + sav;

	// 	const newValues = expenseNames.map(string => document.getElementById(string + `-cost-${budgetItemKey}`));
	// for (let val of newValues) {
	// 	totalMonthlyExpenses += parseFloat(val.innerHTML);
	// }
}

updateTemplate(); 

// ----- VALUE EDITOR ----- //

let editor = 0;
let editing = false;
let itemEdited = "paycheck-t";
function valueEditor(budgetItemId) {
	if (!editing) {
		editing = true;
		const editorForm = document.createElement("form");
		editorForm.setAttribute("action", "#");
		// editorForm.setAttribute("onsubmit", "handle");
		const editorInput = document.createElement("input");
		editorInput.setAttribute("type", "text");
		editorInput.setAttribute("placeholder", "Edit value!");
		editorInput.setAttribute("onkeypress", "handle(event)");
		editorInput.setAttribute("onsubmit", "updatePaycard(budgetItemId)");
		editorInput.setAttribute("id", "editor");
		editorForm.appendChild(editorInput);
		let budgetItem = document.getElementById(budgetItemId);
		budgetItem.appendChild(editorForm);
		budgetItem.value = editor;
	}
}

function handle(event) {
	if (event.keyCode === 13) {
		let num = itemEdited.id.toString().substring(itemEdited.id.toString().lastIndexOf("-") + 1, itemEdited.id.toString().length);
		event.preventDefault();
		editor = document.getElementById("editor").value;
		console.log(editing);
		itemEdited.textContent = editor;
		editing = false;
		alert(editor);
		updatePaycard(num);
		updateSavings(num);
	}
}

function editMoneys() {
	document.querySelectorAll(".money-var").forEach(moneyVar => {
		moneyVar.onmouseenter = function() {
			moneyVar.classList.add("highlight");
		}
		moneyVar.onmouseleave = function() {
			moneyVar.classList.remove("highlight");
		}
		moneyVar.onclick = function() {
			itemEdited = document.getElementById(moneyVar.id);
			valueEditor(moneyVar.id);	
		}
			
	});
}
editMoneys();

// ---------- PAYCARD GENERATOR AND RELOADER ---------- //

function generatePaycheckValue(num){

	let span = document.createElement("span");
	span.setAttribute("class", "money-var");
	span.setAttribute("id", `paycheck-${num}`);
	span.innerHTML = typ;
	let li = document.createElement("li");
	let text = document.createTextNode("Paycheck: $");
	li.appendChild(text);
	li.appendChild(span);
	
	return li;
}

function generateMonth(num) {
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let date = new Date();
	let month = date.getMonth() + num;
	let span = document.createElement("span");
	if (num > 11) {
		month -= 12;
	}
	span.innerHTML = months[month];
	let li = document.createElement("li");
	li.setAttribute("class", "no-bullet");
	li.appendChild(span);
	
	return li;
}

// can check for classLists 
function updatePaycard(num) {

	const paycardPaycheck = document.getElementById(`paycheck-${num}`).innerHTML;
	console.log(paycardPaycheck);
	let deductions = 0.00;
	for (let name of expenseNames) {
		deductions += parseFloat(document.getElementById(`${name}-cost-${num}`).innerHTML);
	}
	document.getElementById(`total-monthly-expenses-${num}`).innerHTML = deductions;
	console.log(deductions);
	document.getElementById(`pre-savings-${num}`).innerHTML = parseFloat(paycardPaycheck) - parseFloat(deductions);
	
}

function updateSavings(num) {
	for (let i = num; i < 13; i++) {
		let preSavings = document.getElementById(`pre-savings-${i}`).innerHTML;
		let deposit = document.getElementById(`sav-equity-${i}`).innerHTML;
		let account = document.getElementById(`hys-equity-${i}`).innerHTML;
		console.log(account);
		if (i > 1) {
			account = document.getElementById(`hys-equity-${i - 1}`).innerHTML; // from previous hys
		} else {
			account = hys;
		}
		document.getElementById(`hys-equity-${i}`).innerHTML = parseFloat(deposit) + parseFloat(account);
		document.getElementById(`dbt-equity-${i}`).innerHTML = parseFloat(preSavings) - parseFloat(deposit);
	}
}

function generateExpenses(num) {
	let paycardExpenseTotal = 0.00;
	const hr1 = document.createElement("hr");
	const hr2 = document.createElement("hr");
	const targetPaycardList = document.getElementById(`paycard-list-${num}`);
	
	targetPaycardList.appendChild(generateMonth(num));
	targetPaycardList.appendChild(generatePaycheckValue(num));

	targetPaycardList.appendChild(hr1);

	for (let i = 0; i < expenseNames.length; i++) {
		let span = document.createElement("span");
		span.setAttribute("class", "money-var");
		span.setAttribute("id", `${expenseNames[i]}-cost-${num}`);
		span.innerHTML = expenses[i];
		paycardExpenseTotal += expenses[i];
		let li = document.createElement("li");
		let text = document.createTextNode(expenseNames[i].toUpperCase() + ": $");
		li.appendChild(text);
		li.appendChild(span);
		targetPaycardList.appendChild(li);
		if (i === expenseNames.length - 1) {
			let span = document.createElement("span");
			span.setAttribute("id", `total-monthly-expenses-${num}`);
			span.innerHTML = paycardExpenseTotal;
			let li = document.createElement("li");
			li.setAttribute("class", "no-bullet");
			let text = document.createTextNode("Total Monthly Expenses: $");
			li.appendChild(text);
			li.appendChild(span);
			targetPaycardList.appendChild(li);
		}
	}

	targetPaycardList.appendChild(hr2);

	for (let i = 0; i < equityNames.length; i++) {

		if (i === 0) {
			let span = document.createElement("span");
			span.setAttribute("id", `pre-savings-${num}`);
			span.innerHTML = typ - paycardExpenseTotal;
			let li = document.createElement("li");
			li.setAttribute("class", "no-bullet");
			let text = document.createTextNode("Pre-Savings: $");
			li.appendChild(text);
			li.appendChild(span);
			targetPaycardList.appendChild(li);
		}
		let span = document.createElement("span");
		span.setAttribute("id", `${equityNames[i]}-equity-${num}`);
		if (equityNames[i] === "sav") {
			span.setAttribute("class", "money-var");
		}
		span.innerHTML = equities[i];
		let li = document.createElement("li");
		li.setAttribute("class", "no-bullet");
		let text = document.createTextNode(equityNames[i].toUpperCase() + ": $");
		li.appendChild(text);
		li.appendChild(span);
		targetPaycardList.appendChild(li);
	}

};

function generateTwelvePaycards(){
	let button = document.querySelector(".paycard-generator");
	button.onmouseleave = function() {
		ButtonInterface.buttonOnMouseLeave(button);
	}
	button.onmouseenter = function() {
		ButtonInterface.buttonOnMouseEnter(button);
	}
	button.onclick = function() {
		ButtonInterface.buttonOnClick(button);
		terminatePaycards();

		for (let i = 1; i < 13; i++) {
			generateExpenses(i);
			editMoneys();
		}
		console.log(button.value);
		updateSavings(1);
	}
}

generateTwelvePaycards();

function terminatePaycards() {
	for (let i = 1; i < 13; i++) {
		let paycardList = document.getElementById(`paycard-list-${i}`);
		while (paycardList.firstChild) {
			paycardList.removeChild(paycardList.lastChild);
		}
	}
}

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
		th.setAttribute("id", `pension-age-${retirementAge}`);
		let text = document.createTextNode(retirementAge);
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
				let text = document.createTextNode(reduction);
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
	notice.textContent = "Hi!";


	if (age < 50) {
		notice.textContent = "Retirement must occur beyond at or beyond age 50.";
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
	const fullPension = (fourSalariesAverage * pensionModifier * 30).toFixed(2);
	document.getElementById("full-pension").innerHTML = fullPension;

	const partialPension = (fourSalariesAverage * pensionModifier * serviceYears).toFixed(2);
	document.getElementById("partial-pension").innerHTML = partialPension;

	const percentageReduction = document.getElementById(`pension-age-${retirementAge}-service-${serviceYears}`).innerHTML;
	document.getElementById("reduction-percentage").innerHTML = parseInt(percentageReduction);
	document.getElementById("reduction-amount").innerHTML = (partialPension - (partialPension * (percentageReduction / 100))).toFixed(2);
	const annualPension = (partialPension * (percentageReduction / 100)).toFixed(2);
	document.getElementById("annual-pension").innerHTML = annualPension;
	document.getElementById("monthly-pension").innerHTML = (annualPension / 12).toFixed(2);

	highlightPensionReduction(retirementAge, serviceYears);
	
}

function highlightPensionReduction(age, service) {
	document.querySelector(".pension-reduction-highlight").classList.remove("pension-reduction-highlight");
	let cell;
	if (age >= 60 || age < 50) {
		cell = document.getElementById("full-pension");
	} else if (service >= 30 || service < 20) {
		cell = document.getElementById("full-pension");
	} else {
		cell = document.getElementById(`pension-age-${age}-service-${service}`);
	}
	cell.classList.add("pension-reduction-highlight");
}
// ---------- SEGREGATION MAP ---------- //

const segWest = document.getElementById("seg-west");
const segWestLow = document.getElementById("seg-west-low");
const segWestHigh = document.getElementById("seg-west-high");

const segEast = document.getElementById("seg-east");
const segEastLow = document.getElementById("seg-east-low");
const segEastHigh = document.getElementById("seg-east-high");

function generateCells() {

	for (let i = 1, j = 0, k = 6; j < 7; i++) {
		const cell = document.createElement("div");
		if (j < 2 && i < 3) {
			cell.classList.add("empty-box");
			cell.setAttribute("id", `west-${j}-${i}`);
		} else if (j > 1 && i > 2) {
			cell.classList.add("empty-box");
			cell.setAttribute("id", `west-${j}-${i}`);
		} else {
			cell.classList.add("cell-box");
			if (i === 7) {
				cell.setAttribute("id", `scw-${(2 - j) + "10"}`);
				k = 6;
			} else if (j < 2) {
				cell.setAttribute("id", `scw-${(2 - j) + "0" + k}`);
				k++;
			} else if (i === 1) {
				cell.setAttribute("id", `scw-${(i + 1) + "0" + k - (j - 1)}`);
			} else {
				cell.setAttribute("id", `scw-${(i - 1) + "0" + k - (j - 1)}`);
			}
		}
		segWest.appendChild(cell);
		if (i % 7 === 0) {
			const br = document.createElement("br");
			segWest.appendChild(br);
			j++;
			i = 0; //increments to 1 on loop start
			k = 6;
		}
	}

	for (let i = 1, j = 0; j < 7; i++) {
		const cell = document.createElement("div");
		if (j < 2 && i > 5) {
			cell.classList.add("empty-box");
			cell.setAttribute("id", `east-${j}-${i}`);
		} else if (j > 1 && i < 6) {
			cell.classList.add("empty-box");
			cell.setAttribute("id", `east-${j}-${i}`);
		} else {
			cell.classList.add("cell-box");
			if (j === 6 && i >= 6) {
				cell.setAttribute("id", `sce-${(i - 5) + "20"}`);
			} else if (j <= 1 && i <= 5) {
				cell.setAttribute("id", `sce-${(2 - j) + "1" + i}`);
			} else if (j >= 2 && i >= 6) {
				cell.setAttribute("id", `sce-${(i - 5) + "1" + (j + 4)}`);
			}
		}
		

		segEast.appendChild(cell);
		if (i % 7 === 0) {
			const br = document.createElement("br");
			segEast.appendChild(br);
			j++;
			i = 0;
		}
	}
}

generateCells();

/**
 * @param {string} name
 * @param {string} photo
 */
class Character {
	constructor(name, photo) {
		this.name = name;
		this.photo = photo;
	}
}

/**
 * @param {string} name
 * @param {number} number
 * @param {string} bunk
 * @param {string} photo
 */
class Inmate {
	constructor(name, number, bunk, photo) {
		this.name = name;
		this.number = number;
		this.bunk = bunk;
		this.photo = photo;
	}
}

function generateSimpleNames() {
	let firstName = "";
	let lastName = "";
	let fullName = "";
	const syllables = [
		"ka", "ki", "ku", "ke", "ko", "keu",
		"ra", "ri", "ru", "re", "ro", "reu",
		"ta", "ti", "tu", "te", "to", "teu",
		"sa", "si", "su", "se", "so", "seu",
		"ma", "mi", "mu", "me", "mo", "meu"
	];
	const vowels = ["a", "i", "u", "e", "o", "eu"];
	const clusters = ["sh", "zm", "sr", "s", "j", "kr", "ks", "ksh"]
	
	for(let i = 0; i < 2; i++) {
		let ran1 = ((syllables.length - 1) * Math.random()).toFixed(0);
		let ran2 = ((vowels.length - 1) * Math.random()).toFixed(0);
		let ran3 = ((clusters.length - 1) * Math.random()).toFixed(0);
		// console.log(ran1);
		// console.log(syllables[ran1]);
		if (i === 0) {
			firstName += syllables[ran1] + clusters[ran3];
		}
		if (i === 1) {
			lastName += (vowels[ran2] + clusters[ran3] + syllables[ran1] + syllables[ran1]);
		}
	}
	fullName = firstName + " " + lastName;
	return fullName;

}
let residents = [];

function createCharacters(){
	for (let i = 0; i < 40; i++) {
		let c = new Character();
		c.name = generateSimpleNames();
		c.photo = `../assets/segregation-residents/resident-${i}.jpg`;
		residents[i] = c;
	}
}
createCharacters();
// console.log(residents[2]);


/**
 * 
 * @param {HTMLElement} assignment 
 * @param {Character} resident
 */
function createCellCard (assignment, resident) {
	let docnum = ((Math.random(0) * 123) + 1234567);
	docnum = docnum.toFixed(0);
	const img = document.createElement("img");
	const nameSpan = document.createElement("span");
	const numberSpan = document.createElement("span");
	const bunkSpan = document.createElement("span");
	const text1 = document.createTextNode(resident.name);
	const text2 = document.createTextNode(docnum++);
	const text3 = document.createTextNode(assignment.id);
	const hr1 = document.createElement("hr");
	const hr2 = document.createElement("hr");
	const hr3 = document.createElement("hr");

	img.setAttribute("src", `${resident.photo}`);
	img.setAttribute("width", "50px");
	img.setAttribute("height", "50px");

	nameSpan.setAttribute("id", "assigned-" + assignment.id + "-name");
	numberSpan.setAttribute("id", "assigned-" + assignment.id + "-number");
	bunkSpan.setAttribute("id", "assigned-" + assignment.id + "-bunk");

	nameSpan.appendChild(text1);
	numberSpan.appendChild(text2);
	bunkSpan.appendChild(text3);

	assignment.appendChild(img);
	assignment.appendChild(hr1);
	assignment.appendChild(nameSpan);
	assignment.appendChild(hr2);
	assignment.appendChild(numberSpan);
	assignment.appendChild(hr3);
	assignment.appendChild(bunkSpan);
}

// a more detailed populateCells()
const populator = document.getElementById("sm-populator");
let populated = false;
populator.onclick = function() {
	if (!populated) {
		populated = true;
		loadCurrentInmates();
	}
}

function loadCurrentInmates() {
	const cells = document.querySelectorAll(".cell-box");

	for (let i = 0; i < cells.length; i++) {
		createCellCard(cells[i], residents[i]);
	}
}

function populateCells() {

	const cells = document.querySelectorAll(".cell-box");

	for (let cell of cells) {
		let text = document.createTextNode(cell.id);
		let span = document.createElement("span");
		span.appendChild(text);
		cell.appendChild(span);

	}
}
