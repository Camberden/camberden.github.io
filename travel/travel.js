window.onload = () => console.log("Running!");

const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modal = document.querySelector(".modal");
const closeModal = document.getElementsByClassName("close-modal")[0];

const mapDisplay = document.getElementById("map-display");
const politicalDivision = document.getElementById("political-division");
const visitedTotal = document.getElementById("visited-total");
const interactiveMaps = document.querySelectorAll(".interactive-map");
const mapDisplayButtons = document.querySelectorAll(".map-display-buttons");
const mapHighlightButtons = document.querySelectorAll(".map-highlight-buttons");
const worldMap = document.getElementById("world-map");
const usMap = document.getElementById("us-map");
let currentMap = "world-map";

const visitedCountries = ["US", "BZ", "GT"];
const countriesToVisit = ["JP", "NZ", "CA", "GB", "DE", "MU", "PL", "TH", "IN", "CO", "PY", "AR", "UY", "AU", "ID", "SG", "MU", "LK", "MV", "AW", "BM"];
const countriesToConsiderRetirement = ["US", "CO", "PY", "UY", "JP"];
const statesToConsiderRetirement = ["US-NC", "US-PA"];
const visitedStates = ["US-PA", "US-NJ", "US-NY", "US-MD", "US-DE", "US-VA", "US-WV", "US-TN", "US-NC", "US-SC", "US-GA", "US-IL", "US-CO", "US-NV"];
const statesToVisit = ["US-CA", "US-ND", "US-AK", "US-VT"];

function loadInteractiveMaps(selection) {
	interactiveMaps.forEach(interactiveMap => {
		if (interactiveMap.id === selection) {
			currentMap = selection;
			interactiveMap.style.display = "inline";
			cyclePoliticalDivision(selection);
		} else {
			interactiveMap.style.display = "none";
		}
	})
};
loadInteractiveMaps("world-map");

function enableMapSelectionButtons() {
	mapDisplayButtons.forEach(button => {
		button.onclick = function () {
			loadInteractiveMaps(button.value);
		}
		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});
}
enableMapSelectionButtons();

function cyclePoliticalDivision(selection) {
	switch (selection) {
		case "world-map":
			politicalDivision.innerHTML = "Countries Visited: ";
			visitedTotal.innerHTML = visitedCountries.length;

		break;
		case "us-map":
			politicalDivision.innerHTML = "States Visited: ";
			visitedTotal.innerHTML = visitedStates.length;
		break;
		default:
			politicalDivision.innerHTML = "Regions Visited: ";
			visitedTotal.innerHTML = 1;
		break;
	}
}

function clearModal() {
	document.getElementById("modal-text").innerHTML = "";
	console.log("Modal Cleared!");
}

// FOR INITIALIZATION
// TODO: possibly remove for loadMapHighlight(var) Consolidation
function highlightVisitedCountries() {
	visitedCountries.forEach(country => {
		let c = worldMap.querySelector("#" + country);
		c.classList.add("visited");
		c.onclick = function () {
			console.log("modal activation test");
			displayNotes(country, "world-map");
			modal.style.display = "block";
	
		};
		closeModal.onclick = function () {
			clearModal();
			modal.style.display = "none";
		};
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
				clearModal();
			}
		}
	});
}
highlightVisitedCountries();

// FOR INITIALIZATION
// TODO: possibly remove for loadMapHighlight(var) Consolidation
function highlightVisitedStates() {
	visitedStates.forEach(state => {
		let s = usMap.querySelector("#" + state);
		s.classList.add("visited");
		s.onclick = function () {
			console.log("modal activation test");
			displayNotes(state, "us-map");
			modal.style.display = "block";
	
		};
		closeModal.onclick = function () {
			clearModal();
			modal.style.display = "none";
		};
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
				clearModal();
			}
		}
	});
}
highlightVisitedStates();

// FOR RESULT FILTERING
function loadMapHighlight(selection) {
	let divisionToVisit;
	let divisionToRetire;
	let mapToHighlight;
	if (currentMap === "world-map") {
		mapToHighlight = worldMap;
		divisionToVisit = countriesToVisit;
		divisionToRetire = countriesToConsiderRetirement; 
	} else if (currentMap === "us-map") {
		mapToHighlight = usMap;
		divisionToVisit = statesToVisit;
		divisionToRetire = statesToConsiderRetirement;
	}
	switch(selection) {
		case "to-visit":
			divisionToVisit.forEach(division => {
				let d = mapToHighlight.querySelector("#" + division);
				d.classList.add("to-visit");
				d.onclick = function () {
					console.log("modal activation test");
					displayNotes(division, currentMap);
					modal.style.display = "block";
			
				};
				closeModal.onclick = function () {
					clearModal();
					modal.style.display = "none";
				};
				window.onclick = function (event) {
					if (event.target === modal) {
						modal.style.display = "none";
						clearModal();
					}
				}
			});
			break;
		case "to-retire":
			divisionToRetire.forEach(division => {
				let d = mapToHighlight.querySelector("#" + division);
				d.classList.add("to-retire");
				d.onclick = function () {
					console.log("modal activation test");
					displayNotes(division, currentMap);
					modal.style.display = "block";
			
				};
				closeModal.onclick = function () {
					clearModal();
					modal.style.display = "none";
				};
				window.onclick = function (event) {
					if (event.target === modal) {
						modal.style.display = "none";
						clearModal();
					}
				}
			});
		break;
	}
}

function enableMapHighlightButtons () {
	mapHighlightButtons.forEach(button => {
		button.onclick = function () {
			loadMapHighlight(button.value);
			ButtonInterface.buttonOnClick(button);
		}
		button.onmouseenter = function () {
			ButtonInterface.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function () {
			ButtonInterface.buttonOnMouseLeave(button);
		}
	});

}
enableMapHighlightButtons();

function displayNotes(selection, map) {
	switch (map) {
		case "world-map":
			for (let country of countryInformation) {
				if (country.id === selection) {
					modalTitle.textContent = country.name;
					modalText.textContent = country.notes;
				}
			}
			break;
		case "us-map":
			for (let state of usStateInformation) {
				if (state.id === selection) {
					modalTitle.textContent = state.name;
					modalText.textContent = state.notes;
				}
			}
			break;
		default:
			console.log("Note Display Function Triggered");
			break;
	}
}