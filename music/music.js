window.onload = () => console.log("Running!");

const modal = document.getElementById("info-modal");
document.getElementById("close-modal").onclick = function () {
	modal.style.display = "none";
};

// ---------- TRACK CLASS AND TRACKS ---------- //

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
	trackSuperScapegrace = new Track("SUPER Scapegrace", 2016, "Audioshi Isle", "../assets/music-super-scapegrace.mp3", true, false),
	trackBlueberryBeach = new Track("Blueberry Beach", 2016, "Audioshi Isle", "../assets/music-blueberry-beach.mp3", true, false),
	trackFruityFrolicField = new Track("Fruity Frolic Field", 2016, "Audioshi Isle", "../assets/music-fruity-frolic-field.mp3", true, false),
	trackSixthMissionThrowback = new Track("Sixth Mission Throwback", 2020, "Draft Compendium", "../assets/music-sixth-mission-throwback.mp3", true, false),
	trackAGamesPostlude = new Track("A Game's Postlude", 2012, "The Later Days of MusicalYoshi", "../assets/music-a-games-postlude.mp3", true, false),
	trackFirstDungeon = new Track("First Dungeon", 2010, "The Later Days of MusicalYoshi", "../assets/music-first-dungeon.mp3", true, false),
	trackSixthMission = new Track("Sixth Mission", 2010, "The Later Days of MusicalYoshi", "../assets/music-sixth-mission.m4a", true, false),
	trackSecondCommune = new Track("Second Commune", 2008, "The Early Days of MusicalYoshi", "../assets/music-second-commune.m4a", true, false),
	trackSuperScapegraceOriginal = new Track("SUPER Scapegrace (Original)", 2008, "The Early Days of MusicalYoshi", "../assets/music-super-scapegrace-original.m4a", true, false),
	
];

const trackList = document.getElementById("track-list");
let selectedTrack = tracks[0];
const nowPlaying = document.getElementById("now-playing");
const trackPlayerControls = document.getElementById("track-player-controls");
let currentAudio = new Audio();
const sortByYear = document.getElementById("sort-by-year");
const sortByAlbum = document.getElementById("sort-by-album");

/**
	 * @param {HTMLAudioElement} trackAudio
**/
function audioEffects() {
	console.log("outside!");

	if (!currentAudio.paused || currentAudio.currentTime) {
		console.log("inside!");
		document.getElementById("backdrop-low").classList.add("animated-gradient"); 
	}
}

/**
 * 
 * @description Returns a list based on user input filter
 * @param {Number} value 
 * @returns 
 */
function loadSortedTracks(value) {
	depopulateTrackList();
	let selectedTracks = [];
	let selectedCount = 0;

			for (i = 0; i < tracks.length; i++) {
				if (value === "finished") {
					if (tracks[i].completeOrIncomplete) {
						selectedTracks[selectedCount] = tracks[i];
						selectedCount++;
					}
				} else if (value === "scraps") {
					if (!tracks[i].completeOrIncomplete) {
						selectedTracks[selectedCount] = tracks[i];
						selectedCount++;
					}
				} else if (value == tracks[i].year) {
					console.log(value == tracks[i].year);
					console.log(tracks[i].year);
					selectedTracks[selectedCount] = tracks[i];
					selectedCount++;
				} else if (value === tracks[i].compilation) {
					console.log(value === tracks[i].compilation);
					selectedTracks[selectedCount] = tracks[i];
					selectedCount++;
				} else if (value === "all-music") {
					selectedTracks = tracks;
				}
			}	

	return selectedTracks;
}

function populateTrackList(tracksArray) {
	for (i = 0; i < tracksArray.length; i++) {
		const trackListItem = document.createElement("li");
		trackListItem.setAttribute("id", `t-${i}`);
		const trackListText = document.createTextNode(tracksArray[i].title + " " + tracksArray[i].year);
		trackListItem.appendChild(trackListText);
		trackList.appendChild(trackListItem);
		trackListItem.addEventListener("click", function (e) {
			if (e.target && e.target.matches("li")) {
					loadSelectedTrack(tracksArray[trackListItem.getAttribute("id").substring(2)]);
					trackListItem.classList.add("track-list-selected-highlight");
			}
		});
	}
	document.getElementById("t-0").classList.add("track-list-selected-highlight");
}
populateTrackList(loadSortedTracks("finished"));


function enableMusicSortButtons() {
	document.querySelectorAll(".music-sort-button").forEach(button => {
		button.onclick = function() {
			console.log(button.value);
			populateTrackList(loadSortedTracks(button.value));
		}
	});
}
enableMusicSortButtons();

/**
	 * @param {Track} trackObject
**/
function loadSelectedTrack(trackObject) {
	nowPlaying.textContent = trackObject.title;
	highlightSelectedTrack();
	currentAudio = trackObject.audioFileLink;
	trackPlayerControls.innerHTML = `<audio preload="none" controls>
	<source src="${currentAudio}" type="audio/mpeg">
	Your browser does not support the audio element. </audio>`;

}
loadSelectedTrack(selectedTrack);

function highlightSelectedTrack() {
	nowPlaying.classList.add("now-playing-highlight");
	for (let li of trackList.children) {
		li.classList.remove("track-list-selected-highlight");
	}
}
highlightSelectedTrack();

// USEFUL FUNCTION !
function depopulateTrackList() {
	while (trackList.lastChild) {
		trackList.removeChild(trackList.lastChild);
	}
}

function enableSortByYearAndAlbum() {
	let yearArray = [];
	let albumArray = [];
	for (let i = 0; i < tracks.length; i++) {
		if (!yearArray.includes(tracks[i].year)){
			yearArray += tracks[i].year;
			const option = document.createElement("option");
			const text = document.createTextNode(tracks[i].year);
			option.appendChild(text);
			sortByYear.appendChild(option);
		}
		if (!albumArray.includes(tracks[i].compilation)) {
			albumArray += tracks[i].compilation;
			const option = document.createElement("option");
			const text = document.createTextNode(tracks[i].compilation);
			option.appendChild(text);
			sortByAlbum.appendChild(option);
		}
	};
	sortByYear.onchange = function (){
		populateTrackList(loadSortedTracks(sortByYear.value));
	};
	sortByAlbum.onchange = function (){
		populateTrackList(loadSortedTracks(sortByAlbum.value));
	}
}
enableSortByYearAndAlbum();