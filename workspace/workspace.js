// ---------- GENERAL ITEM UTILITY ---------- //

const navSections = document.querySelector("#nav-sections");
const bookmarksLinks = document.querySelector("#bookmarks-links");

/**
 * [["var/var.html","Var Page"],],
 * @var
 * The section link: this is the directory name of the page linked.
 * @name
 * The section name to appear on the page.
 */
const sections = [
	["homepage", "Homepage ↺"],
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
const externalLinks = [
	["https://www.youtube.com/watch?v=XgqTrvcAySA", "Checkpoint"],
	["https://www.clozemaster.com", "Clozemaster"],
	["https://jisho.org", "Jisho"],
	["https://www3.nhk.or.jp/news/easy/", "NHK Yasashii"],
	["https://www.mheducation.com", "Coursework"],
	["https://maps.google.com", "Maps"],
	["https://int.dac.nc.gov", "Intranet"],
	["https://portal.osc.nc.gov/app", "Fiori"],
];
const bookmarks = externalLinks;

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
	sections.forEach(section => {

		const h3 = document.createElement("h3");
		h3.setAttribute("class", "section-title-text");
		h3.setAttribute("id", section[0]);
		const text = document.createTextNode(section[1]);
		h3.appendChild(text);

		const sectionDiv = document.createElement("div");
		sectionDiv.setAttribute("class", "section-title");
		sectionDiv.onclick = function () {
			section[0] != "homepage" ?
			document.location = "../" + section[0] + "/" + section[0] + ".html" :
			document.location = "../index.html";
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
function initBookmarks() {
	bookmarks.forEach(bookmark => {

		const a = document.createElement("a");
		a.setAttribute("class", "section-title-text");
		a.setAttribute("href", bookmark[0]);
		const text = document.createTextNode(bookmark[1]);
		a.appendChild(text);

		const bookmarkDiv = document.createElement("div");
		bookmarkDiv.setAttribute("class", "section-title");
	
		bookmarkDiv.onmouseenter = function () {
			bookmarkDiv.classList.contains("section-highlight") ?
			bookmarkDiv.classList.add("section-highlight") :
			bookmarkDiv.classList.remove("section-lose-highlight");
			bookmarkDiv.classList.add("section-highlight")
			console.log("onmouseenter");
		}
		bookmarkDiv.onmouseleave = function () {
			bookmarkDiv.classList.contains("section-highlight") ?
			bookmarkDiv.classList.replace("section-highlight", "section-lose-highlight") :
			console.log("onmouseleave");
		}
		
		bookmarkDiv.appendChild(a);
		bookmarksLinks.appendChild(bookmarkDiv);
	});
}

/**
 * @todo Make agnostic function for this:
 */
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
}
navAccess();

function bookmarksAccess() {

	const bookmarking = document.querySelector("#bookmarks-access");
	bookmarking.onclick = function() {
		if (! bookmarking.classList.contains("bookmarks-opened")) {
			initBookmarks();
			bookmarking.classList.add("bookmarks-opened");
			bookmarking.innerText = "Minimize";
		} else {
			bookmarksLinks.innerHTML = "";
			bookmarking.classList.remove("bookmarks-opened");
			bookmarking.innerText = "Bookmarks";
		}
	}
	bookmarking.onmouseenter = function() {
		ButtonInterface.buttonOnMouseEnter(bookmarking);
	}
	bookmarking.onmouseleave = function() {
		ButtonInterface.buttonOnMouseLeave(bookmarking);
	}
}
bookmarksAccess();


function initExternalLinks() {
	const externalLinkDiv = document.getElementById("external-links");

	externalLinks.forEach(link => {
		const a = document.createElement("a");
		const text = document.createTextNode(link[1]);
		a.appendChild(text);
		a.setAttribute("href", link[0]);
		a.setAttribute("target", "_blank");
		a.setAttribute("rel", "noopener noreferrer");
		a.setAttribute("class", "trigger");

		externalLinkDiv.appendChild(a);
	});
}
initExternalLinks();

function enableNeuButtons() {
	document.querySelectorAll(".neu-item").forEach(item => {
		item.onclick = function() {
			if (item.classList.contains("neu-item-depressed")) {
			item.classList.remove("neu-item-depressed");
			} else {
				item.classList.add("neu-item-depressed");
			}
		}
		item.onmouseenter = function() {
			item.classList.add("neu-item-highlight");
			console.log("hi");
		}

		item.onmouseleave = function() {
			item.classList.remove("neu-item-highlight");
			// if (item.classList.contains("neu-item-depressed")) {
			// item.classList.remove("neu-item-depressed");
			// }
		}
	});
}
enableNeuButtons();


const loremIpsum = (
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor lectus eget euismod scelerisque. Ut posuere sed turpis id finibus. Proin semper id metus efficitur condimentum. Duis rutrum mattis magna ultrices aliquam. Donec viverra nunc et libero molestie, quis faucibus diam pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et malesuada lorem. Proin tincidunt sodales odio, at molestie odio eleifend nec. Donec id sodales purus, ac cursus magna. Donec ac lacinia mi, in faucibus erat. Mauris blandit ipsum eget erat facilisis, eu ultrices quam ullamcorper. Mauris faucibus odio quis metus sagittis, sed dictum mi interdum. Nullam varius malesuada libero non rutrum. Maecenas mollis suscipit leo, ut tempor orci consectetur vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor lectus eget euismod scelerisque. Ut posuere sed turpis id finibus. Proin semper id metus efficitur condimentum. Duis rutrum mattis magna ultrices aliquam. Donec viverra nunc et libero molestie, quis faucibus diam pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et malesuada lorem. Proin tincidunt sodales odio, at molestie odio eleifend nec. Donec id sodales purus, ac cursus magna. Donec ac lacinia mi, in faucibus erat. Mauris blandit ipsum eget erat facilisis, eu ultrices quam ullamcorper. Mauris faucibus odio quis metus sagittis, sed dictum mi interdum. Nullam varius malesuada libero non rutrum. Maecenas mollis suscipit leo, ut tempor orci consectetur vitae."
);
const cheeseIpsum = (
	"Rubber cheese manchego everyone loves. Edam cheesecake chalk and cheese melted cheese cheesy feet camembert de normandie cheesecake who moved my cheese. Manchego manchego cheese on toast hard cheese st. agur blue cheese cheese strings pepper jack cut the cheese. Cow stinking bishop camembert de normandie when the cheese comes out everybody's happy. Cheddar brie pepper jack. Blue castello emmental edam port-salut parmesan mozzarella blue castello parmesan. Cheese on toast the big cheese emmental macaroni cheese cheeseburger parmesan cheese and wine port-salut. Who moved my cheese chalk and cheese goat dolcelatte."
);
const ipsumData = {
	"lorem-content": loremIpsum,
	"cheese-content": cheeseIpsum,
};

/**
 * 
 * @param {String} dummyString 
 */
function convertDummyText(dummyString) {
	dummyString.trim();
	return dummyString.split(".");
}

/**
 * @param {String} stringData
 * @param {HTMLElement} elementId 
 */
function dropdownAccessor(stringData, elementId) {
	const arrayData = convertDummyText(stringData);
	const dropdownDiv = document.getElementById(elementId);
	const ul = document.createElement("ul");
	arrayData.forEach(datum => {
		const text = document.createTextNode(datum.trim());
		const li = document.createElement("li");
		li.appendChild(text);
		ul.appendChild(li);
	});
	dropdownDiv.appendChild(ul);
}

function enableDropdowns (){
	document.querySelectorAll(".dropdown-access").forEach(accessor => {
		accessor.parentElement.onclick = function() {
			if (! accessor.classList.contains("dropdown-opened")) {
				console.log(accessor.id);
				dropdownAccessor(ipsumData[accessor.parentElement.nextElementSibling.id], accessor.parentElement.nextElementSibling.id);
				accessor.classList.add("dropdown-opened");
			} else {
				accessor.classList.remove("dropdown-opened");
				accessor.parentElement.nextElementSibling.innerHTML = "";
			}
		}
	});
}
enableDropdowns();

function activateChiron(texts) {
	document.getElementById("chiron-span").innerText = convertDummyText(texts)[Math.floor(Math.random() * convertDummyText(texts).length)];
}
// document.getElementById("chiron-span").style = "animation-duration: 2s;";

activateChiron(loremIpsum);
setInterval(() => {
	activateChiron(loremIpsum);
	document.getElementById("chiron-span").style = "animation-duration: 10s;";
}, 10000);
