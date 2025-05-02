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

const currentGroupingItem = document.getElementById("current-grouping-item");
const currentGroupingTotal = document.getElementById("current-grouping-total");

const jishoField = document.getElementById("jisho-field");
const jishoIFrame = document.getElementById("jisho-frame");

let selectedItemNumber = 0;
let activeModules = [];
let selectedModule;

const languageButtons = document.querySelectorAll(".language-button");

// ----- JAPANESE ----- //

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

// ----- EREMORAN ----- //

const testModuleEremoranVocabulary = [
	"numz",
	"rurauk",
	"uluk",
	"ad",
	"abat",
	"balitz",
	"eremor",
	"ômorz",
	"lusik",
	"morôz",
	"busk",
];

const testModuleErEn1 = [
	"to run",
	"cat",
	"black",
	"on/at/onto",
	"table",
	"to break",
	"Eremor (place)",
	"to know",
	"wolf",
	"to say",
	"dog",
];


// ----- LOGIC FUNCTIONS ----- //

const studyModules = [
	jp1 = new StudyModule(testModuleVocabulary, testModuleEnglish, "demo-jp-grouping", "jp"),
	er1 = new StudyModule(testModuleEremoranVocabulary, testModuleErEn1, "demo-er-grouping", "er"),
];

function loadModuleItem(module, itemNumber) {
	groupingField.textContent = module.grouping;
	vocabField.textContent = module.vocabulary[itemNumber];
	englishField.textContent = module.english[itemNumber];
	currentGroupingItem.textContent = itemNumber + 1;
	currentGroupingTotal.textContent = module.vocabulary.length;
}

function generateStudyModules(selectedLanguage) {

	while (activeModules.length) {
		activeModules.pop();
		console.log("Popping array.");
	}

	for (let studyModule of studyModules) {
		if (studyModule.language === selectedLanguage) {
			// if (studyModule.language === "er") {
			// 	vocabField.classList.add("eremoran-kiptascript");
			// }
			activeModules.push(studyModule);
		}
	}
	selectedModule = activeModules[0];
	loadModuleItem(selectedModule, selectedItemNumber);
}
generateStudyModules("jp");

function enableLanguageButtons(){
	languageButtons.forEach(button => {
		button.onclick = function(){
			ButtonInterface.buttonOnClick(button);
			switch (button.value) {
				case "japanese":
					if (activeModules.language != "jp") {
						generateStudyModules("jp");
					}
					break;
				case "eremoran":
					if (activeModules.language != "er") {
						generateStudyModules("er");
					}
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
enableLanguageButtons();
