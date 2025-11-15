// ---------- LEDGER GENERATOR  ---------- //

/**
 * @description - Generates the General Ledger Module
 */
function initGeneralLedger() {
	const table = document.createElement("table");
	table.setAttribute("id", "ledger-table");
	const tr = document.createElement("tr");
	const th1 = document.createElement("th");
	th1.setAttribute("class", "th1-w");
	const th2 = document.createElement("th");
	th2.setAttribute("class", "th2-w");
	const th3 = document.createElement("th");
	th3.setAttribute("class", "th2-w");
	th1.innerHTML += `Account`;
	th2.innerHTML += "Dr.";
	th3.innerHTML += "Cr.";
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	table.appendChild(tr);
	document.getElementById("general-ledger").appendChild(table);
}
initGeneralLedger();

/**
 * @param {number} number Amount of single-entry lines to generate
 * @description - Creates the Journal Module with specified amount of entries
 */
function generateJournal(number) {
	
	const table = document.createElement("table");
	// table.setAttribute("id", "journal-table");
	const tr = document.createElement("tr");
	const th1 = document.createElement("th");
	th1.setAttribute("class", "th1-w");
	const th2 = document.createElement("th");
	th2.setAttribute("class", "th2-w");
	const th3 = document.createElement("th");
	th3.setAttribute("class", "th2-w");
	th1.innerHTML += `<button id="post-to-ledger" class="accounting-button">Post to Ledger</button>`;
	th2.innerHTML += "Dr.";
	th3.innerHTML += "Cr.";
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	table.appendChild(tr);

	for (i = 0; i < number; i++) {
		
		const tr = document.createElement("tr");
		tr.setAttribute("class", "journal-entry");
		const td1 = document.createElement("td");
		td1.innerHTML = `<input id="info-row-${i}" class="journal-${i}" type="text"><span id="indent-entry-${i}"></span>`;
		const td2 = document.createElement("td");
		td2.innerHTML = `<input id="debits-row-${i}" class="journal-${i}" type="text">`;
		const td3 = document.createElement("td");
		td3.innerHTML = `<input id="credits-row-${i}" class="journal-${i}" type="text">`;
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	}

	document.getElementById("journal-module").appendChild(table);

}
generateJournal(10);

/**
 * @todo Find type by Chart of Accounts
 * @description 
 * - Parses each staged journal entry from the Journal Module into a JournalEntry object
 * @see stagedEntries
 * @returns stagedEntries
 */
function journalize() {
	for (let i = 0; i < document.querySelectorAll(".journal-entry").length - 1; i++) {
		const entry = new JournalEntry();

		if (document.getElementById(`info-row-${i}`).value !== "") {
				entry.account = document.getElementById(`info-row-${i}`).value.toString();
				// TODO: FIND TYPE BY CHART OF ACCOUNTS OR INPUT
				entry.accountType = "Asset";
				if (document.getElementById(`debits-row-${i}`).value > 0) {
					entry.balance = document.getElementById(`debits-row-${i}`).value;
					entry.debitOrCredit = "Debit";
				} else {
					entry.balance = document.getElementById(`credits-row-${i}`).value;
					entry.debitOrCredit = "Credit";
				}
				stagedEntries.push(entry);
		}		
	}
}

/**
 * @param {JournalEntry[]} entries
 * @description 
 * - Parses each staged journal entry into the Journal Module
 * - Can take a function returning a demonstration data set
 * @see stagedEntries
 * @example journalize(stagedEntries);
 * @example journalize(generateDemoJournalEntries());
 */
function journalizeImportedEntries(entries) {
	for (let i = 0, j = 0; i < document.querySelectorAll(".journal-entry").length - 1; i++) {
		if (j === entries.length) {
			console.log(entries.length);
			console.log("Ended journal import!");
			break;
		}
		if (document.getElementById(`info-row-${i}`).value === "" && entries[j].debitOrCredit === "Debit") {
				document.getElementById(`info-row-${i}`).value = entries[j].account;
				document.getElementById(`debits-row-${i}`).value = entries[j].balance;
				document.getElementById(`credits-row-${i}`).value = "";
				document.getElementById(`info-row-${i}`).style.textIndent = "0rem";
		} else if (document.getElementById(`info-row-${i}`).value === "" && entries[j].debitOrCredit === "Credit") {
				document.getElementById(`info-row-${i}`).value = entries[j].account;
				document.getElementById(`debits-row-${i}`).value = "";
				document.getElementById(`credits-row-${i}`).value = entries[j].balance;
				document.getElementById(`info-row-${i}`).style.textIndent = "1rem";
			}
			
			j++;
		}
}
journalizeImportedEntries(generateDemoJournalEntries());

/**
 * @param {JournalEntry[]} entries 
 * @description
 * - Posts current Journal Entry Module data to the General Ledger
 * - Refreshes stagedEntries array
 * @fires writeLedgerLine()
 * @fires generateJournal(10)
 * @fires initAccountingButtons() - Due to retargetting of Post to Ledger button necessary
 */
function postToLedger(entries) {
	for (let i = 0; i < entries.length; i++) {
		writeLedgerLine(entries[i]);
	}
	document.getElementById("journal-module").innerHTML = "";
	generateJournal(10);
	initAccountingButtons();
}


// ---------- STOCK WORKSHEET  ---------- //

const stockDashboard = document.getElementById("stock-dashboard");
const stockGeneratorForm = document.getElementById("stock-generator");
const stockTypes = ["Common Stock", "Preferred Stock", "Treasury Stock"];

function populateOptions() {
	stockTypes.forEach(type => {
		let option = document.createElement("option");
		let text = document.createTextNode(type);
		option.appendChild(text);
		document.getElementById("stock-gen-type").appendChild(option);
	});

	document.getElementById("stock-gen-type").onchange = function () {
		if (document.getElementById("stock-gen-type").value === "Preferred Stock") {
			document.getElementById("preferred-parameters").style.display = "block";
		} else {
			document.getElementById("preferred-parameters").style.display = "none";
		}
	}
}
populateOptions();

function generateStockItem() {
	const inputIssue = document.querySelectorAll(".stock-input");
	let stockIssue = "";
	if (inputIssue[0].value === "Common Stock" || inputIssue[0].value === "Treasury Stock") {
		stockIssue = new Stock(inputIssue[0].value, inputIssue[1].value, inputIssue[2].value, inputIssue[3].value, inputIssue[4].value);
	} else if (inputIssue[0].value === "Preferred Stock") {
		stockIssue = new Stock(inputIssue[0].value, inputIssue[1].value, inputIssue[2].value, inputIssue[3].value, inputIssue[4].value, 
			inputIssue[5].value, inputIssue[6].value, inputIssue[7].value, inputIssue[8].value);
	}
	inputIssue.forEach(item => {
		item.value = "";
	});
	
	console.log(stockIssue);
	issueStock(stockIssue);
	const li = document.createElement("li");
	const text = document.createTextNode(generateStockDescription(stockIssue));
	li.appendChild(text);
	document.getElementById("holdings-list").appendChild(li);
}

function demoStockDataset() {
	const stockMix = [
	s1 = new Stock("Common Stock", 1000, 1, 1, 2),
	s2 = new Stock("Common Stock", 5000, 1, 1, 2),
	s3 = new Stock("Common Stock", 2500, 1, 1, 2),
	s4 = new Stock("Common Stock", 4250, 1, 1, 2),
	s5 = new PreferredStock("Preferred Stock", 1750, 5, 5, 12, false, true, true, false),
	s6 = new PreferredStock("Preferred Stock", 900, 5, 5, 12, true, false, true, false),
	s7 = new PreferredStock("Preferred Stock", 100, 5, 5, 11, false, false, false, false),
	];
	stockMix.forEach(stockItem => {
		issueStock(stockItem);
		console.log(totalStocks.at(6));
		const li = document.createElement("li");
		const text = document.createTextNode(generateStockDescription(stockItem));
		li.appendChild(text);
		document.getElementById("holdings-list").appendChild(li);
	});
}
demoStockDataset();


// ---------- EARNINGS PER SHARE WORKSHEET  ---------- //

const formulaResultField = document.getElementById("formula-result-field");
/**
 * 
 * @param {AccCalculation} calc Selected calculation with pre-written params in prose.
 */
function performAccCalculation(calc) {
	let formulaResult = 0;
	const formulaProse = document.getElementById("formula-prose");
	/**
	 * @type {Number[]}
	 */
	let payload = [];
	for (let i = 0; i < calc.pA.length; i++) {
		payload[i] = parseFloat(document.getElementById(`${i}-${calc.formula}-value`).value).toFixed(2);
		console.log("payload: " + payload[i]);
	}

	switch (calc.formula) {
		case "EPS":
			formulaResult = (parseFloat(payload[0] - payload[1])) / parseFloat(payload[2]).toFixed(2);
			formulaProse.innerHTML = `(${calc.pA[0]} - ${calc.pA[1]}) / ${calc.pA[2]})`;
		break;
			case "Diluted EPS":
			console.log("Default!");
		break;
		default:
			console.log("Default!");
		break;
	}
	return formulaResult;
}

/**
 * @type {AccCalculation}
 */
let selectedCalculation;
function enableFormulaGenerator() {
	const formulaSelect = document.getElementById("formula-select");
	const formulaField = document.getElementById("formula-field");
	let selectedFormula = "";

	accCalcs.forEach(calc => {
		const option = document.createElement("option");
		const text = document.createTextNode(calc.formula);
		option.appendChild(text);
		formulaSelect.appendChild(option);
	});


	formulaSelect.onchange = function() {
		formulaField.innerHTML = "";
		selectedFormula = formulaSelect.value;
		accCalcs.forEach(calc => {
				if (selectedFormula === calc.formula) {
					selectedCalculation = calc;
				}
			});


		accCalcs.forEach(calc => {
			if (selectedFormula === calc.formula) {
				for(let i = 0; i < calc.pA.length; i++) {
					const input = document.createElement("input");
					input.setAttribute("id",`${i}-${calc.formula}-value`);
					input.setAttribute("type", "text");
					input.placeholder = calc.pA[i];
					const br = document.createElement("br");
					formulaField.appendChild(input);
					formulaField.appendChild(br);
				}
				const button = document.createElement("button");
				button.setAttribute("id", "calculate-formula-solution");
				button.setAttribute("class", "accounting-button");
				const text = document.createTextNode("Submit");
				button.appendChild(text);
				formulaField.appendChild(button);
					// console.log("Init selected value to selection: " + selectedCalculation.formula);
					// console.log("Init selected value to selection: " + selectedCalculation.pA);

				initAccountingButtons();
			}
		});
	}
}
enableFormulaGenerator();


// ---------- T-ACCOUNT GENERATOR  ---------- //

const tCardGrid = document.getElementById("t-card-grid");
const tCardForm = document.getElementById("t-card-form");
let tAccountName = document.getElementById("t-account-name");

/**
 * 
 * @param {String} name 
 */
function convertToKebabCase(name){
	const str = name.replaceAll(" ", "-").trim();
	return str;
}

/**
 * @todo Specify for Unique Accounts
 * @param {JournalEntry[]} entries 
 */
function sendLedgerToTAccounts(entries) {
	for (let i = 0; i < entries.length; i++) {
			populateTAccountsFromLedger(entries[i]);
	}
}

/**
 * 
 * @param {string} account 
 */
function generateTAccount(identifier){
	const accountId = convertToKebabCase(identifier);
	const div = document.createElement("div");
	div.setAttribute("class", "t-card");
	const table = document.createElement("table");
	table.setAttribute("id", `${accountId}-table`);

	for (let i = 0; i < 3; i++) {
		if (i === 0){
			let tr = document.createElement("tr");
			let th1 = document.createElement("th");
			let th2 = document.createElement("th");
			let th3 = document.createElement("th");
			let th4 = document.createElement("th");
			let text1 = document.createTextNode("ref#");
			let text2 = document.createTextNode("dr.");
			let text3 = document.createTextNode("cr.");
			let text4 = document.createTextNode("ref#");

			let hr = document.createElement("hr");
			let span = document.createElement("span");
			let text = document.createTextNode(identifier);
			span.appendChild(text);
			th1.appendChild(text1);
			th2.appendChild(text2);
			th3.appendChild(text3);
			th4.appendChild(text4);
			tr.appendChild(th1);
			tr.appendChild(th2);
			tr.appendChild(th3);
			tr.appendChild(th4);
			table.appendChild(tr);
			div.appendChild(span);
			div.appendChild(hr);

		} else {
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		let td3 = document.createElement("td");
		let td4 = document.createElement("td");
		let inp1 = document.createElement("input");
		let inp2 = document.createElement("input");
		let inp3 = document.createElement("input");
		let inp4 = document.createElement("input");
		inp1.setAttribute("type", "text");
		inp2.setAttribute("type", "text");
		inp2.setAttribute("id", `${accountId}&debits-${i}`);
		inp2.setAttribute("class", "t-value");
		inp2.setAttribute("value", 0);
		inp3.setAttribute("type", "text");
		inp3.setAttribute("id", `${accountId}&credits-${i}`);
		inp3.setAttribute("class", "t-value");
		inp3.setAttribute("value", 0);
		inp4.setAttribute("type", "text");
		inp1.setAttribute("style", "width:3rem;");
		inp2.setAttribute("style", "width:4rem;");
		inp3.setAttribute("style", "width:4rem;");
		inp4.setAttribute("style", "width:3rem;");
		td1.appendChild(inp1);
		td2.appendChild(inp2);
		td3.appendChild(inp3);
		td4.appendChild(inp4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);
		}
	}
	const tr = document.createElement("tr");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");
	const td4 = document.createElement("td");
	const debitsText = document.createTextNode("Debits");
	const creditsText = document.createTextNode("Credits");
	td1.appendChild(debitsText);
	td2.setAttribute("id", `${accountId}-debits-total`);
	td3.setAttribute("id", `${accountId}-credits-total`);
	td4.appendChild(creditsText);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	table.appendChild(tr);
	div.appendChild(table);
	div.setAttribute("style", "text-align: left;");
	tCardGrid.appendChild(div);
	enableTCardCalculator();
}

/**
 * 
 * @param {JournalEntry} entry 
 */
function populateTAccountsFromLedger(entry){
	const div = document.createElement("div");
	div.setAttribute("class", "t-card");
	const table = document.createElement("table");

	const accountId = convertToKebabCase(entry.account);

	table.setAttribute("id", `${accountId}-table`);
	const sameAccounts = gatherCountOfSameAccounts(entry.account);
	console.log(`Same accounts for ${entry.account} account: ${sameAccounts}`);

	for (let i = 0; i <= sameAccounts; i++) {
		if (i === 0){
			let tr = document.createElement("tr");
			let th1 = document.createElement("th");
			let th2 = document.createElement("th");
			let th3 = document.createElement("th");
			let th4 = document.createElement("th");
			let text1 = document.createTextNode("ref#");
			let text2 = document.createTextNode("dr.");
			let text3 = document.createTextNode("cr.");
			let text4 = document.createTextNode("ref#");

			let hr = document.createElement("hr");
			let span = document.createElement("span");
			let text = document.createTextNode(entry.account);
			span.appendChild(text);
			th1.appendChild(text1);
			th2.appendChild(text2);
			th3.appendChild(text3);
			th4.appendChild(text4);
			tr.appendChild(th1);
			tr.appendChild(th2);
			tr.appendChild(th3);
			tr.appendChild(th4);
			table.appendChild(tr);
			div.appendChild(span);
			div.appendChild(hr);

		} else {
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		let td3 = document.createElement("td");
		let td4 = document.createElement("td");
		let inp1 = document.createElement("input");
		let inp2 = document.createElement("input");
		let inp3 = document.createElement("input");
		let inp4 = document.createElement("input");
		inp1.setAttribute("type", "text");
		inp2.setAttribute("type", "text");
		inp2.setAttribute("id", `${accountId}&debits-${i}`);
		inp2.setAttribute("class", "t-value");
		entry.debitOrCredit === "Debit" ? inp2.setAttribute("value", `${entry.balance}`) : inp2.setAttribute("value", 0);; // First Instance of Debits
		inp3.setAttribute("type", "text");
		inp3.setAttribute("id", `${accountId}&credits-${i}`);
		inp3.setAttribute("class", "t-value");
		entry.debitOrCredit === "Credit" ? inp3.setAttribute("value", `${entry.balance}`) : inp3.setAttribute("value", 0); // First Instance of Debits
		inp4.setAttribute("type", "text");
		inp1.setAttribute("style", "width:3rem;");
		inp2.setAttribute("style", "width:4rem;");
		inp3.setAttribute("style", "width:4rem;");
		inp4.setAttribute("style", "width:3rem;");
		td1.appendChild(inp1);
		td2.appendChild(inp2);
		td3.appendChild(inp3);
		td4.appendChild(inp4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);
		}
	}
	const tr = document.createElement("tr");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");
	const td4 = document.createElement("td");
	const debitsText = document.createTextNode("Debits");
	const creditsText = document.createTextNode("Credits");
	td1.appendChild(debitsText);
	td2.setAttribute("id", `${accountId}-debits-total`);
	td3.setAttribute("id", `${accountId}-credits-total`);
	td4.appendChild(creditsText);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	table.appendChild(tr);
	div.appendChild(table);
	div.setAttribute("style", "text-align: left;");
	tCardGrid.appendChild(div);
	enableTCardCalculator();
}

function enableTCardCalculator(){
	document.querySelectorAll(".t-value").forEach(val => {
		let tId = val.id.substring(0, val.id.lastIndexOf("&"));
		tIdInitial = tId;
		val.onkeyup = function(){
			calculateTCardTotals(tId);
		}
		val.onchange = function(){
			calculateTCardTotals(tId);
		}
		calculateTCardTotals(tId);
	});
}

function calculateTCardTotals(identifier){
	const tableRowCount = document.getElementById(`${identifier}-table`).children.length;
	const accountDebitsTotal = document.getElementById(`${identifier}-debits-total`);
	const accountCreditsTotal = document.getElementById(`${identifier}-credits-total`);
	let total = 0;
	for (let i = 1; i < tableRowCount - 1; i++) {
		let debits = document.getElementById(`${identifier}&debits-${i}`).value;
		let credits = document.getElementById(`${identifier}&credits-${i}`).value;
		debits = parseFloat(debits).toFixed(2);
		credits = parseFloat(credits).toFixed(2);
		total += (parseFloat(debits) - parseFloat(credits));
		// console.log("Calculating: " + parseFloat(total).toFixed(2));
	}
	if (total >= 0) {
		accountDebitsTotal.innerHTML = parseFloat(total).toFixed(2);
		accountCreditsTotal.innerHTML = 0;
	} else if (total < 0) {
		accountDebitsTotal.innerHTML = 0;
		accountCreditsTotal.innerHTML = total;
	}
}

// ---------- BUTTON MODULES ---------- //

/**
 * @type number
 * @description Incremented to fire selectAccountingGrid() to change viewed workspace modules.
 */
let displayedWorkspace = 2;
function selectAccountingGrid(selection) {
	const accountingGrids = document.querySelectorAll(".accounting-grid");
		if (selection >= accountingGrids.length) {
			selection = 0;
		}
		if (selection < 0) {
			selection = accountingGrids.length - 1;
		}
		accountingGrids.forEach(grid => {
			grid.style.display = "none";
		});
	displayedWorkspace = selection;
	console.log("Workspace Grid Index#" + displayedWorkspace);
	accountingGrids[selection].style.display = "flex";
	}
selectAccountingGrid(displayedWorkspace);

/**
 * @param {boolean} selection 
 */
function displayAccountingModal(selection) {
	const accountingModal = document.getElementById("accounting-modal");
	const pageHTML = document.querySelector("html");
	selection ? accountingModal.style.display = "block" : accountingModal.style.display = "none";
	selection ? pageHTML.style.height = "150%" : pageHTML.style.height = "100%";
}

function displayTaskModal(selection) {
	const taskModal = document.getElementById("task-modal");
	const pageHTML = document.querySelector("html");
	selection ? taskModal.style.display = "block" : taskModal.style.display = "none";
	selection ? pageHTML.style.height = "150%" : pageHTML.style.height = "100%";

	const taskModalField = document.getElementById("task-field");
	const accountingDropzone = document.getElementById("accounting-dropzone");
	taskModalField.textContent = accountingDropzone.value;
	accountingDropzone.textContent = "";
}

function initAccountingButtons() {
	document.querySelectorAll(".accounting-button").forEach(button => {
	button.onclick = function() {
		ButtonInterface.buttonOnClick(button);
		switch(button.id) {
			case "display-accounting-modal":
				displayAccountingModal(true);
				generateStatementTemplates();
			break;
			case "hide-accounting-modal":
				displayAccountingModal(false);
			break;
			case "display-task-modal":
				displayTaskModal(true);
			break;
			case "hide-task-modal":
				displayTaskModal(false);
			break;
			case "next-grid":
				selectAccountingGrid(++displayedWorkspace);
			break;
			case "previous-grid":
				selectAccountingGrid(--displayedWorkspace);
			break;
			case "post-to-ledger":
				journalize();
				postToLedger(stagedEntries);
				sendLedgerToTAccounts(stagedEntries);
				stagedEntries = []
			case "generate-stock":
				generateStockItem();
			break;
			case "calculate-formula-solution":
				formulaResultField.textContent = performAccCalculation(selectedCalculation);
			break;
			case "generate-t-account":
				let customAccountName = tAccountName.value;
				let existantAccounts = gatherUniqueAccountNames();
				if (!existantAccounts.includes(customAccountName)) {
					generateTAccount(customAccountName);
					tAccountName.innerHTML = "";
				}
			break;
			default:
				alert("pending!");
			break;
		}
	}

	button.onmouseenter = function() {
		ButtonInterface.buttonOnMouseEnter(button);
	}
	button.onmouseleave = function() {
		ButtonInterface.buttonOnMouseLeave(button);
	}

	});
}
initAccountingButtons();