/** ===> CAMBERDEN.GITHUB.IO UPDATE ===>
 * @description Personal Website:
 * - From 2020 to Present
 * - Primary workspace of my programming hobby
 * @constant latestUpdate
 * - Date is changed for any first update completed on a new day.
 * @author Camberden (Chrispy | Kippi)
 */
import { CMBRdb } from "./cmbr-db.js";
const latestUpdate = "Saturday, February 21st, 2026";
document.querySelector("#latest-update").innerHTML = latestUpdate;
const camberden = document.querySelector("#camberden");
const monickers = ["camberden", "観葉伝", "カンバデン"];

/**
 * 
 * @param {string} month
 * @param {string} calendarDay
 * @param {string} year 
 * @returns date Object
 * @description Converts my chosen date format for update display into a date Object
 */
const convertDate = (month, calendarDay, year) => {
	const convertedMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const convertedCalendarDay = calendarDay.replace(/[^0-9]/g, ' ');
	const convertedYear = parseInt(year);
	const date = new Date(convertedYear, convertedMonth.indexOf(month), parseInt(convertedCalendarDay));
	return date;
}
/**
 * 
 * @param {String} update 
 * @returns {Date} Formatted Date
 */
const formatter = (update) => { const x = update.split(" "); return convertDate(x[1], x[2], x[3]); }
/**
 * @param {Date} date
 * @description Converts date object to a Japanese date.
 */
const convertToJapaneseDate = (date) => {
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
		if (date[0] === daysOfWeek[i]) {
			japaneseDate += "(" + japaneseDaysOfWeek[i] + ")";
		}
	}
	document.querySelector("#japanese-date").textContent = japaneseDate;
}
const randomizeMonicker = () => {
	const m = Math.random();
	if (m <= 0.2) {
		camberden.lang = "jp";
		camberden.setAttribute("style", "font-family: Yusei Magic;");
		camberden.innerHTML = monickers[1];
	} else if (m <= 0.4) {
		camberden.lang = "jp";
		camberden.setAttribute("style", "font-family: Yusei Magic;");
		camberden.innerHTML = monickers[2];
	} else if (m <= 0.6) {
		camberden.removeAttribute("font-family");
		camberden.lang = "la-fonipa";
		camberden.innerHTML = monickers[0].replace("c", "k");
		camberden.classList.add("eremoran-kiptascript");
		camberden.setAttribute("style", "font-family: eremoran-kiptascript;");
	} else {
		camberden.innerHTML = monickers[0];
	}
}
const randomizePhotos = () => {
	const infoDivBackground = document.getElementById("info-div-background");
	infoDivBackground.style.animationPlayState = "paused";
	const m = Math.random();
	infoDivBackground.style.animationPlayState = "running";
	let photoIndex = Math.round(m.toFixed(2) * 100);
	if (photoIndex > 75) {
		photoIndex -= 75;
	} else if (photoIndex > 50) {
		photoIndex -= 50;
	} else if (photoIndex > 25) {
		photoIndex -= 25;
	} else {
		photoIndex = photoIndex;
	}
	photoIndex < 1 ? randomizePhotos : infoDivBackground.style.backgroundImage = `url(assets/travel-photos/photo-nc-us-${photoIndex}.jpeg)`;
}
const jsonAndDatabaseDemo = async () => {
	connectCMBRjson("cmbr");
	const q = await CMBRdb.querySelect();
	console.log(q[0].title);
}
const queryButtonDemonstrator = async () => {

	const identity = await CMBRdb.identify();
	console.log(identity);
	// const auth = await CMBRdb.verify();
	// console.log(auth);
	const button1 = document.createElement("button");
	button1.setAttribute("id", "query-select-all");
	button1.appendChild(document.createTextNode("Query Select All"));
	const button2 = document.createElement("button");
	button2.setAttribute("id", "query-insert");
	button2.appendChild(document.createTextNode("Query Insert"));
	
	document.getElementById("page-info").appendChild(button1);
	document.getElementById("page-info").appendChild(button2);

	document.getElementById("query-select-all").onclick = async function() {
		const sel = await CMBRdb.querySelect();
		document.getElementById("page-info").appendChild(document.createTextNode(sel[0].location));
	}
	document.getElementById("query-insert").onclick = async function() {
		const sel = await CMBRdb.queryInsertPost();
		console.log(sel);
	}
}

(async () => {

	CMBRutil.actionsProvided("sections");
	randomizeMonicker();
	convertToJapaneseDate(formatter(latestUpdate));
	randomizePhotos();
	const slideshow = setInterval(()=> {
		randomizePhotos();
	}, 10000);
	
})();