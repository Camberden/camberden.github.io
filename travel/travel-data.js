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
	unitedStates = new DivisionInformation("US", "United States of America",`
		<h3>Birthplace and Home</h3>
		<p>I spent considerable time in Pennsylvania, the northern state where I was born.
		Extended visits and my first career took me to New Jersey and New York.
		During my anticipated career change into technology, I headed to West Virginia and Virginia.
		Following that, I moved to NC where I am working a career in public service.</p>
		`
	),
	guatemala = new DivisionInformation("GT", "Guatemala",`
		<h3>Visited: 2012</h3>
		<p>I came here as part of a study trip during my first year in college.
		I didn't stay in the country. Rather, I came across the border from Belize's Cayo District into 
		the Patén area of Guatemala where I experienced the grounds of Tikal, a site of ancient ruins of the Mayan civilization.</p>
		`
	),
	belize = new DivisionInformation("BZ", "Belize",`
		<h3>Visited: 2012</h3>
		<p>I came here as part of a study trip during my first year in college.
		I stayed in San Ignacio in the jungled Cayo District, and later in Hopkins Village on the coast in Stann Creek District.
		I explored the jungle and the Mayan ruins of Xinantunich.</p>
		`
	),
	canada = new DivisionInformation("CA", "Canada",
		``
	),
	aruba = new DivisionInformation("AW", "Aruba",
		``
	),
	bermuda = new DivisionInformation("BM", "Bermuda",
		``
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
		`
	),
	argentina = new DivisionInformation("AR", "Argentina",
		``
	),
	uruguay = new DivisionInformation("UY", "Uruguay",
		``
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
		`
	),
	// ----- EUROPE ----- //
	iceland = new DivisionInformation("IS", "Iceland",
		``
	),
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
	namibia = new DivisionInformation("NA", "Namibia",
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
		`
	),
	indonesia = new DivisionInformation("ID", "Indonesia",
		``
	),
	singapore = new DivisionInformation("SG", "Singapore",
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
	florida = new DivisionInformation("US-FL", "Florida",
		``
	),
];