/**
 * @interface
 * Acts as an interface to grant event styles to buttons site-wide.
 */
const buttonInterface = {

	addButtonHighlight: function (button) {
		button.classList.add("button-highlight");
	},

	removeButtonHighlight: function (button) {
		button.classList.remove("button-highlight");
	},

	removeButtonDepressedHighlight: function (button) {
		button.classList.remove("button-highlight");
		button.classList.remove("button-depressed");
	},

	addButtonDepressedHighlight: function (button) {
		button.classList.add("button-highlight");
		button.classList.add("button-depressed");
		setTimeout(() => {
			button.classList.remove("button-depressed");
		  }, 100);
	}
};

