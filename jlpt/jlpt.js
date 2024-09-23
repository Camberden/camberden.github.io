window.onload = () => console.log("Running!");

/**
 * @param {string[10]} vocabulary
 * @param {string[10]} english
 * @param {string[]} sentences
 */
class StudyModule {
	constructor(vocabulary, english, sentences) {
		this.vocabulary = vocabulary;
		this.english = english;
		this.sentences = sentences;
	}
}

// let demoModuleTen = [
// 	"",
// 	"",
// 	"",
// 	"",
// 	"",
// 	"",
// 	"",
// 	"",
// 	"",
// 	"",
// ];

const testModuleVocabulary = [
	"記載「きさい」する",
	"情報「じょうほう」",
	"客室乗務員「きゃくしつじょうむいん」",
	"知「し」らせる",
	"示「しめ」し",
	"筋「すじ」が通「とう」る",
	"並「なら」べる",
	"食卓「しょくたく」",
	"姿勢「しせい」を正「ただす」す",
	"夜間「やかん」",
];

const testModuleEnglish = [
	"to mention (in a document); a record, an entry, a statement",
	"information; news; report",
	"flight attendant",
	"to notify; to advise; to inform",
	"a lesson; discipline; an (bad or good) example",
	"to make sense; to be consistent; to be logical",
	"to line up; to enumerate; to be equal to",
	"dining table",
	"to straighten oneself",
	"nighttime",
];

const testModuleSentences = [
	"姿勢を正して、食卓の上にボウルを並べた。"
];

const studyModules = [
	m1 = new StudyModule(testModuleVocabulary, testModuleEnglish, testModuleSentences),
];
const vocabField = document.getElementById("vocab-field");
const englishField = document.getElementById("english-field");
const sentenceField = document.getElementById("sentence-field");
const jishoField = document.getElementById("jisho-field");
const jishoIFrame = document.getElementById("jisho-frame");

/**
 * @param {StudyModule} module 
 */
const loadModule = function(module) {
	module.vocabulary.forEach(word => {
		let li = document.createElement("li");
		let sup = document.createElement("sup");
		let splitWord = word.match(/「(.*?)」/g);
		let kanjiText = document.createTextNode(word.replaceAll(/「(.*?)」/g, ""));

		splitWord.forEach(e => {
			e = e.replace("「", "・");
			e = e.replace("」", "");
			let furiganaText = document.createTextNode(e);
			sup.appendChild(furiganaText);
			li.appendChild(sup);
		});
		li.appendChild(kanjiText);
		vocabField.appendChild(li);
	});

	module.english.forEach(word => {
		let li = document.createElement("li");
		let text = document.createTextNode(word);
		li.appendChild(text);
		englishField.appendChild(li);
	});

	module.sentences.forEach(sentence => {
		let li = document.createElement("li");
		let text = document.createTextNode(sentence);
		li.appendChild(text);
		sentenceField.appendChild(li);
	});
}
loadModule(studyModules[0]);

const parseFurigana = function () {
	document.querySelectorAll("#vocab-field > li").forEach(e => {
		e.onclick = function() {
			// displaySuperScript(e.firstChild);
			let text = e.lastChild.textContent;
			navigator.clipboard.writeText(text);
			alert("Copied: " + text);
		}
	});
}
parseFurigana();

// TODO: remove
const displaySuperScript = function (e){
	if (e.classList.contains("display-sup")) {
		e.classList.remove("display-sup");
	} else {
		e.classList.add("display-sup");
	}
}

// parseFurigana(testModuleVocabulary[8]);
// Command [ and Command ] is Tab-Based Move
