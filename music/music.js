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

const tracks = [
	trackMeaning = new Track("Meaning", 2021, "The Rush of Feeling", "../assets/music-meaning.mp3", true, true)
];

const trackBarrier = `<div class="track-barrier"></div>`;
const trackPlayButtonBreak = `<br>`;
tracks.forEach(track => { 
	const trackPlayButton = `<audio id="${track.title}" controls>
	<source src="${track.audioFileLink}" type="audio/mpeg">
	Your browser does not support the audio element. </audio>`;

	document.getElementById("music-table-div").innerHTML += // USING +=; MIGHT NEED TO ADD TO STRING THEN PUSH TO HTML
		` ${track.title} ${track.year} ${track.compilation} ${track.completeOrIncomplete} ${track.lyricalOrInstrumental}
		${trackPlayButtonBreak} ${trackPlayButton} ${trackBarrier}`;
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