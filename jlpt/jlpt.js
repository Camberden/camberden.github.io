window.onload = () => console.log("Running!");

/**
 * @param {string[10]} vocabulary
 * @param {string[]} english
 * @param {string[]} sentences
 */
class StudyModule {
	constructor(vocabulary, furigana, english, sentences) {
		this.vocabulary = vocabulary;
		this.furigana = furigana;
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

let testModuleVocabulary = [
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


const kanjiField = document.getElementById("kanji-field");
const furiganaField = document.getElementById("furigana-field");
const vocabField = document.getElementById("vocab-field");

/**
 * 
 * @param {string[]} word 
 */
const loadModule = function(wordList) {
	wordList.forEach(word => {
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
}
loadModule(testModuleVocabulary);

const parseFurigana = function () {
	document.querySelectorAll("li").forEach(e => {
		e.onclick = function() {
			displaySuperScript(e.firstChild);
		}
	});
}
parseFurigana();

const displaySuperScript = function (e){
	if (e.classList.contains("display-sup")) {
		e.classList.remove("display-sup");
	} else {
		e.classList.add("display-sup");
	}
}

// parseFurigana(testModuleVocabulary[8]);
// Command [ and Command ] is Tab-Based Move
