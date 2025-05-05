/* exported travelData */

/**
 *  @param {string} id - id value from map SVG's
 *  @param {string} name - name of political division in prose
 *  @param {string[]} notes - complete description, including HTML tags
 */ 
class DivisionInformation {
	constructor(id, name, notes) {
		this.id = id;
		this.name = name;
		this.notes = notes;
	}
}

/* ----- COUNTRIES ----- */

const countryInformation = [
	// ----- NORTH AMERICA ----- //
	unitedStates = new DivisionInformation("US", "United States of America",
		`My birthplace and home.`
	),
	guatemala = new DivisionInformation("GT", "Guatemala",
		``
	),
	belize = new DivisionInformation("BZ", "Belize",
		``
	),
	canada = new DivisionInformation("CA", "Canada",
		``
	),
	// ----- SOUTH AMERICA ----- //
	colombia = new DivisionInformation("CO", "Colombia",
		``
	),
	argentina = new DivisionInformation("AR", "Argentina",
		``
	),
	uruguay = new DivisionInformation("UY", "Uruguay",
		``
	),
	paraguay = new DivisionInformation("PY", "Paraguay",
		``
	),
	// ----- EUROPE ----- //
	unitedKingdom = new DivisionInformation("GB", "United Kingdom",
		``
	),
	germany = new DivisionInformation("DE", "Germany",
		``
	),
	poland = new DivisionInformation("PL", "Poland",
		``
	),
	// ----- AFRICA ----- //
	mauritius = new DivisionInformation("MU", "Mauritius",
		``
	),
	// ----- ASIA ----- //
	india = new DivisionInformation("IN", "India",
		``
	),
	sriLanka = new DivisionInformation("LK", "Sri Lanka",
		``
	),
	maldives = new DivisionInformation("MV", "Maldives",
		``
	),
	thailand = new DivisionInformation("TH", "Thailand",
		``
	),
	japan = new DivisionInformation("JP", "Japan",
		``
	),
	indonesia = new DivisionInformation("ID", "Indonesia",
		``
	),
	singapore = new DivisionInformation("SP", "Singapore",
		``
	),
	// ----- OCEANIA ----- //
	australia = new DivisionInformation("AU", "Australia",
		``
	),
	newZealand = new DivisionInformation("NZ", "New Zealand",
		``
	),

];

/* ----- US STATES ----- */

const usStateInformation = [

	pennsylvania = new DivisionInformation("US-PA", "Pennsylvania",
		``
	),
	newYork = new DivisionInformation("US-NY", "New York",
		``
	),
	newJersey = new DivisionInformation("US-NJ", "New Jersey",
		``
	),
	maryland = new DivisionInformation("US-MD", "Maryland",
		``
	),
	virginia = new DivisionInformation("US-VA", "Virginia",
		``
	),
	westVirginia = new DivisionInformation("US-WV", "West Virginia",
		``
	),
	tennessee = new DivisionInformation("US-TN", "Tennessee",
		``
	),
	illinois = new DivisionInformation("US-IL", "Illinois",
		``
	),
	northCarolina = new DivisionInformation("US-NC", "North Carolina",
		``
	),
	southCarolina = new DivisionInformation("US-SC", "South Carolina",
		``
	),
	georgia = new DivisionInformation("US-GA", "Georgia",
		``
	),
	colorado = new DivisionInformation("US-CO", "Colorado",
		``
	),
	nevada = new DivisionInformation("US-NV", "Nevada",
		``
	),
	vermont = new DivisionInformation("US-VT", "Vermont",
		``
	),
	northDakota = new DivisionInformation("US-ND", "North Dakota",
		``
	),
	california = new DivisionInformation("US-CA", "California",
		``
	),
];