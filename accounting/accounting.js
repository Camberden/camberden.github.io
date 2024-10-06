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
let accountingChapters = {};


class AccountingChapter {
	constructor(course, chapter, title, formulas, notes) {
		this.course = course;
		this.chapter = chapter;
		this.title = title;
		this.formulas = formulas;
		this.notes = notes;
	}
}

function parseAccountingFormulas(tag, attributes) {

	for(let i = 0; i < accountingData.length; i++) {
		let section = accountingData[i];
		while (section.indexOf(`</${tag}>`) !== -1) {
			formulas += section.substring(section.indexOf(`<${tag} ${attributes}>`), section.indexOf(`</${tag}>`)) + "…";
			section = section.substring(section.indexOf(`</${tag}>`) + tag.length + 3), section.indexOf(`${tag} ${attributes}`);
		}
	}
	formulas = formulas.trim();
	formulas = formulas.split("…");

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

function initAccountingNotes() {
	accountingNotes.innerHTML = accountingData[currentNotesSet];
	for (let i = 0; i < accountingData.length; i++) {
		
		let accChap = new AccountingChapter();
		accChap.course = accountingData[i].substring(accountingData[i].indexOf("ACC"), accountingData[i].indexOf("| Chapter")).trim();
		accChap.chapter = accountingData[i].substring(accountingData[i].indexOf("Chapter"), accountingData[i].indexOf("| TAGS")).trim();
		accChap.title = "Title";
		accChap.formulas = "Formulas";
		accChap.notes = accountingData[i].substring(accountingData[i].indexOf("&emsp;"), accountingData[i].length);
		accountingChapters[i] = accChap;
	}
	
	accountingNotesButtons.forEach(button => {
		button.onclick = () => {
			console.log(button.value);
			button.value === "next" ? currentNotesSet++ : currentNotesSet--;
			accountingNotes.innerHTML = accountingData[currentNotesSet];
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
initAccountingNotes();
