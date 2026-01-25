// ---------- GENERAL ITEM UTILITY ---------- //
const navSections = document.querySelector("#nav-sections");
const bookmarksLinks = document.querySelector("#bookmarks-links");

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

function enableDropdowns () {
	document.querySelectorAll(".dropdown-access").forEach(accessor => {
		accessor.parentElement.onclick = function() {
			if (! accessor.classList.contains("dropdown-opened")) {
				console.log(accessor.id);
				// dropdownAccessor(ipsumData[accessor.parentElement.nextElementSibling.id], accessor.parentElement.nextElementSibling.id);
				accessor.classList.add("dropdown-opened");
			} else {
				accessor.classList.remove("dropdown-opened");
				accessor.parentElement.nextElementSibling.innerHTML = "";
			}
		}
	});
}

(()=>{
	displaySection();
	enableDropdowns();
	initNav();
})();
