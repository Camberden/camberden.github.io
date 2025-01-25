window.onload = function () {
	console.log("Running!");
	allGridBlocks.forEach(gridBlock => {
		gridBlock.classList.add("load-padding-transition");
	});
}

const allGridBlocks = document.querySelectorAll(".accounting-item");
const accountingNotes = document.getElementById("accounting-notes");
const accountingNotesButtons = document.querySelectorAll(".accounting-notes-button");
const formulasList = document.getElementById("formulas-list");
let formulas = "";
let formulaTotals = 0;
let currentNotesSet = 0;
/** @type {AccountingChapter[]} */
let accountingChapters = [];


/**
 * @param {string} course
 * @param {string} chapter
 * @param {string} title
 * @param {string[]} formulas
 * @param {string} notes 
 */
class AccountingChapter {
	constructor(course, chapter, title, formulas = [], notes = "") {
		this.course = course;
		this.chapter = chapter;
		this.title = title;
		/** @type {string[]} */
		this.formulas = formulas;
		this.notes = notes;
	}
}

function parseAccountingFormulas(formulaArray) {

	while (formulasList.lastChild) {
		formulasList.removeChild(formulasList.lastChild);
	}
	for (let formula of formulaArray) {
		if (formula != "") {
			formula = formula.substring(formula.indexOf(">") + 1, formula.length);
			let li = document.createElement("li");
			let hr = document.createElement("hr");
			let br = document.createElement("br");
			let solution = document.createTextNode(formula.substring(0, formula.indexOf("=") + 1));
			let variables = document.createTextNode(formula.substring(formula.indexOf("=") + 1, formula.length));
			li.appendChild(solution);
			li.appendChild(br);
			li.appendChild(variables);
			li.appendChild(hr);
			formulasList.appendChild(li);
		}
	}
}

function initAccountingNotes(tag, attributes) {
	accountingNotes.innerHTML = "Select a chapter to load notes!";
	accountingData.forEach((datum, i) => {

		const course = datum.substring(datum.indexOf("ACC"), datum.indexOf("| Chapter")).trim();
		const chapter = datum.substring(datum.indexOf("Chapter"), datum.indexOf("| TAGS")).trim();
		const title = "Title";
		let accChap = new AccountingChapter(course, chapter, title);
		// accChap.formulas = "Formulas";
		let section = datum;
		while (section.indexOf(`</${tag}>`) !== -1) {
			accChap.formulas.push(section.substring(section.indexOf(`<${tag} ${attributes}>`), section.indexOf(`</${tag}>`)));
			formulas += section.substring(section.indexOf(`<${tag} ${attributes}>`), section.indexOf(`</${tag}>`)) + "…";
			section = section.substring(section.indexOf(`</${tag}>`) + tag.length + 3), section.indexOf(`${tag} ${attributes}`);
		}

		accChap.notes = datum.substring(datum.indexOf("&emsp;"), datum.length);
		accountingChapters[i] = accChap;
	})

	formulas = formulas.trim();
	formulas = formulas.split("…");

	accountingNotesButtons.forEach(button => {
		button.onclick = () => {
			console.log(button.value);
			button.value === "next" ? currentNotesSet++ : currentNotesSet--;
			document.getElementById("accounting-course").textContent = accountingChapters[currentNotesSet].course;
			document.getElementById("accounting-chapter").textContent = accountingChapters[currentNotesSet].chapter;
			document.getElementById("accounting-chapter-title").textContent = accountingChapters[currentNotesSet].title;
			parseAccountingFormulas(accountingChapters[currentNotesSet].formulas);
			// for (let formula of accountingChapters[currentNotesSet].formulas) {
			// 	const li = document.createElement("li");
			// 	const span = document.createElement("span");
			// 	const text = document.createTextNode(formula);
			// 	span.appendChild(text);
			// 	li.appendChild(text);
			// 	formulasList.appendChild(li);
			// }
			accountingNotes.innerHTML = accountingChapters[currentNotesSet].notes;
			ButtonInterface.buttonOnClick(button);

		}
		button.onmouseenter = () => {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	})
}
initAccountingNotes("mark", `class="formula"`);

function promptAccountingFormula() {
	for (let chapter of accountingChapters) {
		formulaTotals += chapter.formulas.length;
	}
	console.log("formula totals: " + formulaTotals);
}
promptAccountingFormula();

// ----- QUIZ MODULES ----- //

function formulaQuiz() {
	const textArea = document.createElement("textarea");
	textArea.setAttribute("id", "quiz-field");
	const accountingQuizText = document.getElementById("accounting-quiz-text");
	const quizInput = document.getElementById("quiz-input");
	const showAnswer = document.getElementById("show-answer");
	quizInput.innerHTML = "";
	quizInput.appendChild(textArea);
	showAnswer.innerHTML = "";
	let r = Math.random();
	let formulaRandom = Math.round(formulaTotals * r);
	let answer = formulas[formulaRandom];
	answer = answer.substring(answer.indexOf(">") + 1, answer.length);
	let problem = answer.substring(0, answer.indexOf("=") + 1);
	accountingQuizText.innerHTML = problem;
	const showAnswerButton = document.createElement("button");
	showAnswerButton.onclick = function () {
		accountingQuizText.innerHTML = "<br>" + answer;
		quizInput.innerHTML = document.getElementById("quiz-field").value;
		showAnswer.innerHTML = "";
	}
	const text = document.createTextNode("Show Answer");
	showAnswerButton.appendChild(text);
	showAnswer.appendChild(showAnswerButton);
}

const acronyms = [
	"GAAP", "SEC", "FASB", "SFAC", "SFAS", "SFAS interpolations", "SFAS Staff Positions",
	"EITF", "FAF", "FASAC", "ASU", "ASC", "PCC", "GASB", "FAF", "GASAC", "AICPA", "CAP", "APB", "AcSEC",
	"FinREC", "ASB", "ASB SAS", "PCAOB", "IASB", "AAA",
];
const acronymMeanings = ["Generally Accepted Accounting Principles", "Securities & Exchange Commission",
	"Financial Accounting Standards Board", "Statements of Financial Accounting Concepts", 
	"Statements of Financial Accounting Standards", "Pre-codification clarifications", "Pre-codification clarifications",
	"Emerging Issues Task Force", "Financial Accounting Foundation", "Financial Accounting Standards Advisory Council",
	"Accounting Standards Update", "Accounting Standards Codification", "Private Company Council", 
	"Governmental Accounting Standards Board", "Financial Accounting Foundation", "Governmental Accounting Standards Advisory Council",
	"American Institute of Certified Public Accountants", "Committee on Accounting Procedure", "Accounting Principles Board",
	"Accounting Standards Executive Committee", "Financial Reporting Executive Committee", "Auditing Standards Board",
	"Statements on Auditing Standards (issued by ASB)", "Public Company Accounting Oversight Board",
	"International Accounting Standards Board", "American Accounting Association",
];
const acronymSignificance = [
	"The general term for rules to follow in accounting practice",
	"Federal government agency with full authority to set standards: "  + 
	"Issues FRR's (Financial Reporting Releases) [Positions on Issues] " +
	"Issues SAB's (Staff Accounting Bulletins) [Interpretations]",
	"Primary Private Sector accounting standard-setting body",
	"Forms the Conceptual Framework for accounting",
	"Formerly the primary output of FASB (pre-codification)",
	"(modify / extend existing standards",
	"(interpretive guidance / minor amendments)",
	"Issues Consensus Opinions on fast-changing issues",
	"Appointed the FASB",
	"Advises the FASB",
	"Primary output of FASB due process (new rules issued)",
	"The centralized searchable database of GAAP",
	"Advisory body for FASB on private company matters",
	"State & Local Government accounting standards",
	"Appointed the GASB", 
	"Advises the GASB",
	"Private Sector advocate for accounting profession",
	"Issued ARB's (Accounting Research Bulletins",
	"Issued APBO's (Accounting Principles Board Opinions",
	"Speaks for the AICPA and has issued: " +
	"Audit & Accounting Guides (specialized guidance) " +
	"SOP (Statement of Position) & Practice Bulletins",
	"Replaced the AcSEC",
	"Private company audit standards",
	"(still in force & growing)",
	"Oversees and creates auditing standards for public companies", 
	"Issues IFRS (International Financial Reporting Standards)",
	"Accounting Educator Group (input for standard creation)",
];

function acronymQuiz() {
	const textArea = document.createElement("textarea");
	textArea.setAttribute("id", "quiz-field");
	const accountingQuizText = document.getElementById("accounting-quiz-text");
	const quizInput = document.getElementById("quiz-input");
	const showAnswer = document.getElementById("show-answer");
	quizInput.innerHTML = "";
	quizInput.appendChild(textArea);
	showAnswer.innerHTML = "";
	let r = Math.random();
	let acronymRandom = Math.round(acronyms.length * r);
	let problem = acronyms[acronymRandom];
	let answer = acronymMeanings[acronymRandom];
	let significance = acronymSignificance[acronymRandom];

	accountingQuizText.innerHTML = problem;
	const showAnswerButton = document.createElement("button");
	showAnswerButton.onclick = function () {
		accountingQuizText.innerHTML = "<span> " + problem + "<br>" + answer + "<br><br> Significance: " + significance + "</span>";
		quizInput.innerHTML = document.getElementById("quiz-field").value;
		showAnswer.innerHTML = "";
	}
	const text = document.createTextNode("Show Answer");
	showAnswerButton.appendChild(text);
	showAnswer.appendChild(showAnswerButton);
}

function exitQuiz() {
	document.getElementById("accounting-quiz-text").innerHTML = "Accounting Quizes";
	document.getElementById("quiz-input").innerHTML = "";
	document.getElementById("show-answer").innerHTML = "";
}

function initQuizButtons() {
	document.querySelectorAll(".accounting-quiz-button").forEach(button => {
	button.onclick = function() {
		ButtonInterface.buttonOnClick(button);
		switch(button.value) {
			case "formula-quiz":
				formulaQuiz();
			break;
			case "acronym-quiz":
				acronymQuiz();
			break;
			case "exit-quiz":
				exitQuiz();
			break;
			default:
				exitQuiz();
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
initQuizButtons();

// ---------- T-ACCOUNT GENERATOR  ---------- //

const tCardGrid = document.getElementById("t-card-grid");
const generateTAccountButton = document.getElementById("generate-t-account-button");
let accountName = document.getElementById("account-name");

const tCardForm = document.getElementById("t-card-form");
function handleForm(event) {
	event.preventDefault();
}
tCardForm.addEventListener("submit", handleForm);

generateTAccountButton.onclick = function() {
	let account = accountName.value;
	console.log(account);
	generateTAccount(account);
	accountName.innerHTML = "";
}


function generateTAccount(account){
	const div = document.createElement("div");
	div.setAttribute("class", "t-card");
	const table = document.createElement("table");
	table.setAttribute("id", `${account}-table`);

	for (let i = 0; i < 6; i++) {
		let hr = document.createElement("hr");
		if (i === 0){
			let tr = document.createElement("tr");
			let th = document.createElement("th");
			let text = document.createTextNode(account);
			th.appendChild(text);
			tr.appendChild(th);
			table.appendChild(tr);
			table.appendChild(hr);
		}
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
		inp2.setAttribute("id", `${account}-debits-${i}`);
		inp2.setAttribute("type", "text");
		inp3.setAttribute("id", `${account}-credits-${i}`);
		inp3.setAttribute("type", "text");
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
	const tr = document.createElement("tr");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");
	const td4 = document.createElement("td");
	const debitsText = document.createTextNode("Debits");
	const creditsText = document.createTextNode("Credits");
	td1.appendChild(debitsText);
	td2.setAttribute("id", `${account}-debits-total`);
	td3.setAttribute("id", `${account}-credits-total`);
	td4.appendChild(creditsText);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	table.appendChild(tr);
	div.appendChild(table);
	tCardGrid.appendChild(div);
}

function calculateTCardTotals(account){
	const tableRowCount = document.getElementById(`${account}-table`).children.length;
	const accountDebitsTotal = document.getElementById(`${account.id}-debits-total`);
	const accountCreditsTotal = document.getElementById(`${account.id}-credits-total`);
	let total = 0;
	for (let i = 1; i < tableRowCount; i++) {
		let debits = document.getElementById(`${account}-debits-${i}`).innerHTML;
		let credits = document.getElementById(`${account}-credits-${i}`).innerHTML;
		debits = parseFloat(debits).toFixed(2);
		credits = parseFloat(credits).toFixed(2);
		total += (debits + credits);
	}
	if (total >= 0) {
		accountDebitsTotal.innerHTML = total;
		accountCreditsTotal.innerHTML = 0;
	} else if (total < 0) {
		accountDebitsTotal.innerHTML = 0;
		accountCreditsTotal.innerHTML = total;
	}
}
