window.onload = () => console.log("Running!");
const lastestUpdatePushed = "Friday September 27th, 2024";

// --- INFO AND ENTRYWAYS --- //

const latestUpdate = document.getElementById("latest-update");
latestUpdate.innerHTML = lastestUpdatePushed;

const camberden = document.querySelector("#camberden");
const monickers = ["camberden", "観葉伝", "カンバデン"];

function randomizeMonicker(){
	let m = Math.random();
	console.log(m);
	if (m < 0.1) {
		camberden.innerHTML = monickers[1];
	} else if (m > 0.9) {
		camberden.innerHTML = monickers[2];
	} else if (m < 0.9 && m > 0.8) {
		camberden.removeAttribute("font-family");
		camberden.innerHTML = monickers[0].replace("c", "k");
		camberden.classList.add("eremoran-kiptascript");
		camberden.setAttribute("style", "font-family: eremoran-kiptascript; font-size: 7rem;");
	} 
	else {
		camberden.innerHTML = monickers[0];
	}
}
randomizeMonicker();

camberden.onclick = function(){
	alert("Hi! :D");
}

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
	["jlpt", "JLPT Resource",],
	["accounting", "Accounting Resource",],
	["travel", "Travel Page",],
	["musings", "Musings Page",],
	["music", "Original Music",],
];

const sectionTitles = document.querySelectorAll(".section-title");
const sectionLinks = document.getElementById("section-links");

/**
 * @var
 * Creates clickable link to directory.
 * @name
 * Creates h3 element with text link descriptor.
 */
function initSections() {
for (let i = 0; i < sections.length; i++) {

	let h3 = document.createElement("h3");
	h3.setAttribute("class", "section-title-text");
	h3.setAttribute("id", sections[i][0]);
	let text = document.createTextNode(sections[i][1]);
	h3.appendChild(text);

	let sectionDiv = document.createElement("div");
	sectionDiv.setAttribute("class", "section-title");
	sectionDiv.onclick = function () {
		document.location = sections[i][0] + "/" + sections[i][0] + ".html";
	};
	sectionDiv.appendChild(h3);
	sectionLinks.appendChild(sectionDiv);
	}
}

initSections();