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
accountingNotes.textContent = accountingData[2];
const accountingNotesTotal = accountingData.length;
let currentNotesSet = 2;

function loadAccountingNotes() {
	accountingNotes.textContent = accountingData[currentNotesSet];
}

function initAccountingNotes() {
	accountingNotesButtons.forEach(button => {
		button.onclick = () => {
			console.log(button.value);
			button.value === "next" ? currentNotesSet++ : currentNotesSet--;
			loadAccountingNotes();
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