window.onload = () => console.log("Running!");

// ---------- GENERAL ITEM UTILITY ---------- //

const blockOne = document.getElementById("block-1");
const allButtons = document.querySelectorAll("button");
const itemSelectedDisplay = document.getElementById("item-title");
const itemList = document.getElementById("item-list");
const listOptions = document.getElementById("list-options");

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


const buttonNext1 = document.getElementById("button-next-1");
const buttonPrevious1 = document.getElementById("button-previous-1");

// Adds functionality to all buttons!
document.querySelectorAll("button").forEach(button => {
	button.onmouseleave = function() {
		button.classList.remove("button-highlight");
		button.classList.remove("button-hover");
		button.classList.remove("button-depressed");
	}
	button.onmouseenter = function() {
		button.classList.add("button-hover");
		button.classList.remove("button-highlight");
	}
	button.onclick = function() {
		console.log(button.value);
		if (button.value) {
			cycleItemArrays(true);
		} else {
			cycleItemArrays(false);
		}
		button.classList.add("button-highlight");
		button.classList.add("button-depressed");
		setTimeout(() => {
			button.classList.remove("button-depressed");
		  }, 100);
		};
})


// ---------- SUTRA UTILITY ---------- //

const sutraSelectedDisplay = document.getElementById("sutra-title");
const furiganaDisplay = document.getElementById("furigana-field");
const kanjiDisplay = document.getElementById("kanji-field");
const romajiDisplay = document.getElementById("romaji-field");
const interpretationDisplay = document.getElementById("interpretation-field");
const sutraList = document.getElementById("sutra-list");

// array [title][lines]
const robeChantRomaji = [
	"Takkesa no Ge", 
	[
		"dai zai ge da ppuku",
		"mu so fuku den e",
		"hi bu nyo rai kyo",
		"ko do sho shu jo",
	],
];

const robeChantFurigana = [
	"たっけさのげ", [
		"だい ざい だ っぷ く",
		"む そ ふく でん え",
		"ひ ぶ にょ らい きょ",
		"こ ど しょ しゅ じょ",
	]
];

const robeChantKanji = [
	"搭袈裟の偈", [
		"大哉解脱服",
		"無相福田衣",
		"披奉如來教",
		"廣度諸衆生",
	],
];

const robeChantInterpretation = [
	"Robe Chant", [
		"Great Robe of Liberation",
		"Field Far Beyond Form and Emptiness",
		"Wearing the Tatagatha's Teaching",
		"Saving All Beings",
	],
];

const sutrasSinoSanskritJapanese = [
	"搭袈裟の偈", [
		"大哉解脱服",
		"無相福田衣",
		"披奉如來教",
		"廣度諸衆生",
	],
	"摩訶般若波羅蜜多心經", [
		"觀自在菩薩",
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
	],
];

const sutrasRomaji = [
	"Takkesa no Ge", 
	[
		"dai zai ge da ppuku",
		"mu so fuku den e",
		"hi bu nyo rai kyo",
		"ko do sho shu jo",
	],
	"Maka Hanya Haramitta Shingyou", 
	[
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
	]
];

const sutrasFurigana = [
	"たっけさのげ", [
		"だい ざい だ っぷ く",
		"む そ ふく でん え",
		"ひ ぶ にょ らい きょ",
		"こ ど しょ しゅ じょ",
	],"まかはんやはらみったしんぎょう", [
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
		"おんりいっさい",
		"てんどうむそう",//something fishy here
		"くきょうねはん",
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
		"ぎゃて",
		"ぎゃて",
		"はらぎゃて",
		"はらそうぎゃて",
		"ぼじそわか",
		"はんにゃしんぎょう",
	],
];

const robeChant = [robeChantRomaji, robeChantFurigana, robeChantKanji, robeChantInterpretation];

let sutraLineLoaded = 1;
/**
 * @param {Array} romaji
 * @param {Array} furigana
 * @param {Array} kanji
 * @param {Array} interpretation
 */
function loadSutraContent (romaji, furigana, kanji, interpretation) {
	sutraSelectedDisplay.innerHTML = interpretation[0];
	// romajiDisplay.innerHTML = romaji[1][sutraLineLoaded]; // TO INCREMENT EACH LINE
	romajiDisplay.innerHTML = romaji[1];
	furiganaDisplay.innerHTML = furigana[1];
	kanjiDisplay.innerHTML = kanji[1];
	interpretationDisplay.innerHTML = interpretation[1];
}
loadSutraContent(robeChant[0], robeChant[1], robeChant[2], robeChant[3]);