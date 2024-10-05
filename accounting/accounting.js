window.onload = function () {
	console.log("Running!");
	allGridBlocks.forEach(gridBlock => {
		gridBlock.classList.add("load-padding-transition");
	});
}

const allGridBlocks = document.querySelectorAll(".accounting-item");
const accountingNotes = document.getElementById("accounting-notes");
const accountingNotesButtons = document.querySelectorAll(".accounting-notes-button");
const accountingNotesTotal = accountingData.length;
const formulasList = document.getElementById("formulas-list");
let formulas = "";
let currentNotesSet = 0;

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
			console.log("Index: " + section.indexOf(`<${tag} ${attributes}>`));
			section = section.substring(section.indexOf(`</${tag}>`) + tag.length + 3), section.indexOf(`${tag} ${attributes}`);
		}
	}
	formulas = formulas.trim();
	formulas = formulas.split("…");

	for (let formula of formulas) {
		// formula = formula.replace(/`<mark class="formula">`/g, " ");
		// formulas = formulas.replace(/`<\/mark>`/g, "…");
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
			// console.log(formula);
		}
		
	}
}
parseAccountingFormulas("mark", `class="formula"`);

function loadAccountingNotes() {
	accountingNotes.innerHTML = accountingData[currentNotesSet];
}
function initAccountingNotes() {
	accountingNotesButtons.forEach(button => {
		button.onclick = () => {
			console.log(button.value);
			button.value === "next" ? currentNotesSet++ : currentNotesSet--;
			loadAccountingNotes();
			ButtonInterface.buttonOnClick(button);
			// parseAccountingFormulas();

		}
		button.onmouseenter = () => {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	})
}
loadAccountingNotes();
initAccountingNotes();

