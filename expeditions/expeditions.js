// ===> EXPEDITIONS MAP ===>

/**
 * @typedef {Array<number[]>} coordinates
 */

const expeditionsMapTitle = document.getElementById("expeditions-map-title");
const expeditionsMap = L.map("expeditions-map");
let expeditionsMapMarker;
let expeditionsRegionPolygon = [];
let currentOverworldTitle;

/**
 * 
 * @param {Array<[String, coordinates]>} polygon String title with coordinates
 * @returns {coordinates} regionCoords;
 */
function getBorders(polygon) {
	console.log(polygon.length);
	const regionCoords = [polygon.length];
	for (let i = 0; i < polygon.length; i++) {
		regionCoords[i] = polygon[i][1];
	};
	console.log(typeof regionCoords);
	console.log(regionCoords);
	return regionCoords;
}

/**
 * @param {Overworld[]} overworlds 
 */
function initExpeditionsMap(overworlds) {
	const latLng = overworlds[0].zones[0][1];
	expeditionsMap.setView(latLng, 13);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(expeditionsMap);

	const expeditionsMapMarkerOptions = {
		title: "Locale",
		clickable: true,
		draggable: true
	};
	expeditionsMapMarker = L.marker(latLng, expeditionsMapMarkerOptions).addTo(expeditionsMap);



	for (const overworld of overworlds) {

		/**
		  * @type {coordinates} expeditionsMapBounds
		  */
		let expeditionsMapBounds = getBorders(overworld.boundaries);

		overworld.boundaries.forEach(coord => {
			const vertex = L.circle(coord[1], {
				radius: 100,
				color: 'indianred',
				fillOpacity: 0.5,
				fillColor: 'burlywood',

			});
			vertex.bindPopup(`<b>${coord[0]}</b><br>${coord[1]}`).openPopup();
			vertex.addTo(expeditionsMap);
		});

		let expeditionsRegionBorders = L.polygon(expeditionsMapBounds, {
			color: 'burlywood',
			fillOpacity: 0.2,
			fillColor: 'burlywood',
		}).addTo(expeditionsMap);

		overworld.zones.forEach(coord => {
			const circle = L.circle(coord[1], {
				radius: 80,
				color: 'orangered',
				fillOpacity: 0.3,
				fillColor: 'var(--cmbr-indigo)',
			});
			circle.bindPopup(`<b>${coord[0]}</b><br>${coord[1]}`).openPopup();
			circle.addTo(expeditionsMap);
		});
	}
	expeditionsMap.on('click', onMapClick);

	expeditionsMap.setView(latLng, 13);
	// expeditionsMap.fitBounds(expeditionsRegionBorders.getBounds());

};

// ! Useful |=====>
/* 
	bounds.contains(pointOrBounds) returns true when the bounds fully contain a point or another bounds object;
	bounds.intersects(otherBounds) test whether they share any point
*/

// let localeFind = '___';
// let coordsFind = '___';

/**
 * 
 * @param {String} locale 
 * @param {coordinates} latLng
 */
function findLocale(locale, latLng) {
	expeditionsMap.flyTo(latLng);
	expeditionsMapMarker.remove();
	expeditionsMapMarker = L.marker(latLng).addTo(expeditionsMap);
	expeditionsMapMarker.bindPopup((`<b>${locale}</b><br>` + latLng.toString()), {
		className: "leaf-popup",
	}).openPopup();
};

/**
 * @param {string} locale
 * @param {HTMLElement} updateId
 * @description Updates the expeditions locale bar with the given locale and coordinates.
 */
function updateExpeditionsLocaleBar(locale, updateId) {
	document.getElementById(updateId).innerHTML = locale;
};

function onMapClick(e) {
	const popup = L.popup();
	popup
		.setLatLng(e.latlng)
		.setContent(`<slot class="grid-row-1-1" style="color: indianred;"><i>Coordinates</i>` + e.latlng.toString().substring(e.latlng.toString().indexOf("(") + 1, e.latlng.toString().indexOf(")")) +
			`<div style="border: 0.3rem groove var(--cmbr-blass); border-bottom-right-radius: 50%; border-top-left-radius: 15%;` +
			`border-left-width: 0rem; border-top-width: 0rem;` +
			`background-image: url('../assets/artifacts/chrispy-headshot-2.jpg'); opacity: 90%; width:3rem; height:3rem; ` +
			`box-shadow:  0.1rem 0.1rem 0.5rem 0.1rem var(--cmbr-indigo);` +
			`background-size: contain; right: 0; margin-inline-start: 70%;"></div></slot>`)
		.openOn(expeditionsMap);
}
function setCurrentOverworld(ovTitle) {
	currentOverworldTitle = ovTitle;
	initExpeditionsMap(getOverworldByTitle(ovTitle));
}


(console.log("|=====| START |=====|=====>"), async () => {

	initExpeditionsMap(expeditionOverworlds);
	// setCurrentOverworld(expeditionOverworlds[0].title);

	// console.log("https://www.youtube.com/watch?v=6uNkTqNSulY".split("v=")[1]);
	// collectJSconfigs(canSupportIndexedDB());

})(console.log("|=====| END |=====|"));