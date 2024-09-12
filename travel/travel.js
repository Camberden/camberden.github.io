window.onload = () => console.log("Running!");

const mapDisplay = document.getElementById("map-display");
const politicalDivision = document.getElementById("political-division");
const visitedTotal = document.getElementById("visited-total");
const interactiveMaps = document.querySelectorAll(".interactive-map");
const mapDisplayButtons = document.querySelectorAll(".map-display-button");
const worldMap = document.getElementById("world-map");
const usMap = document.getElementById("us-map");

const visitedCountries = ["US", "BZ", "GT"];
visitedTotal.innerHTML = visitedCountries.length;
const countriesToVisit = ["JP", "GM"];
const visitedStates = ["US-PA", "US-NJ", "US-NY", "US-MD", "US-DE", "US-VA", "US-WV", "US-TN", "US-NC", "US-SC", "US-IL", "US-CO", "US-NV"];

function loadInteractiveMaps(selection) {
	interactiveMaps.forEach(interactiveMap => {
		if (interactiveMap.id === selection) {
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
	});
}
enableMapSelectionButtons();

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