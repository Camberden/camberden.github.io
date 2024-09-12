window.onload = () => console.log("Running!");

const worldMap = document.getElementById("world-map");
const visitedCountries = ["US", "BZ", "GT"];
const countriesToVisit = ["JP", "GM"];

function highlightVisitedCountries() {

	visitedCountries.forEach(country => {
		let c = worldMap.querySelector("#" + country);
		c.classList.add("visited-country");
		c.onmouseover = function () {
			document.getElementById("country-hovered").innerHTML = c.id;
		};
		c.onmouseleave = function() {
			document.getElementById("country-hovered").innerHTML = "";
		}
		// Add more functionality.
	});

}
highlightVisitedCountries();