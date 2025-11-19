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

	modalOnMouseEnter: function(modalPrompt) {
		modalPrompt.classList.add("secondary-highlight");
	},
	modalOnMouseLeave: function(modalPrompt) {
		modalPrompt.classList.remove("secondary-highlight");
	},

	/**
	 * 
	 * @param {HTMLElement} modalPrompt The tag representing the clickable, modal generating text link: .modal-prompt
	 * @param {HTMLElement} modal The tag representing the modal window: .modal
	 * @example ButtonInterface.modalOnClick(document.querySelector(".modal-prompt"), document.querySelector(".modal"));
	 */
	modalOnClick: function(modalPrompt, modal) {
		modalPrompt.classList.add("secondary-highlight");
		modal.style.display = "block";
		setTimeout(() => {
			modalPrompt.classList.remove("secondary-highlight");
			}, 100);
	},

	modalOnClickClear: function(modal, modalText) {
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
	}
};

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
