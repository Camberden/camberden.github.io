/** === CMBR.JS: GLOBAL PERSONAL UTILITIES ===>
 * @fileOverview Camberden's general site utility toolkit.
 * @interface CMBRutil
 * @author Camberden (Chrispy | Kippi)  
 */ 
// htmx.config.selfRequestsOnly = false;
/** 
 * @description Site Map Links
 * @readonly
 * @kind linkArray
 * @var {String} section: this is the directory name of the page linked.
 * @var {String} sectionPageName: the name to appear on the page.
 * @example [["section/section.html","SectionPageName"],],
 */
const sections = [
	["homepage", "Homepage ↺"],
	["dashboard", "Personal Dashboard"],
	// ["workspace", "Coding Workspace"],
	// ["anki", "Anki & Notes Depository"],
	["depository", "HTMX & Alpine Depot"],
	["blog", "Blogging Page"],
	// ["language", "Language Resource"],
	// ["accounting", "Accounting Resource"],
	["travel", "Travel Page"],
	["lifecraft", "Lifecraft Page"],
	["musings", "Musings Page"],
	// ["fantasy", "Fantasyland"],
	// ["segregation", "Segregation"],
	// ["mainframe", "Mainframe"],
	["music", "Original Music"],
];

/** 
 * @description Links to Frequented External Sites
 * @readonly
 * @kind linkArray
 * @var {String} section: this is the directory name of the page linked.
 * @var {String} sectionPageName: the name to appear on the page.
 * @example [["section/section.html","SectionPageName"],],
 */
const bookmarks = [
	["https://www.youtube.com/watch?v=XgqTrvcAySA", "Checkpoint"],
	["https://ankiweb.net/", "Anki Web"],
	["https://www.clozemaster.com", "Clozemaster"],
	["https://jisho.org", "Jisho"],
	["https://www3.nhk.or.jp/news/easy/", "NHK Yasashii"],
	["https://account.cengage.com/login?", "Coursework"],
	["https://maps.google.com", "Maps"],
	["https://wd108.myworkday.com/wday/authgwy/nc/login.html", "Internal Jobs"],
	["https://int.dac.nc.gov", "Intranet"],
	["https://portal.osc.nc.gov/app", "Fiori"],
	["https://alpinejs.dev/components", "Alpine Components"],
];

/** @global @readonly @description Determines the Site's Port Number */
const basePort = document.location.port.length ? document.location.port : "";

/** @global @readonly @description Site-specific Links Configuration */
const baseHyperlinks = [
	"https://camberden.com/",
	"https://camberden.github.io/",
	"http://127.0.0.1:" + basePort,
	"http://localhost:" + basePort,
	"http://localhost:" + basePort + "/index.html",
];

/**
 * @global @public @interface
 * @description - Camberden Personal Utilities:
 * Formally buttons.js, a Global JavaScript Handler
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
	 * @description Handles all page forms, preventing reload upon form submission
	 * @param {boolean} configured - Toggle boolean for default (reloading) prevention
	 * - CONFIGURED: Applies current form submission handling and default prevention
	 * - NONCONFIGURED: Returns page to normal form submission reloading
	 * @fires window#onload - Fires immediately if cmbr.js is linked
	 * @global
	 */
	handleFormDefault(configured) {
		window.onload = function () {
			if (configured) {
				console.log("Running and configured!");
				document.querySelectorAll("form").forEach(form => {
					form.addEventListener("submit", (e)=> {e.preventDefault(); });
				});
			} else {
				console.log("Running! (configuration disabled)");
			}
		}
	},
	/**
	 * 
	 * @param {HTMLElement} target
	 * @param {String[][]} linkArray 
	 */
	initSections: function (target, linkArray) {

		target = document.querySelector("." + target);
		linkArray.forEach(section => {
			const tag = this.atSiteIndex() ? document.createElement("h3") : document.createElement("span");
			tag.setAttribute("id", section[0]);
			const text = document.createTextNode(section[1]);
			tag.appendChild(text);

			const sectionDiv = document.createElement("div");
			sectionDiv.setAttribute("class", `${Object.keys({section}).toString()}-title`);
			sectionDiv.onclick = function () {
				// FOR INDEX =====>
				if (document.location.href.includes("index.html") || window.location.pathname === "/") {
					window.location = section[0] + "/" + section[0] + ".html";

				
				// FOR DROPDOWN =====>
				} else if (section[0] === linkArray[0][0]) {
					window.location = "../" + "index.html";
				} else {
					window.location = "../" + section[0] + "/" + section[0] + ".html";
				}
			};
			sectionDiv.onmouseenter = function () {
				sectionDiv.classList.contains("section-highlight") ?
				sectionDiv.classList.add("section-highlight") :
				sectionDiv.classList.remove("section-lose-highlight"); sectionDiv.classList.add("section-highlight");
			}
			sectionDiv.onmouseleave = function () {
				if (sectionDiv.classList.contains("section-highlight")) {
					sectionDiv.classList.replace("section-highlight", "section-lose-highlight");
				}
			}
			sectionDiv.appendChild(tag);
			target.appendChild(sectionDiv);
		});
	},
	/**
	 * 
	 * @param {HTMLElement} target
	 * @param {String[][]} linkArray Array of Accessible Links and Their Names
	 */
	initBookmarks: function (target, linkArray) {

				target = document.querySelector("." + target);
				linkArray.forEach(bookmark => {

					const a = document.createElement("a");
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
					}
					bookmarkDiv.onmouseleave = function () {
						if (bookmarkDiv.classList.contains("section-highlight")) {
							bookmarkDiv.classList.replace("section-highlight", "section-lose-highlight");
						}
					}
					bookmarkDiv.appendChild(a);
					target.appendChild(bookmarkDiv);
				});
	},
	/**
	 * @param {String} linkArrayName 
	 */
	actionsProvided: function (linkArrayName) {
		
		let access = "";
		switch (linkArrayName) {
			case "sections" :
				if (this.atSiteIndex()) {
					sections.splice(0, 1);
					basePort === "4240" ? (()=>{sections.push(["administration", "Administration"]); sout("Express Development Server @ " + document.location.host); setTimeout(()=>{ document.getElementById("administration").setAttribute("style", "display:block;")}, 2000 )})() : console.clear();
					CMBRutil.initSections(`sections-links`, sections);
					break;
				} 
				access = document.querySelector("#sections-access");
				access.onclick = function() {
				if (! access.classList.contains("sections-opened")) {
					CMBRutil.initSections(`sections-links`, sections);
					access.classList.add("sections-opened");
					access.innerText = "Minimize";
				} else {
					document.querySelector(`.sections-links`).innerHTML = "";
					access.classList.remove("sections-opened");
					access.innerText = "Navigation";
				}
			}
				break;
			case "bookmarks" :
				access = document.getElementById("bookmarks-access");
				access.onclick = function() {
				if (! access.classList.contains("bookmarks-opened")) {
					CMBRutil.initBookmarks(`bookmarks-links`, bookmarks);
					access.classList.add("bookmarks-opened");
					access.innerText = "Minimize";
				} else {
					document.querySelector(`.bookmarks-links`).innerHTML = "";
					access.classList.remove("bookmarks-opened");
					access.innerText = "Bookmarks";
				}
			}
				break;
			default :
				console.log("Default triggered; neither sections nor bookmarks!");
			break;	
		}
	},
	/** @returns {Boolean} `true` if file:// protocol | `false` otherwise */
	acceptableProtocol: function() {
		if (document.location.protocol === "file:") {
			// console.log("<‰ File Protocol Detected ‰>");
			return false;
		} else {
			// console.log("<‰ CORS Acceptable Protocol Detected ‰>");
			return true;
		}
	},
	/** @global @readonly @returns {Boolean} boolean @description Reads site index URL and provides gateway for development servers and all configured domains */
	atSiteIndex: function () {
	if (this.acceptableProtocol() && document.location.href.endsWith("index.html")) {
		return true;
	} else if (baseHyperlinks.includes(document.location.href)) {
		return true;
	} else if (document.location.href.endsWith("index.html")) {
		return true;
	} else if (document.location.href.endsWith(document.location.port + "/")) {
		return true;
	} else if (document.location.href.includes(baseHyperlinks[0])) {
		return false;
	} else {
		return false;
	}
	},
	/** @param {String} info */
	displayPageInfo: function (info) {
		const data = (Array.from(info.split("."))).map(str => str.trim()); 
		data.pop();
		data.forEach(s => {
			const p = document.createElement("h2");
			const text = document.createTextNode(s + ".");
			p.appendChild(text);
			p.appendChild(document.createElement("br"));
			document.getElementById(`page-info`).appendChild(p);
		});
	},
	/**
	 * 
	 * @param {HTMLElement[]} buttons 
	 * @param {Boolean} includeClick
	 */
	wireDefaultButtons: function () {
		document.querySelectorAll("button").forEach(button => {
			button.onmouseenter = () => {
				this.buttonOnMouseEnter(button);
			}
			button.onmouseleave = () => {
				this.buttonOnMouseLeave(button);
			}
			button.onclick = () => {
				this.buttonOnClick(button);
				sout(button.id);
				if (button.id = "sparkle") {
					button.textContent = "✨sparkle✨"
					setTimeout(() => {
						button.textContent = "sparkle";
					}, 3000);
				}
			};
		});
	}
}

// ----- GLOBAL FUNCTION EXPRESSION INVOKATIONS ----- //
const recognizeFileProtocol = (x) => { y = document.getElementById(x); CMBRutil.acceptableProtocol() ? y.innerHTML += " &check;" : y.innerHTML += `<span style="font-size: 0.8rem; color: red; position: absolute;">[lesser functionality in file protocol]</span>`; }
const initNav = () => { CMBRutil.actionsProvided("sections"); CMBRutil.actionsProvided("bookmarks"); }
const displaySite = () => { document.getElementById("current-site").innerHTML = document.location.host };
const displaySection = () => { document.getElementById("current-section").innerHTML = (window.location.pathname).slice(window.location.pathname.lastIndexOf("/") + 1, -5).toLowerCase(); };
const sout = (x) => { console.log("<‰=== " + (x ?? "No Output") + " ===‰>"); } //x += ("|=====* ");
const braft = (l) => document.querySelector(`${l}`).appendChild(document.createElement("br"));
let CMBRdata = "<‰=== Empty Data ===‰>";

/** @description Reads .json File as text 
 * @param {String} txt Name of .json File 
 * @implements {Promise<Object>} 
 * 
 */
function connectCMBRjson(name) {

	fetch(`${document.location.origin}/${name}.json`).then(response => {
    	return response.text();
	}).then(stuff => {
		const loaded = JSON.parse(stuff);
		console.log(typeof(loaded["urls"]));
		CMBRdata = (Object.keys(loaded.sections).length);
		CMBRdata = loaded.sections;
	}).catch(error => {
		console.error('Failed to fetch page: ', error)
	});
}