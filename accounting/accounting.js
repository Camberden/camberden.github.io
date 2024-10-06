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



function initAccountingNotes(tag, attributes) {
	accountingNotes.innerHTML = "Select a chapter to load notes!";

	for (let i = 0; i < accountingData.length; i++) {

		const course = accountingData[i].substring(accountingData[i].indexOf("ACC"), accountingData[i].indexOf("| Chapter")).trim();
		const chapter = accountingData[i].substring(accountingData[i].indexOf("Chapter"), accountingData[i].indexOf("| TAGS")).trim();
		const title = "Title";
		let accChap = new AccountingChapter(course, chapter, title);
		// accChap.formulas = "Formulas";
		let section = accountingData[i];
		while (section.indexOf(`</${tag}>`) !== -1) {
			accChap.formulas.push(section.substring(section.indexOf(`<${tag} ${attributes}>`), section.indexOf(`</${tag}>`)));
			formulas += section.substring(section.indexOf(`<${tag} ${attributes}>`), section.indexOf(`</${tag}>`)) + "…";
			section = section.substring(section.indexOf(`</${tag}>`) + tag.length + 3), section.indexOf(`${tag} ${attributes}`);
		}
		// console.log("1", accChap);
		// console.log("2", accChap.formulas);

		accChap.notes = accountingData[i].substring(accountingData[i].indexOf("&emsp;"), accountingData[i].length);
		accountingChapters[i] = accChap;
	}

	formulas = formulas.trim();
	formulas = formulas.split("…");

	accountingNotesButtons.forEach(button => {
		button.onclick = () => {
			console.log(button.value);
			button.value === "next" ? currentNotesSet++ : currentNotesSet--;
			document.getElementById("accounting-course").textContent = accountingChapters[currentNotesSet].course;
			document.getElementById("accounting-chapter").textContent = accountingChapters[currentNotesSet].chapter;
			document.getElementById("accounting-chapter-title").textContent = accountingChapters[currentNotesSet].title;
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

function parseAccountingFormulas(tag, attributes) {

	// for(let i = 0; i < accountingData.length; i++) {
	// 	let section = accountingData[i];
	// 	while (section.indexOf(`</${tag}>`) !== -1) {
	// 		formulas += section.substring(section.indexOf(`<${tag} ${attributes}>`), section.indexOf(`</${tag}>`)) + "…";
	// 		section = section.substring(section.indexOf(`</${tag}>`) + tag.length + 3), section.indexOf(`${tag} ${attributes}`);
	// 	}
	// }
	// formulas = formulas.trim();
	// formulas = formulas.split("…");

	// TODO: find by chapter
	for (let formula of formulas) {
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
parseAccountingFormulas("mark", `class="formula"`);