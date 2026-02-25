function focusWriting() {
	const foc = document.getElementById("sampleTypingField").autofocus = true;
	document.getElementById("sampleTypingField").innerHTML = foc;
	console.log("Focus Writing is triggering!");
}
// ---------- POEM SECTION ---------- //
/* To associate with an audiofile, use a Map */
const poems = [
	"My soul, it comes alive, for just this night. I realize it\'s only now. I do surmise a lack of meaning to come from what I do - the day by day, the black and grey - there\'s just so little sense of meaning to me.",
	"If you will read and follow the rules in this booklet, your time in prison will be easier. The people who work for the prisons can be of help to you. If you have any questions about any matter, ask a member of the staff. If you have any questions about any of the rules in this booklet, see a staff member and they will answer your questions. Obey all prison rules and make the most of chances to show that you can act in a manner which can lead to your release.",
	"Form does not differ from emptiness, emptiness does not differ from form; that which is form is emptiness, that which is emptiness form. The same is true of feelings, perceptions, formations, consciousness.",
	// "Wayward I drifted, loosely guided by principle and conviction whose strength teetered and peaked with a worrying frequency. Each inevitable workplace dejection garnered close company with the pangs of such teetering strength, hallmarked by decisional regret of both the short and long term: the inescapable failings of a misguided youth.",
	"You\'re most attractive when you\'re not worried about who you\'re attracting.",
	"A gentle breeze was the only thing I had heard. All I could see surrounding my small, green oasis were immaculate dunes, some of stature, some modest, subjacent to a brilliant, pristine, blue sky whose fields spread dotted by puffy, white clouds, inching away ever so slowly, their movement involving enough in this remarkably empty scene so as to merit my attention and enrapture me in contemplative wonder.",
	// "I choose discomfort to my betterment over comfort to my detriment.",
	// "I live for coincidences. They briefly give mto me the illusion or the hope that there\'s a pattern to my life, and if there\'s a pattern, then maybe I\'m moving toward some kind of destiny where it\'s all explained.",
];	

let poemnumber = 0;
let selectedpoem = poems[poemnumber];

function getPoemNumber() {
	document.getElementById("poemnum").innerHTML = "Passage #" + (poemnumber + 1);
}

/* SETS THE POEM INTO THE FORTYPING ID ELEMENT */
let englishSutraLine = 0;
document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);

// document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[englishSutraLine][0] + "</span>" + selectedpoem[englishSutraLine].substring(1, selectedpoem[englishSutraLine].length) + ".";
// document.getElementById("fortyping").innerHTML = selectedpoem.split(".")[englishSutraLine];


function nextPoem() {
	englishSutraLine = 0;
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
}

function previousPoem() {
	englishSutraLine = 0;
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
}

const tap = 1;


// Avalokiteshvara Bodhisattva, when practicing deeply the prajna paramita, perceived that all five skandhas in their own being are empty, and was saved from
function typingTest() {
	const para = selectedpoem;
	const typed = document.getElementById("sampleTypingField").value;
	const typingProgress = document.getElementById("fortyping");
	console.log("TYPED = " + typed);

	if (typed === selectedpoem.substring(0, typed.length) && typed.length) {
		typingProgress.innerHTML = para.replace(typed, `<span class="writinginitial" style="color:rgb(123, 153, 184);">` + typed[0] + `</span> <span style="color:rgb(123, 153, 184);">` + typed.substring(1, typed.length) + "</span>");
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
window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
};

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

function enablePoemButtons() {
		document.querySelectorAll(".poem-buttons").forEach(button => {
		button.onmouseleave = function() {
			CMBRutil.buttonOnMouseLeave(button);
		}
		button.onmouseenter = function() {
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onclick = function() {
			console.log(button.value);
			if (button.value === "next") {
				nextPoem();
			} else {
				previousPoem();
			}
			CMBRutil.buttonOnClick(button);
		}
	});
}

// ---------- SUTRA UTILITY ---------- //

const nobleTruths = [
	"Suffering Exists", "The Cause is Attachment", "Suffering can End", "A Path to its End Exists",
];
const eightfoldPath = [
	"Right View", "Right Thinking", "Right Speech", "Right Action", "Right Livelihood", "Right Effort", "Right Mindfulness", "Right Concentration",
];
const boddhisattvaPrecepts = [
	"Refuge in Buddha", 
	"Refuge in Dharma", 
	"Refuge in Sangha", 
	"Embrace all Moral Codes", 
	"Embrace all Good Acts", 
	"Benefit all Living Beings", 
	"Not Killing", 
	"Not Stealing", 
	"No Indulgence in Sexual Greed", 
	"Not Speaking Falsehood", 
	"Not Selling Intoxicants", 
	"Not Talking of Others' Faults", 
	"No Praising Self or Slandering Others",
	"No Begrudging the Dharma",
	"Not Being Angry",
	"Not Slandering the Three Treasures",
];

const sutraSelectedDisplay = document.getElementById("sutra-title");
let sutraFields = document.getElementById("sutra-fields");
const furiganaDisplay = document.getElementById("furigana-field");
const kanjiDisplay = document.getElementById("kanji-field");
const romajiDisplay = document.getElementById("romaji-field");
const englishDisplay = document.getElementById("english-field");
const typed = document.getElementById("sutra-typing-field");
const sutraList = document.getElementById("sutra-list");
const sutraOptions = document.getElementById("sutra-options");
const sutraLineOptions = document.getElementById("sutra-line-options");
let sutraLinesLength = 0;
let sutraLineLoaded = 0;

// TODO: create single array title
/**
	 * @param {string} englishTitle
	 * @param {string} furiganaTitle
	 * @param {string} kanjiTitle
	 * @param {string} romajiTitle
	 * @param {string[]} englishLines
	 * @param {string[]} furiganaLines
	 * @param {string[]} kanjiLines
	 * @param {string[]} romajiLines
	 */
class Sutra {
	constructor(englishTitle, furiganaTitle, kanjiTitle, romajiTitle, englishLines, furiganaLines, kanjiLines, romajiLines) {
		this.englishTitle = englishTitle;
		this.furiganaTitle = furiganaTitle;
		this.kanjiTitle = kanjiTitle;
		this.romajiTitle = romajiTitle;
		this.englishLines = englishLines;
		this.furiganaLines = furiganaLines;
		this.kanjiLines = kanjiLines;
		this.romajiLines = romajiLines;
	}
}
let currentSutra = new Sutra();

// array [title][lines]
const robeChantEnglish = [
	"Great Robe of Liberation",
	"Field Far Beyond Form and Emptiness",
	"Wearing the Tatagatha's Teaching",
	"Saving All Beings",
];
const robeChantRomaji = [
		"dai zai ge da ppuku",
		"mu so fuku den e",
		"hi bu nyo rai kyo",
		"ko do sho shu jo",
];
const robeChantFurigana = [
		"だい ざい だ っぷ く",
		"む そ ふく でん え",
		"ひ ぶ にょ らい きょ",
		"こ ど しょ しゅ じょ",
];
const robeChantKanji = [
		"大哉解脱服",
		"無相福田衣",
		"披奉如來教",
		"廣度諸衆生",
];
const heartSutraEnglish = [
	"Avalokiteshvara Bodhisattva,",
	"when practicing deeply the prajna paramita",
	"perceived that all five skandhas in their own being are empty",
	"and was saved from all suff'ring.",
	"O Shariputra,", 
	"form does not differ from emptiness",
	"emptiness does not differ from form", 
	"that which is form is emptiness",
	"that which is emptiness form",
	"The same is true of feelings, perceptions, formations, consciousness.",
	"O Shariputra,",
	"all dharmas are marked with emptiness",
	"they do not appear nor disappear",
	"are not tainted nor pure",
	"do not increase nor decrease",
	"Therefore, in emptiness, no form,",
	"no feelings, no perceptions, no formations, no consciousness",
	"no eyes, no ears, no nose, no tongue, no body, no mind,",
	"no color, no sound, no smell, no taste, no touch, no object of mind",
	"no realm of eyes",
	"until no realm of mind-consciousness",
	"no ignorance,",
	"and also no extinction of it",
	"until no old-age-and-death",
	"and also no extinction of it",
	"no suff’ring, no origination, no stopping, no path,",
	"no cognition, also no attainment",
	"With nothing to attain",
	"a Bodhisattva",
	"depends on prajna paramita,",
	"and the mind",
	"is no hindrance.",
	"Without any hindrance, no fears exist.",
	"Far apart from every inverted view",
	"one dwells in nirvana.",
	"In the three worlds all Buddhas",
	"depend on prajna paramita",
	"and attain unsurpassed complete perfect enlightenment.",
	"Therefore, know the prajna paramita",
	"is the great transcendent mantra",
	"is the great bright mantra",
	"is the utmost mantra",
	"is the supreme mantra",
	"which is able to relieve all suff’ring",
	"and is true not false.",
	"So, proclaim the prajna paramita mantra",
	"proclaim the mantra that says",
	"Gate, gate,",
	"paragate,",
	"parasamgate!",
	"Bodhi! Svaha!",
	"Heart Sutra",
];
const heartSutraKanji = [
	"観自在菩薩",
	"行深般若波羅蜜多時",
	"照見五蘊皆空",
	"度一切苦厄",
	"舍利子",
	"色不異空",
	"空不異色",
	"色即是空",
	"空即是色",
	"受想行識亦復如是",
	"舍利子",
	"是諸法空相",
	"不生不滅",
	"不垢不淨",
	"不增不減",
	"是故空中無色",
	"無受想行識",
	"無眼耳鼻舌身意",
	"無色聲香味觸法",
	"無眼界",
	"乃至無意識界",
	"無無明亦",
	"無無明盡",
	"乃至無老死",
	"亦無老死盡",
	"無苦集滅道",
	"無智亦無得",
	"以無所得故",
	"菩提薩埵",
	"依般若波羅蜜多故",
	"心無罣礙",
	"無罣礙故",
	"無有恐怖",
	"遠離一切顛倒",
	"夢想究竟涅槃",
	"三世諸佛",
	"依般若波羅蜜多故",
	"得阿耨多羅三藐三菩提",
	"故知般若波羅蜜多",
	"是大神咒",
	"是大明咒",
	"是無上咒",
	"是無等等咒",
	"能除一切苦",
	"真實不虛",
	"故說般若波羅蜜多咒",
	"即說咒曰",
	"揭諦揭諦",
	"波羅揭諦",
	"波羅僧揭諦",
	"菩提薩婆訶",
	"般若心經",
];
const heartSutraRomaji = [
	"kan ji zai bo satsu",
	"gyou jin han nya ha ra mi tta ji",
	"sho ken go on kai ku",
	"do i ssai ku yaku",
	"sha ri shi",
	"shiki fu i ku",
	"ku fu i shiki",
	"shiki soku ze ku",
	"ku soku ze shiki",
	"ju sou gyou shiki yaku bu nyo ze",
	"sha ri shi",
	"ze shou hou ku sou",
	"fu shou fu metsu",
	"fu ku fu jo",
	"fu zou fu gen",
	"ze ko ku chuu mu shiki",
	"mu ju sou gyou shiki",
	"mu gen ni bi ze sshin ni",
	"mu shiki shou ko mi soku hou",
	"mu gen kai",
	"nai shi mu i shiki kai",
	"mu mu myou yaku",
	"mu mu myou jin",
	"nai shi mu rou shi",
	"yaku mu rou shi jin",
	"mu ku shuu metsu dou",
	"mu chi yaku mu toku",
	"i mu sho to kko",
	"bo dai sa tta",
	"e han nya ha ra mi tta ko",
	"shin mu ke ge",
	"mu ke ge ko",
	"mu u ku fu",
	"on ri i ssai ten do",
	"mu sou ku kyou ne han",
	"san ze sho butsu",
	"e han nya ha ra mi tta ko", // here
	"toku a noku ta ra san myaku san bo dai",
	"ko chi han nya ha ra mi tta",
	"ze dai jin shu",
	"ze dai myou shu",
	"ze mu jo shu",
	"ze mu to do shu",
	"no jo i ssai ku",
	"shin jitsu fu ko",
	"ko setsu han nya ha ra mi tta shu",
	"soku setsu shu watsu",
	"gya te gya te",
	"ha ra gya te",
	"ha ra sou gya te",
	"bo ji so wa ka",
	"han nya shin gyou",
];
const heartSutraFurigana = [
	"かんじざいぼさつ",
	"ぎょうじんはんやはらみったじ",
	"しょうけんごうんかいく",
	"どいっさいくやく",
	"しゃりし",
	"しきふいく",
	"くふいしき",
	"しきそくぜく",
	"くそくぜしき",
	"じゅうそうぎょうしきやくぶにょぜ",
	"しゃりし",
	"ぜしょほうくそう",
	"ふしょうふめつ",
	"ふくふじょう",
	"ふぞうふげん",
	"ぜこうくちゅうむしき",
	"むじゅそうぎょうしき",
	"むげんにびぜっしんに",
	"むしきしょこみそくほう",
	"むげんかい",
	"ないしきむいしきかい",
	"むむみょうやく",
	"むむみょうじん",
	"ないしむろうし",
	"やくむろうしじん",
	"むくしゅめつどう",
	"むちやくむとく",
	"いむしょとっこ",
	"ぼだいさった",
	"えはんにゃはらみったこ",
	"しんむけげ",
	"むけげこ",
	"むうくふ",
	"おんりいっさいてんどう",
	"むそうくきょうねはん",//something fishy here
	"さんせいしょぶつ",
	"えはんにゃはらみったこ",
	"とくあのくたらさんみゃくさんぼだい",
	"こちはんにゃはらみった",
	"ぜだいじんしゅ",
	"ぜだいみょうしゅ",
	"ぜだいじょうしゅ",
	"ぜむとうどうしゅ",
	"のじょいっさいく",
	"しんじつふこ",
	"こせつはんにゃはらみったしゅ",
	"そくせせつしゅわつ",
	"ぎゃてぎゃて",
	"はらぎゃて",
	"はらそうぎゃて",
	"ぼじそわか",
	"はんにゃしんぎょう",
];

const sutras = [
	robeChant = new Sutra("Robe Chant", "たっけさのげ", "搭袈裟の偈", "Takkesa no Ge", robeChantEnglish, robeChantFurigana, robeChantKanji, robeChantRomaji),
	heartSutra = new Sutra("Heart Sutra", "まかはんやはらみったしんぎょう", "摩訶般若波羅蜜多心經"," Maka Hanya Haramitta Shingyou", heartSutraEnglish, heartSutraFurigana, heartSutraKanji, heartSutraRomaji),
];

// ----- TODO UPDATE STARTING OPTION
function initSutraList(){
	let option = document.createElement("option");
	let optionText = document.createTextNode("--- Select ---");
	option.appendChild(optionText);
	sutraOptions.appendChild(option);
	let option2 = document.createElement("option");
	let optionText2 = document.createTextNode("--- Select ---");
	option2.appendChild(optionText2);
	sutraLineOptions.appendChild(option2);

	for(let i = 0; i < sutras.length; i++) {
		let option = document.createElement("option");
		option.value = i;
		let title = document.createTextNode(sutras[i].englishTitle);
		option.append(title);
		sutraOptions.appendChild(option);
	}
}


/**
 * @param {Sutra} sutra
 */
function initSutraLines(sutra) {
	currentSutra = sutra;
	sutraSelectedDisplay.innerHTML = sutra.englishTitle;
	furiganaDisplay.innerHTML = sutra.furiganaLines[sutraLineLoaded];
	romajiDisplay.innerHTML = sutra.romajiLines[sutraLineLoaded];
	kanjiDisplay.innerHTML = sutra.kanjiLines[sutraLineLoaded];
	englishDisplay.innerHTML = sutra.englishLines[sutraLineLoaded];
	sutraLinesLength = sutra.englishLines.length;
}

/**
 * @param {Sutra} sutra
 */
function loadSelectedSutraLines(sutra){
	furiganaDisplay.innerHTML = sutra.furiganaLines[sutraLineLoaded];
	romajiDisplay.innerHTML = sutra.romajiLines[sutraLineLoaded];
	kanjiDisplay.innerHTML = sutra.kanjiLines[sutraLineLoaded];
	englishDisplay.innerHTML = sutra.englishLines[sutraLineLoaded];
}

function loadDifferentSutra(){
	currentSutra = sutras[sutraOptions.value];
	sutraLineLoaded = 0;
	initSutraLines(currentSutra);
	loadLineNumbers();
}

// ----- LINE LOADING: may need to remove/ replace options
function loadLineNumbers(){
	let options = document.getElementById("sutra-line-options");
	while (options.childElementCount > 1) {
		options.removeChild(options.lastChild);
	}
	for(let i = 0; i < currentSutra.englishLines.length; i++) {
		let option = document.createElement("option");
		option.value = i;
		let lineNumber = document.createTextNode("Line: " + (i + 1));
		option.append(lineNumber);
		sutraLineOptions.appendChild(option);
	}
}

function loadDifferentLine(){
		sutraLineLoaded = sutraLineOptions.value;
		initSutraLines(currentSutra);
}

/**
 * @param {boolean} boolean
 */
function cycleSutraLines(boolean){
	boolean ? sutraLineLoaded++ : sutraLineLoaded--;
	boolean ? console.log("next!") : console.log("previous!");
	if (sutraLineLoaded < 0) {
		sutraLineLoaded = 0;
	} 
	if (sutraLineLoaded > sutraLinesLength - 1) {
		sutraLineLoaded = sutraLinesLength - 1;
	}
	loadSelectedSutraLines(currentSutra);
}

// ----- INTERVAL PANEL ----- //

const intervalPanel = document.getElementById("interval-panel");
intervalPanel.style.animationDuration = "3s";
let panelValue = 0;

function cyclePanelItems(array) {
	if (panelValue < array.length - 1) {
		panelValue++;
		intervalPanel.textContent = array[panelValue];
	} else {
		panelValue = 0;
		intervalPanel.textContent = array[panelValue];
	}
}

/**
 * 
 * @param {string[]} array - collection
 * @param {number} milliseconds - number in milliseconds
 * @description - an extension of setInterval() to consolidate with animation duration
 */
function cyclePanelCollections(array, milliseconds) {
	intervalPanel.textContent = robeChantKanji[0];
	const millisecondString = milliseconds.toString();
	intervalPanel.style.animationDuration = millisecondString.substring(0, (millisecondString.length - 3)) + "s";
	setInterval(function() {cyclePanelItems(array)}, milliseconds);
	console.log(millisecondString.length - 3);
}

// ----- SUTRA TYPING ----- //

function enableSutraButtons(){
	document.querySelectorAll(".button-sutras").forEach(button => {
		button.onmouseleave = function() {
			CMBRutil.buttonOnMouseLeave(button);
		}
		button.onmouseenter = function() {
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onclick = function() {
			console.log(button.value);
			if (button.value === "next") {
				cycleSutraLines(true);
			} else {
				cycleSutraLines(false);
			}
			CMBRutil.buttonOnClick(button);
		}
	});
}

// Nice CSS Reference!
function sutraType() {
	console.log("TYPED value = " + typed.value);
	let fieldLength = englishDisplay.innerHTML.length;
	let typedLength = typed.value.length;
	let typedCompletion = (typedLength / fieldLength) * 100;
	furiganaDisplay.style.backgroundSize = `${typedCompletion}% 0.1rem`;
	kanjiDisplay.style.backgroundSize = `${typedCompletion}% 0.1rem`;
	romajiDisplay.style.backgroundSize = `${typedCompletion}% 0.1rem`;
	englishDisplay.style.backgroundSize = `${typedCompletion}% 0.1rem`;
	
	if (typed.value === englishDisplay.innerHTML) {
		typed.value = "";
		cycleSutraLines(true);
	}

}

(() => {

	focusWriting();
	getPoemNumber();
	enablePoemButtons();
	initSutraList();
	initSutraLines(sutras[1]);
	loadLineNumbers();
	cyclePanelCollections(robeChantKanji, 3000);
	enableSutraButtons();
	CMBRutil.navigationCharter();
	CMBRutil.handleFormDefault(true);


})();
