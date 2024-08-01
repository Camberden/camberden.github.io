window.onload = () => console.log("Running!");

const modal = document.getElementById("info-modal");
document.getElementById("close-modal").onclick = function () {
	modal.style.display = "none";
};

// ---------- TRACK CLASS AND TRACKS ---------- //


// TRY MOCHA'S PARAM TAG BASED SEGREGATION TO STREAMLINE NEW ADDITIONS

/**
	 * @param {string} title
	 * @param {number} year
	 * @param {string} compilation
	 * @param {string} audioFileLink
	 * @param {boolean} completeOrIncomplete
	 * @param {boolean} lyricalOrInstrumental
	 */
class Track {
	constructor(title, year, compilation, audioFileLink, completeOrIncomplete, lyricalOrInstrumental) {
		this.title = title;
		this.year = year;
		this.compilation = compilation;
		this.audioFileLink = audioFileLink;
		this.completeOrIncomplete = completeOrIncomplete;
		this.lyricalOrInstrumental = lyricalOrInstrumental;
	}
}

const tracks = [ // ../assets/music-
	trackMeaning = new Track("Meaning", 2021, "The Rush of Feeling", "../assets/music-meaning.mp3", true, true),
	trackTheWarOfArt = new Track("The War of Art", 2020, "Draft Compendium", "../assets/music-the-war-of-art.mp3", true, false),
	trackForTheVision = new Track("For the Vision", 2019, "Draft Compendium", "../assets/music-for-the-vision.mp3", true, true),
	trackTheDeficitOfPatience = new Track("The Deficit of Patience", 2019, "Draft Compendium", "../assets/music-the-deficit-of-patience.mp3", false, true),
	trackSixthMissionThrowback = new Track("Sixth Mission Throwback", 2020, "Draft Compendium", "../assets/music-sixth-mission-throwback.mp3", true, false),
	trackSixthMission = new Track("Sixth Mission", 2010, "The Later Days of MusicalYoshi", "../assets/music-sixth-mission.m4a", true, false),
	trackAGamesPostlude = new Track("A Game's Postlude", 2012, "The Later Days of MusicalYoshi", "../assets/music-a-games-postlude.mp3", true, false),
	trackFirstDungeon = new Track("First Dungeon", 2010, "The Later Days of MusicalYoshi", "../assets/music-first-dungeon.mp3", true, false),
	trackSecondCommune = new Track("Second Commune", 2008, "The Early Days of MusicalYoshi", "../assets/music-second-commune.m4a", true, false),
	trackSuperScapegraceOriginal = new Track("SUPER Scapegrace (Original)", 2008, "The Early Days of MusicalYoshi", "../assets/music-super-scapegrace-original.m4a", true, false),
	trackSuperScapegrace = new Track("SUPER Scapegrace", 2016, "Audioshi Isle", "../assets/music-super-scapegrace.mp3", true, false),
	trackBlueberryBeach = new Track("Blueberry Beach", 2016, "Audioshi Isle", "../assets/music-blueberry-beach.mp3", true, false),
	trackFruityFrolicField = new Track("Fruity Frolic Field", 2016, "Audioshi Isle", "../assets/music-fruity-frolic-field.mp3", true, false),

];



const trackBarrier = `<div class="track-barrier"></div>`;
const trackPlayButtonBreak = `<br>`;

const createMusicTable = function(){

	tracks.forEach(track => { 

		const trackPlayButton = `<br><audio preload="none" controls>
		<source src="${track.audioFileLink}" type="audio/mpeg">
		Your browser does not support the audio element. </audio><br>`;
	
		// DON'T FORGET THAT I COULD SEND THESE VALUES TO OTHER ELEMENTS
	
		document.getElementById("music-table-div").innerHTML +=
			` 
			${track.title}
			${track.year}
			${track.compilation} <br>
			${track.completeOrIncomplete ? "Complete" : "Incomplete"}
			${track.lyricalOrInstrumental ? "Lyrical" : "Instrumental"}
			${trackPlayButtonBreak}
			${trackPlayButton}
			${trackBarrier}
			`;
	});
}
createMusicTable();