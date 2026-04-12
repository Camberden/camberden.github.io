/* ===> MAINFRAME.JS ===> */

CMBRutil.wireDefaultButtons();

document.addEventListener('DOMContentLoaded', function () {
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		timeZone: 'UTC',
		initialView: 'multiMonthYear',
		multiMonthMaxColumns: 6,
		multiMonthMinWidth: 200,
		height: 600,
		editable: true,
		events: 'https://fullcalendar.io/api/demo-feeds/events.json'
	});

	calendar.render();
});


/**
 * @param {Number} points active duty points
 * @param {Number} base base rank salary
 * @description 
 * 1 point for each day of active service (180 for Vet status, so 180)
 * 1 point for each attendance at a drill period (12 for the year?)
 * 1 point for each day of performing funeral honors duty
 * 15 points for each year of membership in a reserve component
 * O-1 Ensign <2years = $533.12 Base Weekend Drill Pay
 */
function reservesPointsSystem(points, base) {
	return ((points / 360) * 0.025) * base;
}

console.log(reservesPointsSystem(500, 50000));
console.log(reservesPointsSystem(1000, 50000));
console.log(reservesPointsSystem(2500, 50000));
console.log(reservesPointsSystem(5000, 50000));
console.log(reservesPointsSystem(7000, 50000));