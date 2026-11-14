
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
			color: 'indianred',
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
			radius: 80,
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