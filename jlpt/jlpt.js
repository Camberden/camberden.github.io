window.onload = () => console.log("Running!");

/**
 * @param {string[]} vocabulary
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


/**
 * 
 * @param {string} word 
 */
const parseFurigana = function (word){

}



const kanjiField = document.getElementById("kanji-field");
const furiganaField = document.getElementById("furigana-field");

/**
 * 
 * @param {string[]} word 
 */
const loadModule = function(wordList) {
	wordList.forEach(word => {
		let splitWord = word.match(/「(.*?)」/g);
		kanjiField.innerHTML += word.replaceAll(/「(.*?)」/g, "");

		splitWord.forEach(e => {
			e = e.replace("「", "");
			e = e.replace("」", "");
			furiganaField.innerHTML += e;
		});
		furiganaField.innerHTML += "<br>";
		kanjiField.innerHTML += "<br>"
	});
}
loadModule(testModuleVocabulary);

// parseFurigana(testModuleVocabulary[8]);
// Command [ and Command ] is Tab-Based Move
