window.onload = () => console.log("Running!");

/**
 * @param {string[]} vocabulary - contains 10 elements
 * @param {string[]} english - contains 10 elements
 * @param {string} grouping - topic
 * @param {string} language - language selected
 */
class StudyModule {
	constructor(vocabulary, english, grouping, language) {
		this.vocabulary = vocabulary;
		this.english = english;
		this.grouping = grouping;
		this.language = language;
	}
}

const groupingField = document.getElementById("grouping-field");
const vocabField = document.getElementById("vocab-field");
const englishField = document.getElementById("english-field");
const sentenceField = document.getElementById("sentence-field");
const jishoField = document.getElementById("jisho-field");
const jishoIFrame = document.getElementById("jisho-frame");

let selectedItemNumber = 0;
let activeModules = [];
let selectedModule;

const moduleButtons = document.querySelectorAll(".module-button");

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

const studyModules = [
	jp1 = new StudyModule(testModuleVocabulary, testModuleEnglish, "demo-grouping", "jp"),
];

function loadModuleItem(module, itemNumber) {
	groupingField.textContent = module.grouping;
	vocabField.textContent = module.vocabulary[itemNumber];
	englishField.textContent = module.english[itemNumber];
}

function generateStudyModules(selectedLanguage) {

	for (let studyModule of studyModules) {
		if (studyModule.language === selectedLanguage) {
			activeModules.push(studyModule);
		}
	}
	selectedModule = activeModules[0];
	loadModuleItem(selectedModule, selectedItemNumber);
}
generateStudyModules("jp");

function enableItemNavigationButtons(){
	moduleButtons.forEach(button => {
		button.onclick = function(){
			ButtonInterface.buttonOnClick(button);
			switch (button.value) {
				case "next":
					if (selectedItemNumber < selectedModule.vocabulary.length - 1) {
						selectedItemNumber++;
						loadModuleItem(selectedModule, selectedItemNumber);
					}
					break;
				case "previous":
					if (selectedItemNumber >= 1) {
						selectedItemNumber--;
						loadModuleItem(selectedModule, selectedItemNumber);
					}
					break;
				default:
					console.log(activeModules.length);
					break;
			}
		}
		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	}
	)
}
enableItemNavigationButtons();



// loadModule(studyModules[0]);

// TODO: remove
// const displaySuperScript = function (e){
// 	if (e.classList.contains("display-sup")) {
// 		e.classList.remove("display-sup");
// 	} else {
// 		e.classList.add("display-sup");
// 	}
// }

// parseFurigana(testModuleVocabulary[8]);
// Command [ and Command ] is Tab-Based Move
