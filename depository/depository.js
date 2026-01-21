// ---------- GENERAL ITEM UTILITY ---------- //
const navSections = document.querySelector("#nav-sections");
const bookmarksLinks = document.querySelector("#bookmarks-links");

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

function enableDropdowns () {
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

/**
 * 
 * @param {HTMLElement} target 
 */
function navAccess(target, sectionOrBookmark) {
	let access = document.querySelector("#nav-access");
	let opened = "nav-opened";
	if (! sectionOrBookmark) {
		access = document.querySelector("#bookmarks-access");
		opened = "bookmark-opened";
	} 
	access.onclick = function() {
		if (! access.classList.contains(opened)) {
			ButtonInterface.actionsProvided(target, sectionOrBookmark);
			access.classList.add(opened);
			access.innerText = "Minimize";
		} else {
			target.innerHTML = "";
			access.classList.remove(opened);
			sectionOrBookmark ? access.innerText = "Navigation" : access.innerText = "Bookmarks";
		}
	}
}
navAccess(navSections, true);
navAccess(bookmarksLinks, false);



