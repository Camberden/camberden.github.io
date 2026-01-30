/* ===== CMBR.JS PERSONAL UTILITIES ===== */
	
/** 
 * @description Site map links.
 * [["var/var.html","Var Page"],],
 * @var
 * The section link: this is the directory name of the page linked.
 * @name
 * The section name to appear on the page.
 */
const sections = [
	["homepage", "Homepage ↺"],
	["dashboard", "Personal Dashboard"],
	["workspace", "Coding Workspace"],
	["blog", "Blogging Page"],
	["language", "Language Resource"],
	["accounting", "Accounting Resource"],
	["travel", "Travel Page"],
	["lifecraft", "Lifecraft Page"],
	["musings", "Musings Page"],
	["fantasy", "Fantasyland"],
	["segregation", "Segregation"],
	["mainframe", "Mainframe"],
	["music", "Original Music"],
	["anki", "Anki Page (WIP)"],
];

const bookmarks = [
	["https://www.youtube.com/watch?v=XgqTrvcAySA", "Checkpoint"],
	["https://www.clozemaster.com", "Clozemaster"],
	["https://jisho.org", "Jisho"],
	["https://www3.nhk.or.jp/news/easy/", "NHK Yasashii"],
	["https://www.mheducation.com", "Coursework"],
	["https://maps.google.com", "Maps"],
	["https://wd108.myworkday.com/wday/authgwy/nc/login.html", "Internal Jobs"],
	["https://int.dac.nc.gov", "Intranet"],
	["https://portal.osc.nc.gov/app", "Fiori"],
];

/**
 * @description Site-specific links config
 * @readonly
 * @global
 */
const baseHyperlinks = [
	"https://camberden.com/",
	"https://camberden.github.io/",
	"http://127.0.0.1:" + document.location.port,
	"http://localhost:" + document.location.port,
	"http://localhost:" + document.location.port + "/index.html",
];

/**
 * @description - Reads site index URL and provides
 * gateway for development servers and all
 * configured domains
 * @readonly
 * @global
 * @returns {Boolean} boolean
 */
const atSiteIndex = () => {
	if (document.location.origin === "file://" && document.location.href.endsWith("index.html")) {
		return true;
	} else if (baseHyperlinks.includes(document.location.href)) {
		return true;
	} else if (document.location.href.endsWith("index.html")) {
		return true;
	} else if (document.location.href.endsWith(document.location.port) || document.location.href.endsWith(document.location.port + "/")) {
		return true;
	} else if (document.location.href.includes(baseHyperlinks[0])) {
		return false;
	} else {
		return false;
	}
}

/**
 * @description Personal Utilities:
 * - Formally buttons.js.
 * - Primary global JavaScript handler
 * - for personal projects
 * @interface
 * @global
 * @author Camberden (Chrispy | Kippi)
 */
const CMBRutil = {

	buttonOnMouseEnter: function (button) {
		button.classList.add("button-highlight");
	},

	buttonOnMouseLeave: function (button) {
		button.classList.remove("button-highlight");
		if (button.classList.contains("button-depressed")) {
			button.classList.remove("button-depressed");
		}
	},

	buttonOnClick: function (button) {
		button.classList.add("button-highlight");
		button.classList.add("button-depressed");
		setTimeout(() => {
			button.classList.remove("button-depressed");
		}, 100);
	},

	/**
	 * @description Handles an individual form element, preventing default (reloading) upon submission
	 * @param {Event} event 
	 */
	handle: function (event) {
		event.preventDefault();
	},

	/**
	 * 
	 * @param {HTMLElement} target
	 * @param {Array} data 
	 */
	initSections: function (target, data) {

		target = document.querySelector("." + target);
		data.forEach(section => {

			const tag = atSiteIndex() ? document.createElement("h3") : document.createElement("span");
			tag.setAttribute("id", section[0]);
			const text = document.createTextNode(section[1]);
			tag.appendChild(text);

			const sectionDiv = document.createElement("div");
			sectionDiv.setAttribute("class", "section-title");
			sectionDiv.onclick = function () {
				// FOR INDEX =====>
				if (document.location.href.includes("index.html") || window.location.pathname === "/") {
					document.location = section[0] + "/" + section[0] + ".html";
				// FOR DROPDOWN =====>
				} else if (section[0] === data[0][0]) {
					document.location = "../" + "index.html";
				} else {
					document.location = "../" + section[0] + "/" + section[0] + ".html";
				}
			};
			sectionDiv.onmouseenter = function () {
				sectionDiv.classList.contains("section-highlight") ?
				sectionDiv.classList.add("section-highlight") :
				sectionDiv.classList.remove("section-lose-highlight");
				sectionDiv.classList.add("section-highlight");
			}
			sectionDiv.onmouseleave = function () {
				sectionDiv.classList.contains("section-highlight") ?
				sectionDiv.classList.replace("section-highlight", "section-lose-highlight") :
				console.log("onmouseleave");
			}
			sectionDiv.appendChild(tag);
			target.appendChild(sectionDiv);
		});
	},

	/**
	 * 
	 * @param {HTMLElement} target
	 * @param {Array} data 
	 */
	initBookmarks: function (target, data) {

				target = document.querySelector("." + target);
				data.forEach(bookmark => {

					const a = document.createElement("a");
					// a.setAttribute("class", "section-title-text");
					a.setAttribute("href", bookmark[0]);
					a.setAttribute("target","_blank");
					const text = document.createTextNode(bookmark[1]);
					a.appendChild(text);
					const bookmarkDiv = document.createElement("div");
					bookmarkDiv.setAttribute("class", "section-title");

					bookmarkDiv.onmouseenter = function () {
						bookmarkDiv.classList.contains("section-highlight") ?
						bookmarkDiv.classList.add("section-highlight") :
						bookmarkDiv.classList.remove("section-lose-highlight");
						bookmarkDiv.classList.add("section-highlight");
						console.log("onmouseenter");
					}
					bookmarkDiv.onmouseleave = function () {
						bookmarkDiv.classList.contains("section-highlight") ?
						bookmarkDiv.classList.replace("section-highlight", "section-lose-highlight") :
						console.log("onmouseleave");
					}
					bookmarkDiv.appendChild(a);
					target.appendChild(bookmarkDiv);
				});
	},

	/**
	 * 
	 * @param {HTMLElement} target 
	 * @param {String} name  
	 * @returns 
	 */
	actionsProvided: function (name) {
		
		let access = "";
		switch (name) {
			case "sections" :
				if (atSiteIndex()) {
					sections.splice(0, 1);
					CMBRutil.initSections(`${name}-links`, sections);
					break;
				} 
				access = document.querySelector("#sections-access");
				access.onclick = function() {
				if (! access.classList.contains("sections-opened")) {
					CMBRutil.initSections(`${name}-links`, sections);
					access.classList.add("sections-opened");
					access.innerText = "Minimize";
				} else {
					document.querySelector(`.${name}-links`).innerHTML = "";
					access.classList.remove("sections-opened");
					access.innerText = "Navigation";
				}
			}
				break;
			case "bookmarks" :
				access = document.getElementById("bookmarks-access");
				access.onclick = function() {
				if (! access.classList.contains("bookmarks-opened")) {
					CMBRutil.initBookmarks(`${name}-links`, bookmarks);
					access.classList.add("bookmarks-opened");
					access.innerText = "Minimize";
				} else {
					document.querySelector(`.${name}-links`).innerHTML = "";
					access.classList.remove("bookmarks-opened");
					access.innerText = "Bookmarks";
				}
			}
				break;
			default :
				console.log("Default triggered; neither sections nor bookmarks!");
			break;	
		}
	}
}

const displayPageInfo = (info) => {
	const data = (Array.from(info.split("."))).map(str => str.trim()); 
	data.pop();

	data.forEach(s => {
		const p = document.createElement("p");
		const text = document.createTextNode(s + ".");
		p.appendChild(text);
		p.appendChild(document.createElement("br"));
		document.getElementById("page-info").appendChild(p);
	});
}

/**
 * 
 * @param {HTMLElement[]} buttons 
 * @param {Boolean} includeClick
 */
function wireDefaultButtons(buttons, includeClick) {
	buttons.forEach(button => {
		button.onmouseenter = () => {
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			CMBRutil.buttonOnMouseLeave(button);
		}
		if (includeClick) {
			button.onclick = () => {
				CMBRutil.buttonOnClick(button);
			}
		}
	});
}

/**
 * @description Handles all page forms, preventing reload upon form submission
 * @param {boolean} configured - Toggle boolean for default (reloading) prevention
 * - CONFIGURED: Applies current form submission handling and default prevention
 * - NONCONFIGURED: Returns page to normal form submission reloading
 * @fires CMBRutil#handle - Applies the function individually to each form element
 * @fires window#onload - Fires immediately if cmbr.js is linked
 * @global
 */
function camberdenConfig(configured) {
	window.onload = function () {
		if (configured) {
			console.log("Running and configured!");
			const forms = document.querySelectorAll("form");
			forms.forEach(form => {
				form.addEventListener("submit", CMBRutil.handle);
			});
		} else {
			console.log("Running! (configuration disabled)");
		}

	}
}

// ----- GLOBAL FUNCTION EXPRESSION INVOKATIONS ----- //
const recognizeFileProtocol = () => { document.location.protocol === "file:" ? document.getElementById("anki").innerHTML += `<pre style="font-size: 0.5rem; color: red;">[disabled in file protocol]</pre>` : console.log(); }
const initNav = () => { CMBRutil.actionsProvided("sections"); CMBRutil.actionsProvided("bookmarks"); }
const displaySite = () => { document.getElementById("current-site").innerHTML = document.location.host };
const displaySection = () => { document.getElementById("current-section").innerHTML = (window.location.pathname).slice(window.location.pathname.lastIndexOf("/") + 1, -5).toLowerCase(); };
const sout = (x) => { console.log("|=====> " + (x ?? " ") + " ")  ; console.log("|=====* "); }
const braft = (l) => document.querySelector(`${l}`).appendChild(document.createElement("br"));