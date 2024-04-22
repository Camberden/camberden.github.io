// 'use strict';

window.onload = () => console.log('Running!');

const tunes = document.querySelectorAll('tune'); //grabs all 'tune attributes'

const modal = document.getElementById('info-modal');
const specificModal = document.getElementById('specific-modal');
document.getElementById('close-modal').onclick = function () {
	modal.style.display = 'none';
};

// ---------- TRACK CLASS AND TRACKS ---------- //

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
tracks.forEach(track => { 
	const trackPlayButton = `<audio id="${track.audioFileLink.substr(10, track.audioFileLink.length - 5)}" controls>
	<source src="${track.audioFileLink}" type="audio/mpeg">
	Your browser does not support the audio element. </audio>`;

	// DON'T FORGET THAT I COULD SEND THESE VALUES TO OTHER ELEMENTS
	document.getElementById("music-table-div").innerHTML += // USING +=; MIGHT NEED TO ADD TO STRING THEN PUSH TO HTML
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






// --- LYRIC PAGES (MAPS) --- //

const meaninglyrics = new Map([
	[21, 'Another day...'],
	[24, 'I\'m all alone'],
	[26, 'I wonder what to do again...'],
	[31, 'I take a seat,'],
	[33, 'then I endure'],
	[36, 'cascading flows of thoughts and so I'],
	[40, 'freeze again'],
	[42, 'paralyzed...🎵'],
	[44, 'directionless and overwhelmed'],
	[49, 'I close my eyes...'],
	[51, 'fostering the will to take my leave'],
	[56, '...🎵'],
	[76, 'I understand'],
	[79, 'my perseverence'],
	[81, 'is fielding over much to many'],
	[85, 'things to do...🎵'],
	[87, 'and people with whom'],
	[88, 'my anxiousness and social withdraw'],
	[94, 'disunite.'],
	[97, 'This inner fight'],
	[99, 'breeds isolation speaking naught.'],
	[103, 'I steal away...'],
	[105, 'and lock myself inside this state of mind.'],
	[110, '...🎵'],
	[134, 'My soul!'],
	[136, 'It comes alive!'],
	[138, 'For just this night!'],
	[140, 'I realize is only now!'],
	[143, 'I do surmise a lack of meaning'],
	[150, 'to come...🎵'],
	[152, 'from what I do,'],
	[154, 'the day by day,'],
	[156, 'the black and grey'],
	[158, 'the solitude,'],
	[160, 'this mental cage'],
	[162, 'There\'s just so little sense of meaning'],
	[167, 'to me...'],
	[170, 'My soul!'],
	[172, 'It comes alive!'],
	[175, 'For just this night!'],
	[178, 'I realize is only now!'],
	[180, 'I do surmise a lack of meaning'],
	[184, 'to come...'],
	[188, 'from what I do,'],
	[190, 'the day by day,'],
	[192, 'the black and grey'],
	[194, 'the solidude,'],
	[195, 'this mental cage'],
	[198, 'There\'s just so little sense of meaning'],
	[202, 'to me...🎵'],
	[205, 'Little sense of meaning...🎵'],
	[210, 'Little sense of meaning!'],
]);

// --- SONG-SPECIFIC MODALS --- //

const meaningModalText = `This is a song about Meaning.<br>`;
const meaningModalImage = `<img src="../assets/meaning-paper.jpg">`;