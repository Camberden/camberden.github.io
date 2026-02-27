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
	// ["depository", "HTMX & Alpine Depot"],
	["blog", "Blogging Page"],
	// ["accounting", "Accounting Resource"],
	["travel", "Travel Page"],
	["lifecraft", "Lifecraft Page"],
	["musings", "Musings Page"],
	// ["template", "Template"],
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
var CMBRdata = "banana";
/**
 * @global @public @interface
 * @description - Camberden Personal Utilities:
 * Formally buttons.js, a Global JavaScript Handler
 * @author Camberden (Chrispy | Kippi)
 */
const CMBRutil = {

	buttonOnMouseEnter: function (button) {
		if (!button.classList.contains("button-toggled")) {
			button.classList.add("button-highlight");
		} 
	},
	buttonOnMouseLeave: function (button) {
		button.classList.remove("button-highlight");
	},
	buttonOnClick: function (button) {
		if (button.classList.contains("toggleable")){

			 if (button.classList.contains("button-toggled")) {
				button.classList.remove("button-toggled");
			} else {
				button.classList.add("button-toggled");
			}

		} else {
		button.classList.add("button-depressed");

		setTimeout(() => {
			button.classList.remove("button-depressed");
		}, 200);
		}
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

	dataTheme: function () {
		document.querySelectorAll(".data-theme-button").forEach(button => {
			button.onclick = function () {
				switch (button.id) {
					case "dark":
						document.querySelector("body").setAttribute("data-theme", "dark");
						button.style.color = "initial";
						document.getElementById("light").style.color = "transparent";				
						document.getElementById("legacy").style.color = "transparent";
						// document.getElementById("paperesque").style.color = "transparent";

					break;
					case "light":
						document.querySelector("body").setAttribute("data-theme", "light");
						button.style.color = "initial";
						document.getElementById("dark").style.color = "transparent";				
						document.getElementById("legacy").style.color = "transparent";
						// document.getElementById("paperesque").style.color = "transparent";

					break;
					case "legacy":
						document.querySelector("body").setAttribute("data-theme", "legacy");
						button.style.color = "initial";
						document.getElementById("dark").style.color = "transparent";				
						document.getElementById("light").style.color = "transparent";
						// document.getElementById("paperesque").style.color = "transparent";

					break;
					case "paperesque":
						document.querySelector("body").setAttribute("data-theme", "paperesque");
						button.style.color = "initial";
						document.getElementById("dark").style.color = "transparent";				
						document.getElementById("light").style.color = "transparent";
						// document.getElementById("legacy").style.color = "transparent";

					break;
					default:
						console.log("Light, Dark, and Lavendarium.");
					break;
				}
			}
		});
		document.getElementById(document.querySelector("body").getAttribute("data-theme")).style.color = "initial";
	},

	/**
	 * 
	 * @implements
	 * @function
	 * @emits dataTheme();
	 * @description 2026 Page-Agnostic NavBar Generator
	 */
	navigationCharter: function () {
		const siteMap = document.getElementById("chart-links");
		const mergeReference = sections.length;
		bookmarks.forEach(bookmark => { sections.push(bookmark); })

		for (let i = 0; i < sections.length - 1; i++) {
			const a = document.createElement("a");
			if (i >= mergeReference) {
				a.setAttribute("href", `${sections[i][0]}`);
			} else if (sections[i][0] !== "homepage") {
				a.setAttribute("href", `../${sections[i][0]}/${sections[i][0]}.html`);
				a.setAttribute("data-route", `/${sections[i][0]}`);

			} else {
				a.setAttribute("href", `../index.html`);
				a.setAttribute("data-route", `/`);
			}
			a.appendChild(document.createTextNode(sections[i][1]));
			const div = document.createElement("div"); div.setAttribute("class", "section-title");
			div.appendChild(a);
			div.onmouseenter = function () {
				if (div.classList.contains("section-highlight")) {
					div.classList.add("section-highlight");
				} else {
					div.classList.remove("section-lose-highlight"); div.classList.add("section-highlight");
				}
			}
			div.onmouseleave = function () {
				if (div.classList.contains("section-highlight")) {
					div.classList.replace("section-highlight", "section-lose-highlight");
					}
				}
			siteMap.appendChild(div);
		}
		this.dataTheme();
	},

	/**
	 * 
	 * @param {HTMLElement} target
	 * @param {String[][]} linkArray sections
	 */
	initSections: function (target, linkArray) {
		target = document.querySelector("." + target);
		linkArray.forEach(section => {
			const tag = document.createElement("a");
			if (section[0] !== "homepage") {
				tag.setAttribute("href", `/${section[0]}/${section[0]}.html`);
				tag.setAttribute("data-route", `/${section[0]}`);
			} else {
				tag.setAttribute("href", `/index.html`);
				tag.setAttribute("data-route", `/`);
			}
			tag.setAttribute("id", section[0]);
			const text = document.createTextNode(section[1]);
			tag.appendChild(text);

			const sectionDiv = document.createElement("div");
			sectionDiv.setAttribute("id", section[0]);
			sectionDiv.setAttribute("class", `${Object.keys({section}).toString()}-title`);
			

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
					basePort === "4240" ? (()=>{sections.push(["administration", "Administration"]); sout("Express Development Server @ " + document.location.host); setTimeout(()=>{ x = document.getElementById("administration"); x.style.display = "block"; x.setAttribute("class", "section-title")}, 2000 )})() : console.log("|===>");
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
	/** 
	 * @global 
	 * @readonly 
	 * @returns {Boolean} boolean 
	 * @description Reads site index URL and provides gateway for development servers and all configured domains
	 *  */
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
	// Function to update URL parameters
	updateURLParameter: function(key, value) {
		urlParams.set(key, value); // Set or update the parameter
		history.replaceState(null, '', '?' + urlParams.toString()); // Update the URL
	},

	openEndPoint: function() {
		let endpoint = new URL("/api/data", document.location.origin);
		console.log(endpoint.toString()); // Outputs: https://example.com/api/data
		// Get the current URL parameters
		const urlParams = new URLSearchParams(window.location.search);

		const endpointSearchInput = document.createElement("input");
		endpointSearchInput.setAttribute("id","endpoint-search-input");
		endpointSearchInput.setAttribute("style", "display: fixed; bottom:0; width:100%; height:25%;");
		
		document.appendChild(endpointSearchInput);

		// Add event listener to an input field
		document.getElementById("endpoint-search-input").addEventListener("input", function() {
			updateURLParameter("search", this.value); // Update 'search' parameter
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
				sout("Button ID => " + button.id);
				sout("Button Value => " + button.id);

				if (button.id === "sparkle") {
					button.textContent = "✨sparkle✨"
					setTimeout(() => {
						button.textContent = "sparkle";
					}, 3000);
				}
			};
		});
	},

	/** 
	 * @description Reads cmbr.json
	 * @borrows cmbr.json
	 * @param {Array} query
	 * @implements {Promise<Object>} 
	 * 
	 */
	connectCMBRjson: async function(query) {
		return fetch(`${document.location.origin}/cmbr.json`)
		.then(data => data.json())
		.then(data => {
			// console.log(data);
			console.log("QUERY BEFORE RESOLUTION: " + query[0]);
			return data;
		})
		.then((data) => {
			query[0] == "travel-photos" ? console.log("QUERY 0 SAME: " + query[0]) : console.log("QUERY 0 NOT SAME: " + query[0]);
			query[1] == 1 ? console.log("QUERY 1 SAME: " + query[1]) : console.log("QUERY 1 NOT SAME: " + query[1]);
			console.log("QUERY LENGTH: " + query.length);
			switch(query[0]) {
				case "travel-photos":
					if (query.length == 1) {
						// console.log(data[query[0]].items);
						return (data[query[0]].items);
						break;
					}
					// console.log(data[query[0]].items[query[1]]);
					return (data[query[0]].items[query[1]]);
					break;
				break;
				case "sections":
					// console.log("sections");
					return data["sections"];
				break;
				case "blog":
					if (query.length == 1) {
						// console.log(data[query[0]]);
						return (data[query[0]]);
						break;
					}
					let post = ("post-" + query[1]);
					sout("blog as post = " + post);
					// console.log(data[query[0]][post]);
					return (data[query[0]][post]);
					break;
				break;
			
				default:
					sout("Bad Query at connectCMBRjson.");
					return data;
			}
		});
	}

}

// ----- GLOBAL FUNCTION EXPRESSION INVOKATIONS ----- //
const recognizeFileProtocol = (x) => { y = document.getElementById(x); CMBRutil.acceptableProtocol() ? y.innerHTML += " &check;" : y.innerHTML += `<span style="font-size: 0.8rem; color: red; position: absolute;">[lesser functionality in file protocol]</span>`; }
//todo Delete initNav();
const initNav = () => { CMBRutil.actionsProvided("sections"); CMBRutil.actionsProvided("bookmarks"); CMBRutil.dataTheme(); }
const displaySite = () => { document.getElementById("current-site").innerHTML = document.location.host };
const displaySection = () => { document.getElementById("current-section").innerHTML = (window.location.pathname).slice(window.location.pathname.lastIndexOf("/") + 1, -5).toLowerCase(); };
const sout = (x) => { console.log("<‰=== " + (x ?? "No Output") + " ===‰>"); } //x += ("|=====* ");
const braft = (l) => document.querySelector(`${l}`).appendChild(document.createElement("br"));
const indexSectionFilter = () => { if ( CMBRutil.atSiteIndex() ) { document.getElementById("homepage").style.display = "none"; }}