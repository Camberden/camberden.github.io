window.onload = () => console.log("Running!");

function focusWriting() {
	const foc = document.getElementById("sampleTypingField").autofocus = true;
	document.getElementById("sampleTypingField").innerHTML = foc;
	console.log("Focus Writing is triggering!");
}

focusWriting();

// ---------- POEM SECTION ---------- //


/* To associate with an audiofile, use a Map */
const poems = [
	"Wayward I drifted, loosely guided by principle and conviction whose strength teetered and peaked with a worrying frequency. Each inevitable workplace dejection garnered close company with the pangs of such teetering strength, hallmarked by decisional regret of both the short and long term: the inescapable failings of a misguided youth.",
	"If you will read and follow the rules in this booklet, your time in prison will be easier. The people who work for the prisons can be of help to you. If you have any questions about any matter, ask a member of the staff. If you have any questions about any of the rules in this booklet, see a staff member and they will answer your questions. Obey all prison rules and make the most of chances to show that you can act in a manner which can lead to your release.",
	"You\'re most attractive when you\'re not worried about who you\'re attracting.",
	"A gentle breeze was the only thing I had heard. All I could see surrounding my small, green oasis were immaculate dunes, some of stature, some modest, subjacent to a brilliant, pristine, blue sky whose fields spread dotted by puffy, white clouds, inching away ever so slowly, their movement involving enough in this remarkably empty scene so as to merit my attention and enrapture me in contemplative wonder.",
	"My soul, it comes alive, for just this night. I realize it\'s only now. I do surmise a lack of meaning to come from what I do - the day by day, the black and grey - there\'s just so little sense of meaning to me.",
	// "I choose discomfort to my betterment over comfort to my detriment.",
	// "I live for coincidences. They briefly give mto me the illusion or the hope that there\'s a pattern to my life, and if there\'s a pattern, then maybe I\'m moving toward some kind of destiny where it\'s all explained.",
];



let poemnumber = 0;
let selectedpoem = poems[poemnumber];
let quoteAudio = new Audio("../assets/quote-" + (poemnumber + 1) + ".mp3");

function getPoemNumber() {
	document.getElementById("poemnum").innerHTML = "Passage #" + (poemnumber + 1);
}
getPoemNumber();

/* SETS THE POEM INTO THE FORTYPING ID ELEMENT */
document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);

function nextPoem() {
	if (poemnumber === poems.length - 1) {
		poemnumber = 0;
		selectedpoem = poems[poemnumber];
	}
	else {
		selectedpoem = poems[++poemnumber];
	}
	console.log("Testing nextPoem function!");
	document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);
	document.getElementById("sampleTypingField").value = "";
	focusWriting();
	getPoemNumber();
	quoteAudio = new Audio("../assets/quote-" + (poemnumber + 1) + ".mp3");
}

function previousPoem() {
	if (poemnumber === 0) {
		poemnumber = poems.length - 1;
		selectedpoem = poems[poemnumber];
	}
	else {
		selectedpoem = poems[--poemnumber];
	}
	console.log("Testing previous function!");
	document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);
	document.getElementById("sampleTypingField").value = "";
	focusWriting();
	getPoemNumber();
	quoteAudio = new Audio("../assets/quote-" + (poemnumber + 1) + ".mp3");
}

const tap = 1;
let isQuotePlaying = false;

function typingTest() {
	const para = selectedpoem;
	const typed = document.getElementById("sampleTypingField").value;
	console.log("TYPED = " + typed);
	const marker = document.getElementById("fortyping");

	if (typed === selectedpoem.substring(0, typed.length) && typed.length) {
		marker.innerHTML = para.replace(typed, `<span class="writinginitial" style="color:rgb(123, 153, 184);">` + typed[0] + `</span> <span style="color:rgb(123, 153, 184);">` + typed.substring(1, typed.length) + "</span>");
	}

	// IS WHAT'S TYPED THE SAME AS THE SELECTION? COMPLETE!
	if (typed === selectedpoem) {
		document.getElementById("sampleTypingField").value = "";
		document.getElementById("fortyping").innerHTML = `<span class="writinginitial">"` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);
		alert("✨");
		nextPoem();
	}
}

document.onkeydown = function (evt) {
	evt = evt || window.event;
	let isEscape = false;
	if ("key" in evt) {
		isEscape = evt.key === "Escape" || evt.key === "Esc";
	}
	else {
		isEscape = evt.keyCode === 27;
	}
	if (isEscape) {
		nextPoem();
	}
};


const modal = document.getElementById("menumodal");
const menuclick = document.getElementById("menulabel");
const menuclose = document.getElementsByClassName("closemenu")[0];

let chosenPoem = "";
const poemSelectionMenu = document.getElementById("poem-select");
function populatePoemSelection() {
	for (let i = 0; i < poems.length; i++) {
		poemSelectionMenu.innerHTML += "<option> Poem " + (i + 1) + ": " + poems[i].substring(0, 20) + "... </option";
	}
}

function goToPoem() {
	// UPDATE THIS ASSIGNMENT.
	chosenPoem = document.getElementById("poem-select").value.substring(5, 6);
	poemnumber = parseInt(chosenPoem) - 1;
	selectedpoem = poems[poemnumber];

	console.log("Testing goToPoem function!");
	document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);
	document.getElementById("sampleTypingField").value = "";
	focusWriting();
	getPoemNumber();
	//quoteAudio = new Audio("../assets/quote" + (poemnumber + 1) + ".mp3");
	modal.style.display = "none";
	poemSelectionMenu.innerHTML = "";
	console.log(poemnumber);
}

menuclick.onclick = function () {
	populatePoemSelection();
	modal.style.display = "block";
};

menuclose.onclick = function () {
	modal.style.display = "none";
	poemSelectionMenu.innerHTML = "";
};

window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
};



// ---------- SUTRA SECTION ---------- //

const sutrasSinoSanskritJapanese = [
	"搭袈裟の偈", [
		"大哉解脱服",
		"無相福田衣",
		"披奉如來教",
		"廣度諸衆生",
	]
];

const sutrasRomaji = [
	"Takkesa no Ge", [
		"dai zai ge da ppuku",
		"mu so fuku den e",
		"hi bu nyo rai kyo",
		"ko do sho shu jo",
	]
];

const sutrasFurigana = [
	"たっけさのげ", [
		"だい ざい だ っぷ く",
		"む そ ふく でん え",
		"ひ ぶ にょ らい きょ",
		"こ ど しょ しゅ じょ",
	]
];

let sutraPanel = document.getElementById("sutra-panel");
sutraPanel.innerHTML = sutrasSinoSanskritJapanese[0];
let k = 0;
function cycleSutraLines() {
	sutraPanel.innerHTML = sutrasSinoSanskritJapanese[1][k];
	// console.log(k);
	if (k >= sutrasSinoSanskritJapanese[1].length - 1) {
		k = 0;
	} else {
		k++;
	}
	return k;
}

const displaySutras = function () {
	setInterval(cycleSutraLines, 2000); //DON'T USE FUNCTION PARAENTHESIS FOR INTERVAL ARGUMENT
}

displaySutras();


let kanjiCounter = 0;
let lineCounter = 0;
let sutraSelection = 1 // must be altered through HTML form
const highlight = `<span style="color:rgb(123, 153, 184);">`;

const sutraForTyping = document.getElementById("sutra-fortyping");
// Sutra Selection will be done with the first array index.
sutraForTyping.innerHTML = sutrasSinoSanskritJapanese[sutraSelection][lineCounter];


function sutraTest() {
	const transliteration = sutrasRomaji[1][lineCounter].split(" ");
	console.log(transliteration);

	const typed = document.getElementById("sutra-typing-field");
	console.log("TYPED value = " + typed.value);

	if (typed.value === transliteration[transliteration.length - 1]) {
		// Next Line Triggered
		console.log("Triggered Line Change");
		typed.innerHTML = "";
		typed.value = "";
		++lineCounter;
		kanjiCounter = 0;
	}

	// if (typed.value === transliteration[0]){
	// 	sutraForTyping.innerHTML = (highlight + sutrasSinoSanskritJapanese[sutraSelection][0] + "</span>")
	// }

	// Color first kanji
	if (typed.value === transliteration[kanjiCounter]) {
		console.log("Sutra Next Kanji Triggered!");
		typed.innerHTML = "";
		typed.value = "";
		sutraForTyping.innerHTML = (highlight + sutrasSinoSanskritJapanese[sutraSelection][lineCounter][kanjiCounter]) + "</span>" + 
		sutrasSinoSanskritJapanese[sutraSelection][lineCounter].substring(kanjiCounter + sutrasSinoSanskritJapanese[sutraSelection][lineCounter].length);
		++kanjiCounter;
	}
}



// if (typed === transliteration.substring(0, typed.length) && typed.length) {
// 	marker.innerHTML = para.replace(typed, `<span style="color:rgb(123, 153, 184);">` + typed.substring(0, typed.length) + "</span>");
// }

// if (typed === transliteration) {
// 	document.getElementById("sutraTypingField").value = "";
// 	alert("✨");
// }


// ---------- RECONNECT THIS TO ACTIVATE AUDIO ---------- //

// ---------- DISCIPLINARY MAP ---------- //


