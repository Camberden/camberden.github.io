/** === CMBR.JS: GLOBAL PERSONAL UTILITIES ===>
 * @fileoverview Camberden's general site utility toolkit.
 * @version 1.2 Formerly known as buttons.js
 * @interface CMBRutil
 * @author Camberden (Chrispy | Kippi)  
 */

/* |====================>
* Blog Coords
|====================> */
const coordinates = {
	"Chapel Hill, NC": [35.963193, -79.058806],
	"Hillsborough, NC": [36.074342, -79.100648],
	"Pittsboro, NC": [35.71951016932923, -79.18136391788723],
	"Raleigh, NC": [35.81529, -78.614098],
	"Marshall, NC": [35.913106, -82.738448],
	"Myrtle Beach, SC": [33.704501, -78.865456],
	"Nesquehoning, PA": [40.863396, -75.814703],
	"Weatherly, PA": [40.942216, -75.830163],
	"Lebanon, PA": [40.341082, -76.422731],
	"Tokyo, Japan": [35.69286, -220.300989],
	"Nagoya, Japan": [34.879172, -222.726984]
}

/* |====================>
* Ports & Site URLs
|====================> */
/** @global @readonly @description Determines the Site's Port Number */
const basePort = document.location.port.length ? document.location.port : "";

/** @global @readonly @description Site-specific Links Configuration */
const baseHyperlinks = [
	"https://camberden.com/",
	"https://camberden.github.io/",
	"https://camberden.net/",
	"http://127.0.0.1:" + basePort,
	"http://localhost:" + basePort,
	"http://localhost:" + basePort + "/index.html",
];
const nonStaticSite = "https://camberden.net";
const nonStaticDev = "http://localhost:3020";

/* |====================>
% Alpine.JS
|====================> */

/**
 * @function
 * @global
 * @event alpine:init
 * @description Intializes ALPine DAta, MAgics, DIrectives, and STores
 */
document.addEventListener("alpine:init", () => {
	// ! ==========| Alpine Data |========== !
	// ∆ Alpine DATA
	// ! |====================>
	Alpine.data('camberden', () => ({
		site: document.location.origin,
	})); // *=> end of Alpine Data
	// !==========| Alpine Magics |==========!
	Alpine.magic('tooltip', el => message => {
		let instance = tippy(el, { content: message, trigger: 'manual' });
		instance.show();
		setTimeout(() => {
			instance.hide();
			setTimeout(() => instance.destroy(), 150);
		}, 1000);
	});
	Alpine.magic('meander', el => message => {
		setTimeout(() => {
			alert("Meandered: " + el.innerText);
		}, 2000);
	}); // *=> end of Alpine Magics
	// !==========| Alpine Directives |==========!
	Alpine.directive('tooltip', (el, { expression }) => {
		tippy(el, { content: expression });
	});
	Alpine.directive('autograph', function (el, { expression }) {
		setTimeout(function () {
			// el.setAttribute('x-show', false);
			el.setAttribute('x-transition.duration.500ms', '');
			validity = Alpine.store('nauth').getValidity();
			console.table({ 'X-Autograph: validity first?': validity });
			if (validity) {
				el.setAttribute('x-show', validity);
				el.setAttribute('x-cloak', validity);
			}
			console.table({ 'X-Autograph: validity last?': validity });
		}, 2000);
	});
	Alpine.directive('clock', function (el, { expression }) {
		el.setAttribute('x-transition', '');
		el.innerHTML = 'clock';
		setInterval(() => {
			const now = new Date();
			const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' };
			const formattedDateAndTime = now.toLocaleDateString('en-US', options);
			el.textContent = formattedDateAndTime;
		}, 1000);
	});

	// *=> end of Alpine Directives
	// !==========| Alpine Store |==========!
	// TODO Get the Persist Plugin //
	Alpine.store('thematic', {
		mode: null,
		getMode() {
			console.log('what the heck: ' + this.mode);
			return this.mode;
		},
		setMode(val) {
			val = val ?? 'dark';
			this.mode = val;
		},
		modeToggle(val) {
			this.mode = val;
			this.setMode(val);
		}
	})
	Alpine.store('nauth', {
		valid: false,
		toggle() {
			this.valid = !this.valid;
		},
		getValidity() {
			return this.valid;
		},
	});
	Alpine.store('navStore', {
		on: false,
		toggle() {
			this.on = !this.on;
		},
	});
	// *=> end of Alpine Store
});


/* |====================>
* Tunes
|====================> */
/**
	 * @param {string} title
	 * @param {number} year
	 * @param {string} compilation
	 * @param {string} audioFileLink
	 * @param {string} posterFileLink
	 * @param {boolean} completeOrIncomplete
	 * @param {boolean} lyricalOrInstrumental
	 */
class Tune {
	constructor(title, year, compilation, audioFileLink, posterFileLink, completeOrIncomplete, lyricalOrInstrumental) {
		this.title = title;
		this.year = year;
		this.compilation = compilation;
		this.audioFileLink = audioFileLink;
		this.posterFileLink = posterFileLink;
		this.completeOrIncomplete = completeOrIncomplete;
		this.lyricalOrInstrumental = lyricalOrInstrumental;
	}
}

const cmbrTunes = [ // ../assets/music-tracks/music-
	trackMeaning = new Tune("Meaning", 2021, "The Rush of Feeling", "../assets/music-tracks/music-meaning.mp4", "../assets/artifacts/art-meaning-paper.jpeg", true, true),
	trackTheWarOfArt = new Tune("The War of Art", 2020, "Draft Compendium", "../assets/music-tracks/music-the-war-of-art.mp3", "../assets/artifacts/chrispy-collage.jpeg", true, false),
	// trackForTheVision = new Tune("For the Vision", 2019, "Draft Compendium", "../assets/music-tracks/music-for-the-vision.mp3", "../assets/artifacts/foxfire.jpeg", true, true),
	trackTheDeficitOfPatience = new Tune("The Deficit of Patience", 2019, "Draft Compendium", "../assets/music-tracks/music-the-deficit-of-patience.mp4", "../assets/artifacts/foxfire.jpeg", false, true),
	trackSuperScapegrace = new Tune("SUPER Scapegrace", 2016, "Audioshi Isle", "../assets/music-tracks/music-super-scapegrace.mp3", "../assets/artifacts/audioshi-isle.jpeg", true, false),
	trackBlueberryBeach = new Tune("Blueberry Beach", 2016, "Audioshi Isle", "../assets/music-tracks/music-blueberry-beach.mp3", "../assets/artifacts/audioshi-isle.jpeg", true, false),
	trackFruityFrolicField = new Tune("Fruity Frolic Field", 2016, "Audioshi Isle", "../assets/music-tracks/music-fruity-frolic-field.mp3", "../assets/artifacts/audioshi-isle.jpeg", true, false),
	trackSixthMissionThrowback = new Tune("Sixth Mission Throwback", 2020, "Draft Compendium", "../assets/music-tracks/music-sixth-mission-throwback.mp3", "../assets/artifacts/foxfire.jpeg", true, false),
	trackAGamesPostlude = new Tune("A Game's Postlude", 2012, "The Later Days of MusicalYoshi", "../assets/music-tracks/music-a-games-postlude.mp3", "../assets/artifacts/foxfire.jpeg", true, false),
	trackOpeningThematicStatement = new Tune("Opening Thematic Statement", 2012, "The Later Days of MusicalYoshi", "../assets/music-tracks/music-opening-thematic-statement.mp4", "../assets/artifacts/foxfire.jpeg", true, false),
	trackFirstDungeon = new Tune("First Dungeon", 2010, "The Later Days of MusicalYoshi", "../assets/music-tracks/music-first-dungeon.mp3", "../assets/artifacts/foxfire.jpeg", true, false),
	trackSixthMission = new Tune("Sixth Mission", 2010, "The Later Days of MusicalYoshi", "../assets/music-tracks/music-sixth-mission.m4a", "../assets/artifacts/foxfire.jpeg", true, false),
	trackSecondCommune = new Tune("Second Commune", 2008, "The Early Days of MusicalYoshi", "../assets/music-tracks/music-second-commune.m4a", "../assets/artifacts/foxfire.jpeg", true, false),
	trackSuperScapegraceOriginal = new Tune("SUPER Scapegrace (Original)", 2008, "The Early Days of MusicalYoshi", "../assets/music-tracks/music-super-scapegrace-original.m4a", "../assets/artifacts/foxfire.jpeg", true, false),
];

/* |====================>
* Markdown
|====================> */

const cmbrMdConfig = {
	"autofocus": true,
	"forceSync": true,
	"toolbar": ["bold", "italic", "horizontal-rule", "|", "quote", "code", "|", "unordered-list", "ordered-list", "|", "link", "image", "table", "|", "preview", "side-by-side", "fullscreen"],
	"hideIcons": [
		"guide",
		"heading"
	],
	"opacity": 1,
	"indentWithTabs": true,
	"initialValue": "Module 1",
	"insertTexts": {
		"horizontalRule": [
			"\n\n<hr class='hr-cmbr-gradient'>\n\n",
			"",
		],
		"image": [
			"![](http: //",
			")"],
		"link": [
			"['",
			"'](http://)",
		]
	},
	"promptURLs": true,
	"renderingConfig": {
		"singleLineBreaks": false,
		"codeSyntaxHighlighting": true,
	},
	"lineWrapping": true,
	"autosave": {
		"enabled": true,
		"uniqueId": "chrispy",
		"delay": 1000
	},
	"parsingConfig": {
		"allowAtxHeaderWithoutSpace": true,
		"strikethrough": false,
		"underscoresBreakWords": true
	}
};

const CMBRmarkedConfig = {
	heading(src) {
		const match = src.match('##');
		if (match) {
			return {
				type: 'heading',
				raw: match[0],
				text: match[1].trim()
			};
		}
		// return false to use original heading tokenizer
		return false;
	},
	walkTokens: (token) => {
		//console.log(marked.parse('# heading 2\n\n## heading 3'));
		if (token.type === 'heading') {
			token.depth += 1;
		}
	},
};

const descriptionList = {
	name: 'descriptionList',
	level: 'block',                                     // Is this a block-level or inline-level tokenizer?
	start(src) { return src.match(/:[^:\n]/)?.index; }, // Hint to Marked.js to stop and check for a match
	tokenizer(src, tokens) {
		const rule = /^(?::[^:\n]+:[^:\n]*(?:\n|$))+/;    // Regex for the complete token, anchor to string start
		const match = rule.exec(src);
		if (match) {
			const token = {                                 // Token to generate
				type: 'descriptionList',                      // Should match "name" above
				raw: match[0],                                // Text to consume from the source
				text: match[0].trim(),                        // Additional custom properties
				tokens: []                                    // Array where child inline tokens will be generated
			};
			this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
			return token;
		}
	},
	renderer(token) {
		return `<dl class="grid-col-1-1 vt323 mdDL" style="background-color: var(--cmbr-blass); 
		border: 0.2rem inset black; padding: 0.5rem;">${this.parser.parseInline(token.tokens)}\n</dl>`; // parseInline to turn child tokens into HTML
	}
};

const description = {
	name: 'description',
	level: 'inline',                                 // Is this a block-level or inline-level tokenizer?
	start(src) { return src.match(/:/)?.index; },    // Hint to Marked.js to stop and check for a match
	tokenizer(src, tokens) {
		const rule = /^:([^:\n]+):([^:\n]*)(?:\n|$)/;  // Regex for the complete token, anchor to string start
		const match = rule.exec(src);
		if (match) {
			return {                                         // Token to generate
				type: 'description',                           // Should match "name" above
				raw: match[0],                                 // Text to consume from the source
				dt: this.lexer.inlineTokens(match[1].trim()),  // Additional custom properties, including
				dd: this.lexer.inlineTokens(match[2].trim())   //   any further-nested inline tokens
			};
		}
	},
	renderer(token) {
		return `\n<dt>${this.parser.parseInline(token.dt)}</dt><dd>${this.parser.parseInline(token.dd)}</dd>`;
	},
	childTokens: ['dt', 'dd'],                 // Any child tokens to be visited by walkTokens
};

function walkTokens(token) {                        // Post-processing on the completed token tree
	if (token.type === 'strong') {
		token.text += ' walked';
		token.tokens = this.Lexer.lexInline(token.text)
	}
}
marked.use({ extensions: [descriptionList, description], walkTokens });

/* |====================>
% CMBRutil
|====================> */

/**
 * @global @public @interface
 * @description - Camberden Personal Utilities:
 * Formally buttons.js, a Global JavaScript Handler
 * @author Camberden (Chrispy | Kippi)
 */
const CMBRutil = {
	md: function () {
		var testMd = new SimpleMDE(cmbrMdConfig);
		return testMd;
	},
	/**
	 * 
	 * @param {HTMLElement} targetEl 
	 * @param {String[]} loadVals
	 */
	cloudGen: function (targetEl, loadVals) {

		const cloudSpeed = (Math.random() * 10 + 5).toFixed(0);
		// const cloudDelay = (Math.random() * 5).toFixed(0);
		const cloudDelay = 0;
		const cloudTop = ((Math.random() * 10) * 2).toFixed(0);
		const cloudPad = (Math.random() * 10 / 2).toFixed(0);
		/**
		 * @type {HTMLElement} div
		 */
		const div = document.createElement("div");
		const dt = document.createElement("dt");
		const dtTxt = document.createTextNode(loadVals[0]);
		dt.appendChild(dtTxt);
		const dd = document.createElement("dd");
		const ddTxt = document.createTextNode(loadVals[1]);
		dd.appendChild(ddTxt);
		div.appendChild(dt);
		div.appendChild(dd);
		console.log("hello cloudgen");
		div.setAttribute('style', `
			color: var(--cmbr-primary);
			text-shadow: black 0.2rem 0.2rem 0.2rem;
			width: fit-content;
			opacity: 0%;
			padding:${cloudPad}rem;
			background-color: rgba(128, 128, 128, 0.3);
			border-radius: 70%;
			border-left-width: 5rem;
			position: absolute;
			left: 0%;
			top:${cloudTop}%;
			animation-name: cloud-float;
			animation-play-state: running !important;
			animation-duration: ${cloudSpeed}s;
			animation-delay: ${cloudDelay}s;
			animation-direction: normal;
			animation-timing-function: linear;
			animation-iteration-count: 1;
			text-overflow: none;
			overflow: hidden;
			
		`);
		targetEl.appendChild(div);
		setTimeout(() => {
			while (targetEl.lastChild) {
				targetEl.removeChild(targetEl.lastChild);
			}
			this.cloudGen(targetEl, loadVals);
		}, cloudSpeed * 1000);

	},
	/**
	 * 
	 * @description Converts Date object to cmbr Preferred Format
	 * @param {Date} date a Date object
	 * @param {Boolean} journalesque Prepare format as either for 
	 * a typical written journal entry or for a professional log.
	 * - True: Month DDth, YYYY #Journalesque => without weekday
	 * - False: MM/DD/YYYY #Postorders => weekday with numeric date
	 * @returns {String}
	 */
	convertToPreferredDateFormat: function (date, journalesque) {
		let cmbrDate;
		let preferredDateOptions;
		if (journalesque) {
			preferredDateOptions = {
				year: "numeric",
				month: "long",
				day: "numeric",
			};
			const nth = (d) => {
				if (d > 3 && d < 21) return 'th,';
				switch (d % 10) {
					case 1: return "st,";
					case 2: return "nd,";
					case 3: return "rd,";
					default: return "th,";
				};
			};
			cmbrDate = date.toLocaleDateString("en-US", preferredDateOptions);
			cmbrDate = cmbrDate.replace(",", nth(date.getDate()));
			console.info(cmbrDate);
			return cmbrDate;
		} else {
			preferredDateOptions = {
				weekday: "long",
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			};
			cmbrDate = date.toLocaleDateString("en-US", preferredDateOptions);
			return cmbrDate;
		};
	},
	displayCurrentDateAndTime: () => {
		const currentDateAndTimeElement = document.getElementById("current-date-and-time");
		const now = new Date();
		const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' };
		const formattedDateAndTime = now.toLocaleDateString('en-US', options);
		currentDateAndTimeElement.textContent = formattedDateAndTime;
	},
	parsePermilleTags: function (content, tag) {
		const perMilleTags = ["t", "b", "g", "p", "a", "l"];
		const l = tag.length + 3;
		return content.substring(content.indexOf("<" + tag + "‰>") + l, content.indexOf("</" + tag + "‰>"));
	},

	/* |====================>
	! Buttons
	|====================> */

	buttonOnMouseEnter: function (button) {
		if (!button.classList.contains("button-toggled")) {
			button.classList.add("button-highlight");
		}
	},
	buttonOnMouseLeave: function (button) {
		button.classList.remove("button-highlight");
	},
	buttonOnClick: function (button) {
		if (button.classList.contains("toggleable")) {

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

	/* |====================>
	! Invervals & Timers
	|====================> */

	/**
	 * @property {string} timerID
	 * @type {string}
	 * @description Timer ID for interval or timeout operations
	 * @example timerID = setInterval(() => { console.log("cmbrInterval"); }, 1000);
	 * @example timerID = setTimeout(() => { console.log("cmbrTimeout"); }, 1000);
	 */
	timerID: null,
	/**
	 * @param {string} timer 
	 * @description Clears the specified interval timer
	 */
	intervalOnClear: function (timer) {
		clearInterval(timer);
		console.log("Interval Cleared: " + timer);
	},
	/**
	 * @param {string} timer 
	 * @description Clears the specified timeout timer
	 */
	timeoutOnClear: function (timer) {
		clearTimeout(timer);
		console.log("Timeout Cleared: " + timer);
	},

	/* |====================>
	! List Items
	|====================> */

	/**
	 * @description Adds the specified CSS class to the selected list item and removes it from all sibling list items.
	 * @param {HTMLElement} litem 
	 * @param {String} addClass CSS Class Name
	 * @example litemOnSelected($el, "listing-highlight");
	 */
	litemOnSelected: function (litem, addClass) {
		for (let li of litem.parentElement.children) {
			li.classList.remove(addClass);
		}
		litem.classList.add(addClass);
	},

	// dataTheme: function () {
	// 	document.querySelectorAll(".data-theme-button").forEach(button => {
	// 		button.onclick = function () {
	// 			switch (button.id) {
	// 				case "dark":
	// 					document.querySelector("body").setAttribute("data-theme", "dark");
	// 					button.style.color = "initial";
	// 					document.getElementById("light").style.color = "transparent";
	// 					document.getElementById("legacy").style.color = "transparent";
	// 					// document.getElementById("paperesque").style.color = "transparent";
	// 					break;
	// 				case "light":
	// 					document.querySelector("body").setAttribute("data-theme", "light");
	// 					button.style.color = "initial";
	// 					document.getElementById("dark").style.color = "transparent";
	// 					document.getElementById("legacy").style.color = "transparent";
	// 					// document.getElementById("paperesque").style.color = "transparent";

	// 					break;
	// 				case "legacy":
	// 					document.querySelector("body").setAttribute("data-theme", "legacy");
	// 					button.style.color = "initial";
	// 					document.getElementById("dark").style.color = "transparent";
	// 					document.getElementById("light").style.color = "transparent";
	// 					// document.getElementById("paperesque").style.color = "transparent";

	// 					break;
	// 				case "paperesque":
	// 					document.querySelector("body").setAttribute("data-theme", "paperesque");
	// 					button.style.color = "initial";
	// 					document.getElementById("dark").style.color = "transparent";
	// 					document.getElementById("light").style.color = "transparent";
	// 					// document.getElementById("legacy").style.color = "transparent";

	// 					break;
	// 				default:
	// 					console.log("Light, Dark, and Lavendarium.");
	// 					break;
	// 			}
	// 		}
	// 	});
	// 	document.getElementById(document.querySelector("body").getAttribute("data-theme")).style.color = "initial";
	// },
	/** @returns {Boolean} `true` if file:// protocol | `false` otherwise */
	acceptableProtocol: function () {
		if (document.location.protocol === "file:") {
			// console.log("<‰ File Protocol Detected ‰>");
			return false;
		} else {
			// console.log("<‰ CORS Acceptable Protocol Detected ‰>");
			return true;
		}
	},

	/* |====================>
	! atSite fn
	|====================> */

	/**
	 * @param {string} site 
	 * @returns {Boolean} boolean
	 * @description Checks if the current site URL includes the specified site string
	 */
	atSite: function (site) {
		if (document.location.href.includes(site)) {
			return true;
		} else {
			return false;
		}
	},
	atLegacyIndex: function () {
		if (this.acceptableProtocol() && document.location.href.endsWith("legacyindex.html")) {
			return true;
		} else {
			return false;
		}
	},
	/** 
	 * @global 
	 * @readonly 
	 * @returns {Boolean} boolean 
	 * @description Reads site index URL and provides gateway for development servers and all configured domains
	 *  */
	atSiteIndex: function () {
		if (document.location.href.endsWith("legacyindex.html")) {
			return false;
		} else if (this.acceptableProtocol() && document.location.href.endsWith("index.html")) {
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
	atSiteBlog: function () {
		if (document.location.href.includes("blog.html")) {
			return true;
		} else {
			return false;
		}
	},
	atSiteExpeditions: function () {
		if (document.location.href.includes("expeditions.html")) {
			return true;
		} else {
			return false;
		}
	},
	atSiteVday: function () {
		if (document.location.href.includes("happy-veterans-day.html")) {
			return true;
		} else {
			return false;
		}
	},

	/* |====================>
	! Links, URLparams, Endpoints
	|====================> */

	/**
	 * @param {string} page
	 * @returns {string} The relative URL pattern based on document location and protocol
	 * @description Transforms an internal page URL pattern based on whether the
	 * static site or the server-side site is running based on the
	 * current document location and protocol
	 * @example
	 * const pageLink = CMBRutil.staticLinkTransform("page.html");
	 * @yields {string} '../' Concatenation: static-site.com/page.html from static-site.com/nested/nested.html
	 * @yields {string} '/' Concatenation: server-side-site.com/page.html from server-side-site.com/nested/nested.html
	 */
	staticLinkTransform: function (page) {
		if (document.location.origin !== nonStaticSite || document.location.protocol !== 'http') {
			return '../' + page;
		} else {
			return '/' + page;
		}
	},
	// Function to update URL parameters
	updateURLParameter: function (key, value) {
		urlParams.set(key, value); // Set or update the parameter
		history.replaceState(null, '', '?' + urlParams.toString()); // Update the URL
	},
	openEndPoint: function () {
		let endpoint = new URL("/api/data", document.location.origin);
		console.log(endpoint.toString()); // Outputs: https://example.com/api/data
		// Get the current URL parameters
		const urlParams = new URLSearchParams(window.location.search);

		const endpointSearchInput = document.createElement("input");
		endpointSearchInput.setAttribute("id", "endpoint-search-input");
		endpointSearchInput.setAttribute("style", "display: fixed; bottom:0; width:100%; height:25%;");

		document.appendChild(endpointSearchInput);

		// Add event listener to an input field
		document.getElementById("endpoint-search-input").addEventListener("input", function () {
			updateURLParameter("search", this.value); // Update 'search' parameter
		});
	},

	/**
	 * @constant
	 * @description default YouTube video ID: John Cage - 4:33
	 */
	tubeVideo: '6uNkTqNSulY',

	/* |====================>
	! JSON & Fetch API
	|====================> */

	/** 
	 * @description Reads cmbr.json
	 * @borrows cmbr.json
	 * @param {Array} query
	 * @implements {Promise<Object>} 
	 * 
	 */
	connectCMBRjson: async function (query) {

		return fetch(`${document.location.origin}/config/cmbr.json`)
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
				switch (query[0]) {
					case "travel-photos":
						if (query.length == 1) {
							// console.log(data[query[0]].items);
							return (data[query[0]].items);
							break;
						}
						// console.log(data[query[0]].items[query[1]]);
						return (data[query[0]].items[query[1]]);
					case "sections":
						// console.log("sections");
						return data["sections"];
					case "tubeVideos":
						return data["tubeVideos"];
					case "studyDocs":
						return data["studyDocs"];
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
					default:
						sout("Bad Query at connectCMBRjson.");
						return "CMBR Bad Query";
				}
			});

	},

	/** 
	 * @description Reads a JSON file or URL
	 * @param {string} JSONorSite
	 * @param {Array} query
	 * @implements {Promise<Object>} 
	 * 
	 */
	retrieveParcel: async function (JSONorSite, query) {
		return fetch(JSONorSite)
			.then(data => data.json())
			.then(data => {
				console.log("Retrieval from: " + JSONorSite);
				console.log("Fetching Datapoint at Site: " + query[0]);
				return data;
			})
			.then((data) => {
				return data[query];
			});
	},

	/* |====================>
	! Defaults
	|====================> */

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
					form.addEventListener("submit", (e) => { e.preventDefault(); });
				});
			} else {
				console.log("Running! (configuration disabled)");
			}
		}
	},
}

// |=====| GLOBAL FUNCTION EXPRESSION INVOKATIONS |=====| //
/* |====================>
* Site Section Display
|====================> */
const displaySite = () => { document.getElementById("current-site").innerHTML = document.location.host };
const displaySection = () => { document.getElementById("current-section").innerHTML = (window.location.pathname).slice(window.location.pathname.lastIndexOf("/") + 1, -5).toLowerCase(); };
/* |====================>
* Console Log Utils
|====================> */
const sout = (x) => { console.log("<‰=== " + (x ?? "No Output") + " ===‰>"); };
const braft = (l) => document.querySelector(`${l}`).appendChild(document.createElement("br"));

(async () => {
	CMBRutil.handleFormDefault(true);
})();