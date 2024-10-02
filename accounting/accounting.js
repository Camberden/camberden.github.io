window.onload = function () {
	console.log("Running!");
	allGridBlocks.forEach(gridBlock => {
		console.log("hi");
		gridBlock.classList.add("load-padding-transition");
	});
}

const allGridBlocks = document.querySelectorAll(".accounting-item");
const accountingNotes = document.getElementById("accounting-notes");
const accountingNotesButtons = document.querySelectorAll(".accounting-notes-button");
accountingNotes.innerHTML = accountingData[0];
const accountingNotesTotal = accountingData.length;
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

// @chapter 9 for formula markup
function parseAccountingFormulas() {
	let formulas = [];
	document.querySelectorAll(".formula").forEach(formula => {
		formulas += formula.textContent;
		console.log(formula.textContent); // for loading formulas piece-by-piece into object
	});
	return formulas;
}
parseAccountingFormulas();

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
			parseAccountingFormulas();

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

