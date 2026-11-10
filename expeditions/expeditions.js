// ===> EXPEDITIONS MAP ===>
/**
 * @typedef {Array<number[]>} coordinates
 */



const expeditionsMapTitle = document.getElementById("expeditions-map-title");
const expeditionsMap = L.map("expeditions-map");
let expeditionsMapMarker;
let expeditionsRegionPolygon = [];

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
 * @param {Overworld} overworld 
 */
function initExpeditionsMap(overworld) {
	const latLng = overworld.zones[0][1];
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


	/**
	  * @type {coordinates} expeditionsMapBounds
	  */
	let expeditionsMapBounds = getBorders(overworld.boundaries);

	overworld.boundaries.forEach(coord => {
		const vertex = L.circle(coord[1], {
			radius: 100,
			color: 'darkred',
			fillOpacity: 0.5,
			fillColor: 'burlywood',

		});
		vertex.bindPopup(`<b>${coord[0]}</b><br>${coord[1]}`).openPopup();
		vertex.addTo(expeditionsMap);
	});

	const expeditionsRegionBorders = L.polygon(expeditionsMapBounds, {
		color: 'burlywood',
		fillOpacity: 0.2,
		fillColor: 'burlywood',
	}).addTo(expeditionsMap);



	overworld.zones.forEach(coord => {
		const circle = L.circle(coord[1], {
			radius: 50,
			color: 'orangered',
			fillOpacity: 0.3,
			fillColor: 'var(--cmbr-indigo)',
		});
		circle.bindPopup(`<b>${coord[0]}</b><br>${coord[1]}`).openPopup();
		circle.addTo(expeditionsMap);

	});
	expeditionsMap.on('click', onMapClick);

	// expeditionsMap.setView(latLng, 13);
	expeditionsMap.fitBounds(expeditionsRegionBorders.getBounds());

};

/**
 * 
 * @param {String} locale 
 */
function findLocale(locale, latLng) {
	expeditionsMap.flyTo(latLng);
	expeditionsMapMarker.remove();
	expeditionsMapMarker = L.marker(latLng).addTo(expeditionsMap);
	expeditionsMapMarker.bindPopup((`<b>${locale}</b><br>` + latLng.toString()), {
		className: "leaf-popup",
	}).openPopup();
};

function onMapClick(e) {
	const popup = L.popup();
	popup
		.setLatLng(e.latlng)
		.setContent("<i>Coordinates</i></br>" + e.latlng.toString().substring(e.latlng.toString().indexOf("(") + 1, e.latlng.toString().indexOf(")")))
		.openOn(expeditionsMap);
}

function selectOverworld(index) {
	selectedOverworld = index;
	initExpeditionsMap(expeditionOverworlds[index]);
}


(console.log("|=====| START |=====|=====>"), async () => {

	initExpeditionsMap(expeditionOverworlds[0]);

	// console.log("https://www.youtube.com/watch?v=6uNkTqNSulY".split("v=")[1]);
	// collectJSconfigs(canSupportIndexedDB());

})(console.log("|=====| END |=====|"));