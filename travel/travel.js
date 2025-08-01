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

const visitedCountries = ["US", "BZ", "GT", "JP"];
const countriesToVisit = ["NZ", "IS", "CA", "GB", "DE", "MU", "PL", "TH", "IN", "CO", "PY", "AR", "UY", "AU", "NA", "ID", "SG", "MU", "LK", "MV", "AW", "BM"];
const countriesToConsiderRetirement = ["US", "CO", "PY", "UY", "JP"];
const statesToConsiderRetirement = ["US-NC", "US-PA"];
const visitedStates = ["US-PA", "US-NJ", "US-NY", "US-MD", "US-DE", "US-VA", "US-WV", "US-TN", "US-NC", "US-SC", "US-GA", "US-IL", "US-CO", "US-NV"];
const statesToVisit = ["US-CA", "US-ND", "US-AK", "US-VT", "US-FL"];

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

// Attempt at SVG parsing
function parseSVG(svg) {

	const { xMin, xMax, yMin, yMax } = [...svg.children].reduce((acc, el) => {
	const { x, y, width, height } = el.getBBox();
	console.log(el.getBBox());
		if (!acc.xMin || x < acc.xMin){
			acc.xMin = x;
		} 
		if (!acc.xMax || x + width > acc.xMax) {
			acc.xMax = x + width;
		} 
		if (!acc.yMin || y < acc.yMin) {
			acc.yMin = y;
		} 
		if (!acc.yMax || y + height > acc.yMax) {
			acc.yMax = y + height;
		}
		// console.log(acc);
		return acc;
		
	}, {});

	// const geoViewBox = `${xMin} ${yMin} ${xMax - xMin} ${yMax - yMin}`;
	const viewbox = `${xMin} ${yMin} ${xMax - xMin} ${yMax - yMin}`;

	// svg.setAttribute("mapsvg:geoviewbox", geoViewBox);
	svg.setAttribute("viewBox", viewbox);
}

function displaySVGwithinNotes(division, id) {
	let inlineNotesSVG = "";
	const pathTag = document.getElementById(id).outerHTML;
	console.log(pathTag);

	const worldMapWrapper = `
				<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <svg id="world-map-inline" class="interactive-map" xmlns:mapsvg="http://mapsvg.com"
				xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
				xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
				mapsvg:geoViewBox="-169.110266 83.600842 190.486279 -58.508473" width="1009.6727" height="665.96301">
				`;

	const usMapWrapper = `
				<?xml version="1.0" encoding="UTF-8" standalone="no"?>
               	<svg id="us-map-inline" class="interactive-map" xmlns:mapsvg="http://mapsvg.com"
				xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
				xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
				mapsvg:geoViewBox="-127.55272679845754 50.66828705652597 -64.54920772895363 24.335873369454947"
				viewBox="477 421 593.3779761904764 318.2870370370371" width="593.3779761904764"
                height="318.2870370370371">
				`;

	const svgCloser = `</svg>`;

	switch (division) {
		case "country":
			inlineNotesSVG = worldMapWrapper + pathTag + svgCloser;
		break;
		case "state":
			inlineNotesSVG = usMapWrapper + pathTag + svgCloser;
		break;
		default:
			console.log("Notes SVG");
		break;
	}
	return inlineNotesSVG;
}

function displayNotes(selection, map) {
	switch (map) {
		case "world-map":
			for (let country of countryInformation) {
				if (country.id === selection) {
					modalTitle.textContent = country.name;
					modalText.innerHTML = country.notes;
					// document.getElementById("svg-input").innerHTML = displaySVGwithinNotes("state", "US-PA");
					// let shape = document.querySelector("svg#us-map-inline");
					// parseSVG(shape);
				}
			}
			break;
		case "us-map":
			for (let state of usStateInformation) {
				if (state.id === selection) {
					modalTitle.textContent = state.name;
					modalText.innerHTML = state.notes;
				}
			}
			break;
		default:
			console.log("Note Display Function Triggered");
			break;
	}
}