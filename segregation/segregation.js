// ---------- GENERAL ITEM UTILITY ---------- //

const blockOne = document.getElementById("block-1");
const allButtons = document.querySelectorAll("button");
const itemSelectedDisplay = document.getElementById("item-title");
const itemList = document.getElementById("item-list");
const listOptions = document.getElementById("list-options");

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

let populated = false;
function initSegButtons() {
	document.querySelectorAll("button").forEach(button => {
		button.onclick = function() {
			CMBRutil.buttonOnClick(button);
			switch (button.id){
				case "sm-populator" :
					if (!populated) {
						populated = true;
						loadCurrentInmates();
					}
					break;
				case "previous" :
					console.log("previous");
					break;
				case "next" :
					console.log("next");
					break;
				default :
					console.log("default");
				break;
		}
			}

		button.onmouseenter = function() {
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function() {
			CMBRutil.buttonOnMouseLeave(button);
		}
	});
}
initSegButtons();


function loadCurrentInmates() {
	const cells = document.querySelectorAll(".cell-box");

	for (let i = 0; i < cells.length; i++) {
		createCellCard(cells[i], residents[i]);
		// const li = document.createElement("li");
		// const text = document.createTextNode(residents[i].number);
		// li.appendChild(text);
		// document.getElementById("generated-residents").appendChild(li);
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