window.onload = () => console.log("Running!");

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
const countriesToVisit = ["JP", "NZ", "CA", "GB", "DE", "MU", "PL", "TH", "IN", "CO", "PY", "AR", "UY"];
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

function highlightVisitedCountries() {
	visitedCountries.forEach(country => {
		let c = worldMap.querySelector("#" + country);
		c.classList.add("visited");
		// Add more functionality.
	});
}
highlightVisitedCountries();

function highlightVisitedStates() {
	visitedStates.forEach(state => {
		let s = usMap.querySelector("#" + state);
		s.classList.add("visited");
		// Add more functionality.
	});
}
highlightVisitedStates();

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
				// Add more functionality.
			});
			break;
		case "to-retire":
			divisionToRetire.forEach(division => {
				let d = mapToHighlight.querySelector("#" + division);
				d.classList.add("to-retire");
				// Add more functionality.
			});
		break;
	}
}

function enableMapHighlightButtons () {
	mapHighlightButtons.forEach(button => {
		button.onclick = function () {
			loadMapHighlight(button.value);
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
