let pageInfo = (
	`API Console Log Appears here.`
);

const buttonMapper = () => {

	document.querySelectorAll("button").forEach(button => {
			button.onmouseenter = function() {
				CMBRutil.buttonOnMouseEnter(button);
			}
			button.onmouseleave = function() {
				CMBRutil.buttonOnMouseLeave(button);
			}
			button.onclick = function() {
				CMBRutil.buttonOnClick(button);
			}
		});
}
/**
 * 
 * @param {HTMLCollection} classNames 
 */
const classMapper = (classNames) => {
	document.querySelectorAll("." + classNames).forEach(className => {
		className.onmouseenter = function() {
				CMBRutil.buttonOnMouseEnter(className);
			}
		className.onmouseleave = function() {
				CMBRutil.buttonOnMouseLeave(className);
			}
		className.onclick = function() {
			document.location = className.value;
		}
	})
}

/** @local @function Main */
(async (/*===*| RUN |===*/) => {

	// CMBRutil.displayPageInfo(pageInfo);
	buttonMapper();
	classMapper("linkage-box");
	
})(/*===*===*===| END |===*===*===*/);