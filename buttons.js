/**
 * @description Applies event styles to buttons site-wide
 * - Adds modal styles, WIP 11/18/2025
 * @interface
 * @global
 */
const ButtonInterface = {

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

	modalOnMouseEnter: function (modalPrompt) {
		modalPrompt.classList.add("secondary-highlight");
	},
	modalOnMouseLeave: function (modalPrompt) {
		modalPrompt.classList.remove("secondary-highlight");
	},

	/**
	 * 
	 * @param {HTMLElement} modalPrompt The tag representing the clickable, modal generating text link: .modal-prompt
	 * @param {HTMLElement} modal The tag representing the modal window: .modal
	 * @example ButtonInterface.modalOnClick(document.querySelector(".modal-prompt"), document.querySelector(".modal"));
	 */
	modalOnClick: function (modalPrompt, modal) {
		modalPrompt.classList.add("secondary-highlight");
		modal.style.display = "block";
		setTimeout(() => {
			modalPrompt.classList.remove("secondary-highlight");
		}, 100);
	},

	modalOnClickClear: function (modal, modalText) {
		modalText.innerHTML = "";
		modal.style.display = "none";
	},

	/**
	 * 
	 * @param {HTMLElement} modal The tag representing the modal window: .modal
	 * @param {HTMLElement} modalText The nested tag within the modal window whose contents will be removed
	 * @param {Event} event The event handler
	 */
	modalOnClickOut: function (modal, modalText, event) {
		if (event.target === modal) {
			modalText.innerHTML = "";
			modal.style.display = "none";
		}
	},

	/**
	 * @description Handles an individual form element, preventing default (reloading) upon submission
	 * @param {Event} event 
	 */
	handle: function (event) {
		event.preventDefault();
	},


	actionsProvided: function (target, sectionOrBookmark) {

		if (sectionOrBookmark) {

			/** [["var/var.html","Var Page"],],
			 * @var
			 * The section link: this is the directory name of the page linked.
			 * @name
			 * The section name to appear on the page.
			 */
			sections = [
				["homepage", "Homepage ↺"],
				["dashboard", "Personal Dashboard"],
				["workspace", "Coding Workspace"],
				["blog", "Blogging Page"],
				["language", "Language Resource"],
				["accounting", "Accounting Resource"],
				["travel", "Travel Page"],
				["lifecraft", "Lifecraft Page"],
				["musings", "Musings Page"],
				["depository", "Notes Depository"],
				["fantasy", "Fantasyland"],
				["segregation", "Segregation"],
				["mainframe", "Mainframe"],
				["music", "Original Music"],
			];

			if (document.location.href.includes("index.html")) {
				sections.splice(0, 1);
			}

			function initSections() {

				this.sections.forEach(section => {

					const h3 = document.createElement("h3");
					h3.setAttribute("class", "section-title-text");
					h3.setAttribute("id", section[0]);
					const text = document.createTextNode(section[1]);
					h3.appendChild(text);

					const sectionDiv = document.createElement("div");
					sectionDiv.setAttribute("class", "section-title");
					sectionDiv.onclick = function () {
						if (document.location.href.includes("index.html")) {
							document.location = section[0] + "/" + section[0] + ".html";
						} else if (section[0] === sections[0][0]) {
							document.location = "../" + "index.html";
						} else {
							document.location = "../" + section[0] + "/" + section[0] + ".html";
						}

					};
					sectionDiv.onmouseenter = function () {
						sectionDiv.classList.contains("section-highlight") ?
							sectionDiv.classList.add("section-highlight") :
							sectionDiv.classList.remove("section-lose-highlight");
						sectionDiv.classList.add("section-highlight")
					}
					sectionDiv.onmouseleave = function () {
						sectionDiv.classList.contains("section-highlight") ?
							sectionDiv.classList.replace("section-highlight", "section-lose-highlight") :
							console.log("onmouseleave");
					}

					sectionDiv.appendChild(h3);
					target.appendChild(sectionDiv);
				});
			};

			return initSections();

		} else if (! sectionOrBookmark) {

			bookmarks = [
				["https://www.youtube.com/watch?v=XgqTrvcAySA", "Checkpoint"],
				["https://www.clozemaster.com", "Clozemaster"],
				["https://jisho.org", "Jisho"],
				["https://www3.nhk.or.jp/news/easy/", "NHK Yasashii"],
				["https://www.mheducation.com", "Coursework"],
				["https://maps.google.com", "Maps"],
				["https://int.dac.nc.gov", "Intranet"],
				["https://portal.osc.nc.gov/app", "Fiori"],
			];

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
					target.appendChild(bookmarkDiv);
				});
			};

			return initBookmarks();
		}
	}
};


/**
 * 
 * @param {HTMLElement[]} buttons 
 * @param {Boolean} includeClick
 */
function wireDefaultButtons(buttons, includeClick) {
	buttons.forEach(button => {
		button.onmouseenter = () => {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = () => {
			ButtonInterface.buttonOnMouseLeave(button);
		}
		if (includeClick) {
			button.onclick = () => {
				ButtonInterface.buttonOnClick(button);
			}
		}
	});
}

/**
 * @description Handles all page forms, preventing reload upon form submission
 * @param {boolean} configured - Toggle boolean for default (reloading) prevention
 * - CONFIGURED: Applies current form submission handling and default prevention
 * - NONCONFIGURED: Returns page to normal form submission reloading
 * @fires ButtonInterface#handle - Applies the function individually to each form element
 * @fires window#onload - Fires immediately if buttons.js is linked
 * @global
 */
function camberdenConfig(configured) {
	window.onload = function () {
		if (configured) {
			console.log("Running and configured!");
			const forms = document.querySelectorAll("form");
			forms.forEach(form => {
				form.addEventListener("submit", ButtonInterface.handle);
			});
		} else {
			console.log("Running! (configuration disabled)");
		}

	}
}
camberdenConfig(true);
