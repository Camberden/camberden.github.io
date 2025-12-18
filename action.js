/** ===> CAMBERDEN.GITHUB.IO UPDATE ===>
 * @description Personal Website:
 * - From 2020 to Present
 * - Primary workspace of my programming hobby
 * @constant latestUpdate
 * - Date is changed for any first update completed on a new day.
 * @author Camberden (Chrispy | Kippi)
 */
const latestUpdate = "Thursday, December 18th, 2025";
document.querySelector("#latest-update").innerHTML = latestUpdate;
const splitDate = latestUpdate.split(" ");
/**
 * 
 * @param {string} month
 * @param {string} calendarDay
 * @param {string} year 
 * @returns date Object
 * @description Converts my chosen date format for update display into a date Object
 */
function convertDate(month, calendarDay, year){
	const convertedMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const convertedCalendarDay = calendarDay.replace(/[^0-9]/g, ' ');
	const convertedYear = parseInt(year);
	const date = new Date(convertedYear, convertedMonth.indexOf(month), parseInt(convertedCalendarDay));
	
	return date;
}
const formattedDate = convertDate(splitDate[1], splitDate[2], splitDate[3]);
/**
 * @param {Date} date
 * @description Converts date object to a Japanese date.
 */
function convertToJapaneseDate(date) {
	let japaneseDate = "最近アップデート令和";
	const kanjiNumbers = ["一", "二","三","四","五","六","七","八","九","十",];
		
	// ----- YEARS ----- //
	japaneseDate += (kanjiNumbers[date.getFullYear() - 2019] + "年");
	// ----- MONTHS ----- //
	if ((date.getMonth() + 1) > 10) {
		japaneseDate += kanjiNumbers[9] + (kanjiNumbers[date.getMonth() - 10] + "月");
	} else {
		japaneseDate += (kanjiNumbers[date.getMonth()] + "月");
	}

	// ----- DAYS ----- //
	console.log(date.getDate());
	if (date.getDate() > 30) {
		japaneseDate += kanjiNumbers[2] + kanjiNumbers[9] + (kanjiNumbers[(date.getDate() % 30) - 1] + "日");
	} else if (date.getDate() == 30) {
		japaneseDate += (kanjiNumbers[2] + kanjiNumbers[9] + "日");	
	} else if (date.getDate() > 20) {
		japaneseDate += kanjiNumbers[1] + kanjiNumbers[9] + (kanjiNumbers[(date.getDate() % 20) - 1] + "日");
	} else if (date.getDate() == 20) {
		japaneseDate += (kanjiNumbers[1] + kanjiNumbers[9] + "日");
	} else if (date.getDate() > 10) {
		japaneseDate += kanjiNumbers[9] + (kanjiNumbers[(date.getDate() % 10) - 1] + "日");
	} else if (date.getDate() == 10) {
		japaneseDate += (kanjiNumbers[9] + "日");
	} else {
		japaneseDate += (kanjiNumbers[date.getDate() - 1] + "日");
	}
	const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	const japaneseDaysOfWeek = ["月","火","水","木","金","土","日"];
	for (let i = 0; i < daysOfWeek.length; i++) {
		if (splitDate[0] === daysOfWeek[i]) {
			japaneseDate += "(" + japaneseDaysOfWeek[i] + ")";
		}
	}
	document.querySelector("#japanese-date").textContent = japaneseDate;

}
convertToJapaneseDate(formattedDate);

const camberden = document.querySelector("#camberden");
const monickers = ["camberden", "観葉伝", "カンバデン"];

function randomizeMonicker(){
	const m = Math.random();
	console.log(m);
	if (m <= 0.1) {
		camberden.lang = "jp";
		camberden.innerHTML = monickers[1];
	} else if (m >= 0.9) {
		camberden.lang = "jp";
		camberden.innerHTML = monickers[2];
	} else if (m < 0.9 && m >= 0.8) {
		camberden.removeAttribute("font-family");
		camberden.lang = "la-fonipa";
		camberden.innerHTML = monickers[0].replace("c", "k");
		camberden.classList.add("eremoran-kiptascript");
		camberden.setAttribute("style", "font-family: eremoran-kiptascript;");
	} 
	else {
		camberden.innerHTML = monickers[0];
	}
}
randomizeMonicker();

camberden.onclick = function(){
	alert("Hi! :D");
}
function generateSiteInfo() {
	const siteInfo = document.getElementById("site-info");
	siteInfo.innerHTML = `
	<p>	
		Welcome to camberden's personal page.<br>
		Here you will find music, musings,<br>
		and an assortment of software projects.<br>
		Whatever I place here is a reflection of my<br>
		lifestyle and workflow; its placement is meaningful<br>
		enough to me and is therefore justified.
	</p>
`
}
generateSiteInfo();

/**
 * [["var/var.html","Var Page"],],
 * @var
 * The section link: this is the directory name of the page linked.
 * @name
 * The section name to appear on the page.
 */
const sections = [
	["dashboard", "Personal Dashboard",],
	["workspace", "Coding Workspace",],
	["blog", "Blogging Page",],
	["language", "Language Resource",],
	["accounting", "Accounting Resource",],
	["travel", "Travel Page",],
	["lifecraft", "Lifecraft Page",],
	["musings", "Musings Page",],
	["fantasy", "Fantasyland"],
	["segregation", "Segregation"],
	["mainframe", "Mainframe"],
	["music", "Original Music",],
];
const sectionTitles = document.querySelectorAll(".section-title");
const sectionLinks = document.querySelector("#section-links");
/**
 * @var
 * Creates clickable link to directory.
 * @name
 * Creates h3 element with text link descriptor.
 */
function initSections() {
	sections.forEach(section => {

		const h3 = document.createElement("h3");
		h3.setAttribute("class", "section-title-text");
		h3.setAttribute("id", section[0]);
		const text = document.createTextNode(section[1]);
		h3.appendChild(text);

		const sectionDiv = document.createElement("div");
		sectionDiv.setAttribute("class", "section-title");
		sectionDiv.onclick = function () {
			document.location = section[0] + "/" + section[0] + ".html";
		};
		sectionDiv.appendChild(h3);
		sectionLinks.appendChild(sectionDiv);
	});
}
initSections();
