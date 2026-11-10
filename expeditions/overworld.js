/**
 * @typedef {Array<number[]>} coordinates
 */

/**
 * @param {string} title
 * @param {Array<String, coordinates>} boundaries
 * @param {Array<String, coordinates>} zones
 */
class Overworld {
	constructor(title, boundaries, expeditions,) {
		this.title = title;
		this.boundaries = boundaries;
		this.zones = expeditions;
	}
}

const expeditionsDump = [
	["Milton Dan River", [36.540795, -79.215094],],
	["Hyco Lake", [36.472599, -79.122269],],
];

const farringtonOverworldBoundaries = [
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
* @type {Array<String, coordinates>} String title with coordinates
*/
const farringtonOverworldZones = [
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
* @type {Array<String, coordinates>} String title with coordinates
*/
const occoneecheeLandBoundaries = [
	["Snake Fire Trail & US-70", [36.075768, -79.156052],],
	["Panther & Eno", [36.109328, -79.149291],],
	["The Pleasant Hill", [36.12213, -79.043999],],
	["Shakori & Ridge at Eno", [36.092156, -79.004849]],
	["Off Cox Trail to Redding near Eno", [36.082696, -79.037599]],
	["Eno Trace Wilderness", [36.080000, -79.050000]],
	["Secret Rippy Lane", [36.039817, -79.101361,],],
	["Sevenmile Creek Bend", [36.060245, -79.153068]],
];


/**
* @type {Array<String, coordinates>} String title with coordinates
*/
const occoneecheeLandZones = [
	["Bamboo Grove 1", [36.07014, -79.110808]],
	["Eno Mountain Ascent", [36.066949, -79.11525]],
	["Occoneechee Overlook", [36.065034, -79.11839]],
];

/**
 * @type {Array<Overworld>} Array of overworlds for expeditions
 */
const expeditionOverworlds = [
	new Overworld("Farrington Overworld", farringtonOverworldBoundaries, farringtonOverworldZones),
	new Overworld("Occoneechee Land", occoneecheeLandBoundaries, occoneecheeLandZones),
];

function getOverworldByTitle(title) {
	return expeditionOverworlds.find(overworld => overworld.title === title);
};