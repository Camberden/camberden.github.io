/* exported travelData */

/**
 *  @param {string} id - id value from map SVG's
 *  @param {string} name - name of political division in prose
 *  @param {string[]} notes - complete description, including HTML tags
 *  @param {Array[number]} position - latitude & longitude
 */ 
class DivisionInformation {
	constructor(id, name, notes, position) {
		this.id = id;
		this.name = name;
		this.notes = notes;
		this.position = position;
	}
}


/* ----- COUNTRIES ----- */

const countryInformation = [
	// ----- NORTH AMERICA ----- //
	unitedStates = new DivisionInformation("US", "United States of America",`
		<h3>Birthplace and Home</h3>
		<p>I spent considerable time in Pennsylvania, the northern state where I was born.
		Extended visits and my first career took me to New Jersey and New York.
		During my anticipated career change into technology, I headed to West Virginia and Virginia.
		Following that, I moved to NC where I am working a career in public service.</p>
		`, [39.095963, -99.671267]
	),
	guatemala = new DivisionInformation("GT", "Guatemala",`
		<h3>Visited: 2012</h3>
		<p>I came here as part of a study trip during my first year in college.
		I didn't stay in the country. Rather, I came across the border from Belize's Cayo District into 
		the Patén area of Guatemala where I experienced the grounds of Tikal, a site of ancient ruins of the Mayan civilization.</p>
		`, [14.902322, -90.551096]
	),
	belize = new DivisionInformation("BZ", "Belize",`
		<h3>Visited: 2012</h3>
		<p>I came here as part of a study trip during my first year in college.
		I stayed in San Ignacio in the jungled Cayo District, and later in Hopkins Village on the coast in Stann Creek District.
		I explored the jungle and the Mayan ruins of Xinantunich.</p>
		`, [17.434511, -88.429146]
	),
	canada = new DivisionInformation("CA", "Canada",
		``, [53.748711, -96.858128]
	),
	aruba = new DivisionInformation("AW", "Aruba",
		``, [12.541159, -70.000413]
	),
	bermuda = new DivisionInformation("BM", "Bermuda",
		``, [32.294098, -64.769212]
	),
	// ----- SOUTH AMERICA ----- //
	colombia = new DivisionInformation("CO", "Colombia",`
		<h3>Not Visited; Planning for 2026</h3>
		<p>I would like to begin my journey in Colombia in the capital Bogotá where I have family roots.
		Among the locations to visit are the Candelaria and Monserrate.</p>
		<h3>On Retirement</h3>
		<p>As of 07/31/2025, Colombian residency is fairly approachable but citizenship is lengthy. 
		I would have to invest $114000 (350x current Colombian minimum wage) into a property in order to
		attain permanent residency which then must be held for 5 years for citizenship and passport.
		I without the investment in a place, I could get a retirement visa when retired. That would be
		a 3 year visa to be renewed during the last year. I would need to need to maintain this visa status
		for 5 total years before applying for permanent residency which must be held for another 5 years
		to acquire citizenship.</p>
		`, [4.605514, -74.055565]
	),
	argentina = new DivisionInformation("AR", "Argentina",
		``, [-31.400535, -64.198704]
	),
	uruguay = new DivisionInformation("UY", "Uruguay",
		``, [-33.382146, -56.518509]
	),
	paraguay = new DivisionInformation("PY", "Paraguay", `
		<h3>Not Visited; Planning for 2027</h3>
		<p>I would like to begin my journey in Paraguay in the capital Asunción where I could also handle
		paperwork early if I so desire to pursue residency, being that it is so transparent. This will enable 
		me to conduct many civil functions in the country, including work. It'll be a decent plan B location if 
		further conflict arrises in the global North.</p>
		<h3>On Retirement</h3>
		<p>As of 07/31/2025, Paraguayan residency is simple and workable. One visit is required
		to complete paperwork and processing for 2 years or 24 months of temporary residency.
		During the last three months, months 21-24, one could apply for permanent residency which
		requires at least one full day of physical presence within a three-year period to maintain.
		After 3 years of permanent residency, one could apply for citizenship and attain a passport.</p>
		<h3>Note Dump</h3>
			<p>Property 
			- properstar.com
			- https://www.properstar.com/listing/109889150
			- https://www.properstar.com/listing/108426941
			- infocasas.com.py
			- https://larespy.com
			- https://www.zuba.com.py
			- https://www.youtube.com/watch?v=tz_0j8OMpZ8

			~ ₲ 350,000 /mo gated community fee
			~ Electricity bill from state

			Residency: 
			- https://paraguayresidencyservices.com
			- https://ourlifeinparaguay.com/resources/
			- https://www.resideparaguay.com/home
			- https://plan-b-paraguay.com
			</p>
		`, [-25.316718, -57.380832]
	),
	// ----- EUROPE ----- //
	iceland = new DivisionInformation("IS", "Iceland",
		``, [64.997939, -17.729042]
	),
	unitedKingdom = new DivisionInformation("GB", "United Kingdom",
		``, [52.48278, -1.181378]
	),
	germany = new DivisionInformation("DE", "Germany",
		``, [51.618017, 10.507655]
	),
	poland = new DivisionInformation("PL", "Poland",
		``, [51.835778, 19.435436]
	),
	// ----- AFRICA ----- //
	mauritius = new DivisionInformation("MU", "Mauritius",
		``, [-20.24416, 57.572678]
	),
	namibia = new DivisionInformation("NA", "Namibia",
		``, [-19.973349, 16.01907]
	),
	// ----- ASIA ----- //
	india = new DivisionInformation("IN", "India",
		``, [21.943046, 78.598712]
	),
	sriLanka = new DivisionInformation("LK", "Sri Lanka",
		``, [7.798079, 80.750477]
	),
	maldives = new DivisionInformation("MV", "Maldives",
		``, [4.20022, 73.534768]
	),
	thailand = new DivisionInformation("TH", "Thailand",
		``, [14.604847, -258.979695]
	),
	japan = new DivisionInformation("JP", "Japan",
		`
		<h3>Visited: 2025</h3>
		<br>
		<p>Visited Tokyo, Kyoto, Nara, & Osaka. Details to come.</p>
		<br>
		<h3>On Retirement</h3>
		<p>As of 07/31/2025, I did some reflection and it looks as if Japan is leaning towards heightened 
		restrictions on foreigners in response to trends in immigration throughout the global North.
		Among the considerations of the new government are restoring imperial powers, ending non-citizen 
		property ownership, and ending foreign residency to include that for retirees. Given that Japan 
		has been among my retirement ideas, the likelihood of retiring here, say, come 2044, may decrease.</p>
		`, [36.509636, -220.83813]
	),
	indonesia = new DivisionInformation("ID", "Indonesia",
		``, [-8.428904, -244.759955]
	),
	singapore = new DivisionInformation("SG", "Singapore",
		``, [1.323048, -256.150772]
	),
	// ----- OCEANIA ----- //
	australia = new DivisionInformation("AU", "Australia",
		``, [-24.846565, 135.535945]
	),
	newZealand = new DivisionInformation("NZ", "New Zealand",
		``, [-39.027719, -184.000806]
	),
];

/* ----- US STATES ----- */

const usStateInformation = [

	pennsylvania = new DivisionInformation("US-PA", "Pennsylvania",
		`Birthplace.`
	),
	newYork = new DivisionInformation("US-NY", "New York",
		`School from 2015 to 2017.`
	),
	newJersey = new DivisionInformation("US-NJ", "New Jersey",
		`Workplace from 2019 to 2020.`
	),
	maryland = new DivisionInformation("US-MD", "Maryland",
		`Frequenty crossed.`
	),
	delaware = new DivisionInformation("US-DE", "Delaware",
		`Frequenty crossed.`
	),
	virginia = new DivisionInformation("US-VA", "Virginia",
		`Workplace in 2020.`
	),
	westVirginia = new DivisionInformation("US-WV", "West Virginia",
		`Workplace in 2019.`
	),
	tennessee = new DivisionInformation("US-TN", "Tennessee",
		`Occassionally crossed.`
	),
	illinois = new DivisionInformation("US-IL", "Illinois",
		`Occassionally visited.`
	),
	northCarolina = new DivisionInformation("US-NC", "North Carolina",
		`Residence from 2020 to present.`
	),
	southCarolina = new DivisionInformation("US-SC", "South Carolina",
		`Occassionally visited.`
	),
	georgia = new DivisionInformation("US-GA", "Georgia",
		``
	),
	colorado = new DivisionInformation("US-CO", "Colorado",
		``
	),
	nevada = new DivisionInformation("US-NV", "Nevada",
		`Visited June 2024.`
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
	florida = new DivisionInformation("US-FL", "Florida",
		``
	),
];
