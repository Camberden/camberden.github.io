window.onload = () => console.log("Running!");

// ---------- GENERAL ITEM UTILITY ---------- //

const blockOne = document.getElementById("block-1");
const allButtons = document.querySelectorAll("button");
const itemSelectedDisplay = document.getElementById("item-title");
const itemList = document.getElementById("item-list");
const listOptions = document.getElementById("list-options");

function enableToyButtons() {
	document.querySelectorAll(".w-item").forEach(e => {
		e.onclick = function () {
			console.log(e.id);
			switch (e.id) {
				case ("pankair"):
					e.style.color = "green";
					break;
				case ("pankair-sw"):
					e.style.color = "blue";
					break;
				case ("busmat"):
					e.style.color = "orange";
					break;
				case ("elaor"):
					e.style.color = "pink";
					break;
				case ("nao"):
					e.style.color = "white";
			}
		}
	});
}
enableToyButtons();

/**
* @param {string} title
* @param {string[]} content
*/
class Content {
	constructor(title, content,) {
		this.title = title;
		this.content = content;
	}
}

// test arrays
const nobleTruthsArray = [
	"Suffering Exists",
	"The Cause is Attachment",
	"Suffering can End",
	"A Path to its End Exists",
];
const eightfoldPathArray = [
	"Right View",
	"Right Thinking",
	"Right Speech",
	"Right Action",
	"Right Livelihood",
	"Right Effort",
	"Right Mindfulness",
	"Right Concentration",
];
const boddhisattvaPreceptsArray = [
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
const contentItems = [
	nobleTruths = new Content("Noble Truths", nobleTruthsArray),
	eightfoldPath = new Content("Eightfold Path", eightfoldPathArray),
	boddhisattvaPrecepts = new Content("Boddhisatva Precepts", boddhisattvaPreceptsArray),
];

// ----- FUNCTIONS

let itemSelected = 1;
function initItemArray() {
	let option = document.createElement("option");
	let optionText = document.createTextNode("--- Select ---");
	option.appendChild(optionText);
	listOptions.appendChild(option);

	for (let i = 0; i < contentItems.length; i++) {
		option = document.createElement("option");
		let optionText = document.createTextNode(contentItems[i].title);
		option.value = i;
		option.appendChild(optionText);
		listOptions.appendChild(option);
	}
	for (let i = 0; i < contentItems[itemSelected].content.length; i++){
		let li = document.createElement("li");
		let itemText = document.createTextNode(contentItems[itemSelected].content[i]);
		li.appendChild(itemText);
		itemList.appendChild(li);
	}
	itemSelectedDisplay.innerHTML = contentItems[itemSelected].title;
}
initItemArray();

function cycleItemArrays(boolean) {
	itemList.innerHTML = "";
	boolean ? itemSelected++ : itemSelected--;
	boolean ? console.log("next!") : console.log("previous!");
	if (itemSelected < 0) {
		itemSelected = contentItems.length - 1;
	} 
	if (itemSelected > contentItems.length - 1) {
		itemSelected = 0;
	}
	for (i = 0; i < contentItems[itemSelected].content.length; i++) {
		let li = document.createElement("li");
		let itemText = document.createTextNode(contentItems[itemSelected].content[i]);
		li.appendChild(itemText);
		itemList.appendChild(li);
	}
	itemSelectedDisplay.innerHTML = contentItems[itemSelected].title;
}

function loadSelectedItemArray() {
	console.log(listOptions.value);
	itemSelected = listOptions.value;
	itemList.innerHTML = "";
	for (i = 0; i < contentItems[itemSelected].content.length; i++) {
		let li = document.createElement("li");
		let itemText = document.createTextNode(contentItems[itemSelected].content[i]);
		li.appendChild(itemText);
		itemList.appendChild(li);
	}
	itemSelectedDisplay.innerHTML = contentItems[itemSelected].title;
}

function enablePreceptsButtons(){
	document.querySelectorAll(".button-precepts").forEach(button => {
		button.onmouseleave = function() {
			ButtonInterface.buttonOnMouseLeave(button);
		}
		button.onmouseenter = function() {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onclick = function() {
			console.log(button.value);
			if (button.value == "next") {
				cycleItemArrays(true);
			} else {
				cycleItemArrays(false);
			}
			ButtonInterface.buttonOnClick(button);
		}
	});
}

enablePreceptsButtons();

// ----- BUDGET APP

// ----- PAYCARD TEMPLATE ----- //

let typ = 4400.00;

let sav = 1000.00;
let hys = 8000.00;
let dbt = 300.00;

let equities = [sav, hys, dbt];
let equityNames = Array.from("sav hys dbt".split(" "));
const equityValues = equityNames.map(string => document.getElementById(string + "-equity-t"));
equityValues.forEach((e, i) => e.innerHTML = equities[i]);

let car = 0.00;
let nav = 0.00;
let sal = 884.15;
let ren = 200.00;
let rti = 0.00;
let ins = 70.81;
let loa = 300.00;
let wat = 0.00;
let ele = 0.00;
let int = 0.00;
let mus = 6.39;
let don = 10.00;
let gym = 25.05;

let expenses = [car, nav, sal, ren, rti, ins, loa, wat, ele, int, mus, don, gym];
let expenseNames = Array.from("car nav sal ren rti ins loa wat ele int mus don gym".split(" "));

const expenseValues = expenseNames.map(string => document.getElementById(string + "-cost-t"));
expenseValues.forEach((e, i) => e.innerHTML = expenses[i]);
let totalMonthlyExpenses = 0;

const preSavings = document.getElementById("pre-savings-t");
const lessSavings = document.getElementById("less-savings-t");
const remainder = document.getElementById("remainder-t");
const totalSavings = document.getElementById("total-savings-t");

// SHOULD PARSE FLOATS
// Might be better practice to focus on innerHTML as the js values may take precedence.
// The JS values are only for pre-population

function updateTemplate() {
	totalMonthlyExpenses = 0.00;

		for (let val of expenseValues) {
			totalMonthlyExpenses += parseFloat(val.innerHTML);
		}
		document.getElementById("total-monthly-expenses-t").innerHTML = totalMonthlyExpenses;
		preSavings.innerHTML = document.getElementById("paycheck-t").innerHTML - totalMonthlyExpenses;
		lessSavings.innerHTML = sav;
		remainder.innerHTML = preSavings.innerHTML - sav;
		totalSavings.innerHTML = hys + sav;

	// 	const newValues = expenseNames.map(string => document.getElementById(string + `-cost-${budgetItemKey}`));
	// for (let val of newValues) {
	// 	totalMonthlyExpenses += parseFloat(val.innerHTML);
	// }
}

updateTemplate(); 

// ----- VALUE EDITOR ----- //

let editor = 0;
let editing = false;
let itemEdited = "paycheck-t";
function valueEditor(budgetItemId) {
	if (!editing) {
		editing = true;
		const editorForm = document.createElement("form");
		editorForm.setAttribute("action", "#");
		// editorForm.setAttribute("onsubmit", "handle");
		const editorInput = document.createElement("input");
		editorInput.setAttribute("type", "text");
		editorInput.setAttribute("placeholder", "Edit value!");
		editorInput.setAttribute("onkeypress", "handle(event)");
		editorInput.setAttribute("id", "editor");
		editorForm.appendChild(editorInput);
		let budgetItem = document.getElementById(budgetItemId);
		budgetItem.appendChild(editorForm);
		budgetItem.value = editor;
	}
}

function handle(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		editor = document.getElementById("editor").value;
		console.log(editing);
		itemEdited.textContent = editor;
		editing = false;
		alert(editor);
		updateTemplate();
		// updatePaycard();
	}
}

function editMoneys() {
	document.querySelectorAll(".money-var").forEach(moneyVar => {
		moneyVar.onmouseenter = function() {
			moneyVar.classList.add("highlight");
		}
		moneyVar.onmouseleave = function() {
			moneyVar.classList.remove("highlight");
		}
		moneyVar.onclick = function() {
			itemEdited = document.getElementById(moneyVar.id);
			valueEditor(moneyVar.id);	
		}
			
	});
}
editMoneys();

// ----- PAYCARD GENERATOR AND RELOADER ----- //

function generatePaycheckValue(num){

	let span = document.createElement("span");
	span.setAttribute("class", "money-var");
	span.setAttribute("id", `paycheck-${num}`);
	span.innerHTML = typ;
	let li = document.createElement("li");
	let text = document.createTextNode("Paycheck: $");
	li.appendChild(text);
	li.appendChild(span);
	
	return li;
}

// can check for classLists 
function updatePaycard(num) {

	let paycardPaycheck = document.getElementById(`paycheck-${num}`).innerHTML;
	console.log(paycardPaycheck);
	let deductions = 0.00;
	for (let name of expenseNames) {
		deductions += parseFloat(document.getElementById(`${name}-cost-${num}`).innerHTML);
	}
	document.getElementById(`total-monthly-expenses-${num}`).innerHTML = deductions;
	let preSavings = document.getElementById(`pre-savings-${num}`).innerHTML;
	preSavings = paycardPaycheck - deductions;
	if (num === 1) {
		document.getElementById(`hys-equity-${num}`).innerHTML = hys;
	} else {
		const deposit = document.getElementById(`sav-equity-${num}`).innerHTML;
		const account = document.getElementById(`hys-equity-${num - 1}`).innerHTML; // from previous hys
		document.getElementById(`hys-equity-${num}`).innerHTML = parseFloat(deposit) + parseFloat(account);
		document.getElementById(`dbt-equity-${num}`).innerHTML = parseFloat(preSavings) - parseFloat(deposit);
	}
	
}

function generateExpenses(num) {
	let paycardExpenseTotal = 0.00;
	const hr1 = document.createElement("hr");
	const hr2 = document.createElement("hr");
	const targetPaycardList = document.getElementById(`paycard-list-${num}`);

	targetPaycardList.appendChild(generatePaycheckValue(num));

	targetPaycardList.appendChild(hr1);

	for (let i = 0; i < expenseNames.length; i++) {
		let span = document.createElement("span");
		span.setAttribute("class", "money-var");
		span.setAttribute("id", `${expenseNames[i]}-cost-${num}`);
		span.innerHTML = expenses[i];
		paycardExpenseTotal += expenses[i];
		let li = document.createElement("li");
		let text = document.createTextNode(expenseNames[i].toUpperCase() + ": $");
		li.appendChild(text);
		li.appendChild(span);
		targetPaycardList.appendChild(li);
		if (i === expenseNames.length - 1) {
			let span = document.createElement("span");
			span.setAttribute("id", `total-monthly-expenses-${num}`);
			span.innerHTML = paycardExpenseTotal;
			let li = document.createElement("li");
			li.setAttribute("class", "no-bullet");
			let text = document.createTextNode("Total Monthly Expenses: $");
			li.appendChild(text);
			li.appendChild(span);
			targetPaycardList.appendChild(li);
		}
	}

	targetPaycardList.appendChild(hr2);

	for (let i = 0; i < equityNames.length; i++) {

		if (i === 0) {
			let span = document.createElement("span");
			span.setAttribute("id", `pre-savings-${num}`);
			span.innerHTML = typ - paycardExpenseTotal;
			let li = document.createElement("li");
			li.setAttribute("class", "no-bullet");
			let text = document.createTextNode("Pre-Savings: $");
			li.appendChild(text);
			li.appendChild(span);
			targetPaycardList.appendChild(li);
		}
		let span = document.createElement("span");
		span.setAttribute("id", `${equityNames[i]}-equity-${num}`);
		if (equityNames[i] === "sav") {
			span.setAttribute("class", "money-var");
		}
		span.innerHTML = equities[i];
		let li = document.createElement("li");
		li.setAttribute("class", "no-bullet");
		let text = document.createTextNode(equityNames[i].toUpperCase() + ": $");
		li.appendChild(text);
		li.appendChild(span);
		targetPaycardList.appendChild(li);
	}

};

function generateTwelvePaycards(){
	let button = document.querySelector(".paycard-generator");
	button.onmouseleave = function() {
		ButtonInterface.buttonOnMouseLeave(button);
	}
	button.onmouseenter = function() {
		ButtonInterface.buttonOnMouseEnter(button);
	}
	button.onclick = function() {
		ButtonInterface.buttonOnClick(button);
		terminatePaycards();

		for (let i = 1; i < 13; i++) {
			generateExpenses(i);
			editMoneys();
		}
		console.log(button.value);
	}
}

generateTwelvePaycards();

function terminatePaycards() {
	for (let i = 1; i < 13; i++) {
		let paycardList = document.getElementById(`paycard-list-${i}`);
		while (paycardList.firstChild) {
			paycardList.removeChild(paycardList.lastChild);
		}
	}
}

// ---------- SUTRA UTILITY ---------- //

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

function initSutraList(){
	let option = document.createElement("option");
	let optionText = document.createTextNode("--- Select ---");
	option.appendChild(optionText);
	sutraOptions.appendChild(option);
	sutraLineOptions.appendChild(option);

	for(let i = 0; i < sutras.length; i++) {
		let option = document.createElement("option");
		option.value = i;
		let title = document.createTextNode(sutras[i].englishTitle);
		option.append(title);
		sutraOptions.appendChild(option);
	}
}
initSutraList();

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
initSutraLines(sutras[1]);

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
loadLineNumbers();

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

function enableSutraButtons(){
	document.querySelectorAll(".button-sutras").forEach(button => {
		button.onmouseleave = function() {
			ButtonInterface.buttonOnMouseLeave(button);
		}
		button.onmouseenter = function() {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onclick = function() {
			console.log(button.value);
			if (button.value === "next") {
				cycleSutraLines(true);
			} else {
				cycleSutraLines(false);
			}
			ButtonInterface.buttonOnClick(button);
		}
	});
}
enableSutraButtons();

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
