// ---------- GENERAL ITEM UTILITY ---------- //

const blockOne = document.getElementById("block-1");
const allButtons = document.querySelectorAll("button");
const itemSelectedDisplay = document.getElementById("item-title");
const itemList = document.getElementById("item-list");
const listOptions = document.getElementById("list-options");

function enableToyButtons() {
	document.querySelectorAll(".w-item").forEach(e => {
		e.onclick = function () {
			console.log(e.firstElementChild);
			switch (e.firstElementChild.id) {
				case ("pankair"):
					e.style.color = "green";
					break;
				case ("pankair-sw"):
					e.style.color = "green";
					break;
				case ("busmat"):
					e.style.color = "green";
					break;
				case ("elaor"):
					e.style.color = "blue";
					break;
				case ("nao"):
					e.style.color = "blue";
					break;
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

const navSections = document.querySelector("#nav-sections");

/**
 * @description Taken from action.js for nav test
 * Populates a site directory
 * 
 * @var
 * Creates clickable link to directory.
 * @name
 * Creates h3 element with text link descriptor.
 */
function initSections() {
	console.log("HELLOOOOO");
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
		sectionDiv.onmouseenter = function () {
			sectionDiv.classList.contains("section-highlight") ?
			sectionDiv.classList.add("section-highlight") :
			sectionDiv.classList.remove("section-lose-highlight");
			sectionDiv.classList.add("section-highlight")
			console.log("onmouseenter");
		}
		sectionDiv.onmouseleave = function () {
			sectionDiv.classList.contains("section-highlight") ?
			sectionDiv.classList.replace("section-highlight", "section-lose-highlight") :
			console.log("onmouseleave");
		}
		
	
		sectionDiv.appendChild(h3);
		navSections.appendChild(sectionDiv);
	});
}


function navAccess() {
	const nav = document.querySelector("#nav-access");
	nav.onclick = function() {
		if (! nav.classList.contains("nav-opened")) {
			initSections();
			nav.classList.add("nav-opened");
			nav.innerText = "Minimize";
		} else {
			navSections.innerHTML = "";
			nav.classList.remove("nav-opened");
			nav.innerText = "Navigation";
		}
	}
	nav.onmouseenter = function() {
		ButtonInterface.buttonOnMouseEnter(nav);
	}
	nav.onmouseleave = function() {
		ButtonInterface.buttonOnMouseLeave(nav);

	}
}

navAccess();
