// ---------- GENERAL ITEM UTILITY ---------- //

const blockOne = document.getElementById("block-1");
const allButtons = document.querySelectorAll("button");
const itemSelectedDisplay = document.getElementById("item-title");
const itemList = document.getElementById("item-list");
const listOptions = document.getElementById("list-options");

function enableToyButtons() {
	document.querySelectorAll(".w-item").forEach(e => {
		e.onclick = function () {
			console.log(e.id);
			switch (e.id) {
				case ("pankair"):
					e.style.color = "green";
					break;
				case ("pankair-sw"):
					e.style.color = "blue";
					break;
				case ("busmat"):
					e.style.color = "orange";
					break;
				case ("elaor"):
					e.style.color = "pink";
					break;
				case ("nao"):
					e.style.color = "white";
			}
		}
		e.onmouseenter = function() {
			e.classList.add("w-item-over");
		}
		e.onmouseleave = function() {
			e.classList.remove("w-item-over");
			e.classList.add("w-item-leave");
		}
	});
}
// enableToyButtons();

// ----- MC WORLD MAP EDITOR ----- //

function targetPaths() {
	const regions = document.querySelectorAll(".gr-region");
	const capitals = document.querySelectorAll(".gr-capital");
	const regionTitle = document.getElementById("region-title");
	const divisionTitle = document.getElementById("division-title");
	const regionFlag = document.getElementById("region-flag");
	// const listedRegions = {"farentia":"Farentia C.D.", 
	// 	"zethro-scheipen":"Claywater", "tendou":"Tendou C.D.",
	// 	"selunia":"Mokarzmamat", "east-farentia":"Orienton", "cheirica":"Lucidea Town", 
	// 	"mochadia":"Husisiholkit"};
		
	for (let region of regions) {
		region.style.fill = "grey";
		region.onmouseenter = function () {
			region.style.fill = "aqua";
			region.style.fillOpacity = "80%";
			regionTitle.textContent = region.id;
			regionFlag.innerHTML = `<img src="../assets/banner-${region.id}.svg">`
		}
		region.onmouseleave = function () {
			region.style.fill = "grey";
			region.style.fillOpacity = "50%";
			regionFlag.innerHTML = "";
		}
	}
	for (let capital of capitals) {
		capital.onmouseenter = function () {
			capital.style.fill = "red";
			divisionTitle.textContent = capital.id;
		}
		capital.onmouseleave = function () {
			capital.style.fill = "#ffeeaa";
			divisionTitle.textContent = "";
		}
	}

}
targetPaths();