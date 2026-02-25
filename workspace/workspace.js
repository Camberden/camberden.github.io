// ---------- GENERAL ITEM UTILITY ---------- //

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
function enableNeuButtons() {
	document.querySelectorAll(".neu-item").forEach(item => {
		item.onclick = function() {
			if (item.classList.contains("neu-item-depressed")) {
			item.classList.remove("neu-item-depressed");
			} else {
				item.classList.add("neu-item-depressed");
			}
		}
		item.onmouseenter = function() {
			item.classList.add("neu-item-highlight");
			console.log("hi");
		}
		item.onmouseleave = function() {
			item.classList.remove("neu-item-highlight");
		}
	});
}
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
const activateChiron = (texts) => {
	document.getElementById("chiron-span").innerText = convertDummyText(texts)[Math.floor(Math.random() * convertDummyText(texts).length)];
	setInterval(() => {
		document.getElementById("chiron-span").style = "animation-duration: 10s;";
	}, 10000);
}

(()=>{

	enableNeuButtons();
	enableDropdowns();
	CMBRutil.navigationCharter();

})();

