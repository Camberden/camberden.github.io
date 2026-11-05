// ===> EXPEDITIONS MAP ===>
/**
 * @typedef {Array<number[]>} coordinates
 */

const expeditionsMapTitle = document.getElementById("expeditions-map-title");
const expeditionsMap = L.map("expeditions-map");
let expeditionsMapMarker;
let expeditionsRegionPolygon = [];
/**
 * @type {Array<String, coordinates>}
 */
const expeditionsRegion = [
	// [35.885365, -79.018313],
	// II Mason Farm Trail & Old Farm Trail

	["Durham City limits beyond Jordan dam at Farrington Road", [35.887972, -78.988072],],
	// II Durham City limits beyond Jordan dam at Farrington Road
	// ["6911 Farrington Road, woods at Church, Water Rec", [35.897765, -78.988226],], 
	// [35.889624, -78.961689], 
	// Eagle Spur
	["ATT Masey Creek", [35.895108, -78.953354],],
	// ["Herndon Farm Masey Creek", [35.902226, -78.929038],],
	// Tobacco Road Masey Creek
	// [35.868902, -78.937111], 
	// ["Crisp Road, Magic Hollow Creek / ATT", [35.87003, -78.935681],],
	["Northeast Creek, Grandale", [35.871499, -78.914751],],
	// ["Future Kit Creek Park", [35.852361, -78.899438],],
	["ATT New Hope Church", [35.814090, -78.925183],],
	["Martha's Chapel", [35.78842, -78.964179],],
	// ["ATT White Oak", [35.784625, -78.920171],],
	// ["ATT Green Level", [35.773930, -78.923219],],
	// ["Mount Pisgah's Lick Branch ", [35.810575, -78.94568],],
	["Farrington, South of Martha's", [35.782327, -79.01782],], // At Holland's Church, Farrington
	["Jack Bennett & Big Woods, Herndon Creek", [35.815817, -79.047076],], // Jack Bennett & Big Woods, Herndon Creek

	["Top of Unnamed Trail", [35.871416, -79.008039],],

];

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
 * @param {Array<String, coordinates>} overview String title with coordinates
 */
const farringtonOverview = [
	["Outset Overlook", [35.789656, -79.005929],],
	["Wisteria Cypress Zone", [35.79241, -79.00936],],
	["Pineconebird Island", [35.79611, -79.00990],],
	["Game Land Descent", [35.79194, -78.99968],],
	["Kippigrove", [35.79620, -78.99348],],
	["Lick Branch Swamp Forest", [35.80689, -78.98007],], // lick branch swamp forest
	["Emergent Peninsula", [35.81905, -78.97786],],
	["Bamboo Grove 2", [35.801900, -79.012363],],
	["Lystra Vista", [35.817500, -79.028789],],
	["Overcup Coast", [35.813298, -79.028510],],
	["Indian Creek Cypress Spikes", [35.815377, -78.975158],],
];

/**
 * @type {coordinates}
 */
const occoneecheeLand = [
	["Bamboo Grove 1", [36.07014, -79.110808]],
	["Eno Mountain Ascent", [36.066949, -79.11525]],
	["Occoneechee Overlook", [36.065034, -79.11839]],
];


/**
 * @param {Array<[String, coordinates]>} overview String title with coordinates
 */
function initExpeditionsMap(overview) {
	const latLng = overview[0][1];
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
	let expeditionsMapBounds = getBorders(expeditionsRegion);

	expeditionsRegion.forEach(coord => {
		const vertex = L.circle(coord[1], {
			radius: 100,
			color: 'darkred',
			fillOpacity: 1,
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



	farringtonOverview.forEach(coord => {
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


(console.log("|=====| START |=====|=====>"), async () => {

	initExpeditionsMap(farringtonOverview);

	// console.log("https://www.youtube.com/watch?v=6uNkTqNSulY".split("v=")[1]);
	// collectJSconfigs(canSupportIndexedDB());

})(console.log("|=====| END |=====|"));