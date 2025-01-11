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

console.log(accountingChapters[4].formulas[0]);


// parseAccountingFormulas("mark", `class="formula"`);


function promptAccountingFormula() {
	for (let chapter of accountingChapters) {
		formulaTotals += chapter.formulas.length;
	}
	console.log("formula totals: " + formulaTotals);
}
promptAccountingFormula();

function loadQuiz() {
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
	let answer = formulasList.children.item(formulaRandom).textContent;
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
