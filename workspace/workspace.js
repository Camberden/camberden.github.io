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
		e.onmouseenter = function() {
			e.classList.add("w-item-over");
		}
		e.onmouseleave = function() {
			e.classList.remove("w-item-over");
			e.classList.add("w-item-leave");
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
		editorInput.setAttribute("onsubmit", "updatePaycard(budgetItemId)");
		editorInput.setAttribute("id", "editor");
		editorForm.appendChild(editorInput);
		let budgetItem = document.getElementById(budgetItemId);
		budgetItem.appendChild(editorForm);
		budgetItem.value = editor;
	}
}

function handle(event) {
	if (event.keyCode === 13) {
		let num = itemEdited.id.toString().substring(itemEdited.id.toString().lastIndexOf("-") + 1, itemEdited.id.toString().length);
		event.preventDefault();
		editor = document.getElementById("editor").value;
		console.log(editing);
		itemEdited.textContent = editor;
		editing = false;
		alert(editor);
		updatePaycard(num);
		updateSavings(num);
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

// ---------- PAYCARD GENERATOR AND RELOADER ---------- //

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

function generateMonth(num) {
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let date = new Date();
	let month = date.getMonth() + num;
	let span = document.createElement("span");
	if (num > 11) {
		month -= 12;
	}
	span.innerHTML = months[month];
	let li = document.createElement("li");
	li.setAttribute("class", "no-bullet");
	li.appendChild(span);
	
	return li;
}

// can check for classLists 
function updatePaycard(num) {

	const paycardPaycheck = document.getElementById(`paycheck-${num}`).innerHTML;
	console.log(paycardPaycheck);
	let deductions = 0.00;
	for (let name of expenseNames) {
		deductions += parseFloat(document.getElementById(`${name}-cost-${num}`).innerHTML);
	}
	document.getElementById(`total-monthly-expenses-${num}`).innerHTML = deductions;
	console.log(deductions);
	document.getElementById(`pre-savings-${num}`).innerHTML = parseFloat(paycardPaycheck) - parseFloat(deductions);
	
}

function updateSavings(num) {
	for (let i = num; i < 13; i++) {
		let preSavings = document.getElementById(`pre-savings-${i}`).innerHTML;
		let deposit = document.getElementById(`sav-equity-${i}`).innerHTML;
		let account = document.getElementById(`hys-equity-${i}`).innerHTML;
		console.log(account);
		if (i > 1) {
			account = document.getElementById(`hys-equity-${i - 1}`).innerHTML; // from previous hys
		} else {
			account = hys;
		}
		document.getElementById(`hys-equity-${i}`).innerHTML = parseFloat(deposit) + parseFloat(account);
		document.getElementById(`dbt-equity-${i}`).innerHTML = parseFloat(preSavings) - parseFloat(deposit);
	}
}

function generateExpenses(num) {
	let paycardExpenseTotal = 0.00;
	const hr1 = document.createElement("hr");
	const hr2 = document.createElement("hr");
	const targetPaycardList = document.getElementById(`paycard-list-${num}`);
	
	targetPaycardList.appendChild(generateMonth(num));
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
		updateSavings(1);
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

// ---------- PENSION CALCULATOR UTILITY ---------- //

// TODO: lock in age and service, press up and down arrows to adjust.
// TODO: add monthly increments, perhaps.

function generatePensionTable() {
	const table = document.getElementById("pension-table");
	while (table.lastChild) {
		table.removeChild(table.lastChild);
	}
	let retirementAge = 60;
	let retirementService = 30;
	const reductionIncrements = [95, 90, 85, 80, 75, 70, 65, 60, 55, 52, 50];
	let reductionLow = 3; // 59 years

	for (let i = 0, j = 0; i < 11; i++) {
	
		let tr = document.createElement("tr");
		tr.setAttribute("id", `pension-row-${retirementAge}`);
		let th = document.createElement("th");
		th.setAttribute("id", `pension-age-${retirementAge}`);
		let text = document.createTextNode(retirementAge);
		th.appendChild(text);
		tr.appendChild(th);

		if (i === 0) {
			while (j < 10) {
				let th = document.createElement("th");
				th.setAttribute("id", `pension-service-${--retirementService}`);
				let text = document.createTextNode(retirementService);
				th.appendChild(text);
				tr.appendChild(th);
				j++
			}
			j = 0;
		} else {
			while (j < 10) {
				let td = document.createElement("td");
				td.setAttribute("id", `pension-age-${retirementAge}-service-${--retirementService}`);
				let reduction = reductionLow >= j ? reductionIncrements[j] : reductionIncrements[reductionLow];
				let text = document.createTextNode(reduction);
				td.appendChild(text);
				tr.appendChild(td);
				j++;
			}
			j = 0;
			reductionLow++;
			// Accounts for 52% for Age 53 @ 20 years of service.
			if (retirementAge === 53) {
				reductionIncrements[reductionLow - 1] = reductionIncrements[reductionLow]
			}
		}
		retirementService = 30;
		table.appendChild(tr);
		retirementAge--;
	}
	retirementAge = 60;
	retirementService = 30;
}
generatePensionTable();

function displayNotice(age, service) {
	const notice = document.getElementById("pension-notice");
	notice.textContent = "Hi!";


	if (age < 50) {
		notice.textContent = "Retirement must occur beyond at or beyond age 50.";
	} else if (service < 20) {
		notice.textContent = "Retirement must occur at or beyond 20 years of service.";
	} else if (age >= 60 || service >= 30) {
		notice.textContent = "Retirement at 60 years of age or 30 years of service is full in most cases (TBD).";
	}
}

function generatePension() {

	const pensionModifier =  0.0182;
	let retirementAge = document.getElementById("retirement-age").value;
	let serviceYears = document.getElementById("service-years").value;
	
	displayNotice(retirementAge, serviceYears);
	
	let fourSalariesAverage = 0.00;
	const fourSalaries = document.querySelectorAll(".salary-for-pension");
	for (let salary of fourSalaries) {
		fourSalariesAverage += parseFloat(salary.value);
	}
	fourSalariesAverage /= 4;
	const fullPension = (fourSalariesAverage * pensionModifier * 30).toFixed(2);
	document.getElementById("full-pension").innerHTML = fullPension;

	const partialPension = (fourSalariesAverage * pensionModifier * serviceYears).toFixed(2);
	document.getElementById("partial-pension").innerHTML = partialPension;

	const percentageReduction = document.getElementById(`pension-age-${retirementAge}-service-${serviceYears}`).innerHTML;
	document.getElementById("reduction-percentage").innerHTML = parseInt(percentageReduction);
	document.getElementById("reduction-amount").innerHTML = (partialPension - (partialPension * (percentageReduction / 100))).toFixed(2);
	const annualPension = (partialPension * (percentageReduction / 100)).toFixed(2);
	document.getElementById("annual-pension").innerHTML = annualPension;
	document.getElementById("monthly-pension").innerHTML = (annualPension / 12).toFixed(2);

	highlightPensionReduction(retirementAge, serviceYears);
	
}

function highlightPensionReduction(age, service) {
	document.querySelector(".pension-reduction-highlight").classList.remove("pension-reduction-highlight");
	let cell;
	if (age >= 60 || age < 50) {
		cell = document.getElementById("full-pension");
	} else if (service >= 30 || service < 20) {
		cell = document.getElementById("full-pension");
	} else {
		cell = document.getElementById(`pension-age-${age}-service-${service}`);
	}
	cell.classList.add("pension-reduction-highlight");
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
		console.log(ran1);
		console.log(syllables[ran1]);
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
console.log(residents[2]);


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

// a more detailed populateCells()
function loadCurrentInmates() {
	const cells = document.querySelectorAll(".cell-box");

	for (let i = 0; i < cells.length; i++) {
		createCellCard(cells[i], residents[i]);
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
