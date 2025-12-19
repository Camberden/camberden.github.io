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
	const regionChart = [
		"Farentia"["Farentia", "Farentia CD", "Farentian SIT"],
		"Zethro-Scheipen"["Zethro-Scheipen", "Claywater"],
		"Tendou"["Tendou", "Tendou CD", "Tendouese Kinokoland", "Austral Isles", "Rolya Chain", "Rolya"],
		"Selunia"["Selunia", "Mokarzmamat", "Grand Selunia", "Midselunia"],
		"Aakse"["Aakse"],
		"Cheirica"["Cheirica", "Lucidea Town"],
		"East Farentia"["East Farentia", "Orienton"],
		"Mochadia"["Mochadia", "Mochadia Major", "Mochadia Minor", "Husisiholkit"],
	];
	
	for (let region of regions) {
		region.style.fill = "grey";
		const regionName = region.classList[0];

		const associatedDivision = Array.from(document.querySelectorAll(`.${regionName}`));
		
		region.onmouseenter = function () {
			
			associatedDivision.map(div => {div.style.fill = "aqua"; div.style.fillOpacity = "60%";});
			
			regionTitle.textContent = (regionName.at(0).toUpperCase() + regionName.substring(1,));
			divisionTitle.textContent = region.getAttribute("title");
			regionFlag.innerHTML = `<img src="../assets/banner-${regionName}.svg">`
			
		}
		region.onmouseleave = function () {
			// region.style.fill = "grey";
			// region.style.fillOpacity = "50%";
			associatedDivision.map(div => {div.style.fill = "grey"; div.style.fillOpacity = "50%";});
			// if (region.style.tool="star") {
			// 	region.style.fill = "#ffeeaa";
			// }

			regionFlag.innerHTML = "";
		}
	}
	for (let capital of capitals) {
		capital.onmouseenter = function () {
			capital.style.fill = "red";
			divisionTitle.textContent = capital.getAttribute("title");
		}
		capital.onmouseleave = function () {
			capital.style.fill = "#ffeeaa";
			divisionTitle.textContent = "_____";
		}
	}

}

targetPaths();

wireDefaultButtons(document.querySelectorAll("button"), true);