// |==========| BLOG VARIABLES |====================> //
/* |==========| VALUES BY SECTION |====================> */

// ===> BLOG POSTS ===>
const blogPostList = document.getElementById("blog-post-list");
const blogTagList = document.getElementById("blog-post-tags");

let tubeVids = {};
let tubeVidTotal = 0;
let tubeVideoString = "https://www.youtube.com/watch?v=6uNkTqNSulY";
var tubeVideoIdentity = "TrlKxV5KWJo";
/**
 * @type {Number}
 */
let tubeVideoNumber = 1;
let currentYear;
const listedYears = [];
const titles = [];
const tags = [];
const tubeNowPlaying = document.getElementById("tube-now-playing");

// ===> BLOG YOUTUBE PLAYER ===>
// https://www.youtube.com/embed?listType=playlist&list=PLC77007E23FF423C6 // FOR PLAYLIST //
var player;
var done = false;
var nowPlaying = '';
var playerTag = document.createElement("script");
playerTag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(playerTag, firstScriptTag);

// /* |==========| YOUTUBE PLAYER |====================> */
// /* |==========| YOUTUBE PLAYER API VARIABLES & FUNCTIONS |====================> */
function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		height: "100%",
		width: "100%",
		videoId: tubeVideoIdentity,
		playerVars: {
			"playsinline": 1,
			"disablekb": 1,
			"autoplay": 1,
			"fs": 1,
			"hl": "ja"
		},
		events: {
			"onReady": onPlayerReady,
			"onStateChange": onPlayerStateChange,
		}
	});
};
function onPlayerReady(event) {
	event.target.playVideo();
};
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		const ytStateTimeout = setTimeout(console.info("Sixty-five-thousand."), 65000);
		done = true;
		clearTimeout(ytStateTimeout);
	}
};
function pauseVideo() {
	player.pauseVideo();
};
/**
 * @global
 * @function pauseVideoOnConsole
 * @description Prevents autoplay of audio & video by the embedded YouTube player.
 * This serves to pause the YouTube player for the corresponding blog post after loading,
 * with a console group to indicate which post's player is being paused. 
 * This is necessary due to the asynchronous and nested nature of the YouTube Iframe API which has shown for months
 * to ignore global method calls to the Player Object within this JavaScript file, blog.js.
 * Those global method calls proved reactive in the browser at runtime when passed as parameters to console methods on May 20th, 2026.
 * The setTimeout ensures that pause functionality is delivered after the player has had time to initialize and start playing,
 * thus smoothly preventing autoplay as intended.
 * @emits console.info of the Player Object's pauseVideo() method.
 */
function pauseVideoOnConsole() {
	(setTimeout(() => {
		console.clear();
		console.groupCollapsed("Loaded & Paused " + player.videoTitle);
		pauseVideo();
		console.groupEnd();
		nowPlaying = player.videoTitle;
		tubeNowPlaying.innerText = nowPlaying;
	}, 1000));
	console.log("Now Playing: " + nowPlaying);
};
function loadTubeVideo() {
	try {
		if (!tubeVideoIdentity) {

			player.loadVideoById("TrlKxV5KWJo");
		} else {
			player.loadVideoById(tubeVideoIdentity);
		}
	} catch (error) {
		if (error instanceof TypeError) {
			fetch(error.target).then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.text();
			}).then((data) => {
				console.warn("Cleared Fetched TypeError: ", data);
			}).catch((fetchError) => {
				console.error("Error fetching YouTube Player API Script: ", fetchError);
			});
		}
	} finally {
		pauseVideoOnConsole();
	}
}

// |==========| TYPING FUNCTIONS |====================> //
/* |==========| VALUES FOR WRITTEN BLOG CONTENT |====================> */

function focusWriting() {
	const foc = document.getElementById("sampleTypingField").autofocus = true;
	document.getElementById("sampleTypingField").innerHTML = foc;
}
// ---------- POEM SECTION ---------- //
/* To associate with an audiofile, use a Map */
const poems = [
	"My soul, it comes alive, for just this night. I realize it\'s only now. I do surmise a lack of meaning to come from what I do - the day by day, the black and grey - there\'s just so little sense of meaning to me.",
	"If you will read and follow the rules in this booklet, your time in prison will be easier. The people who work for the prisons can be of help to you. If you have any questions about any matter, ask a member of the staff. If you have any questions about any of the rules in this booklet, see a staff member and they will answer your questions. Obey all prison rules and make the most of chances to show that you can act in a manner which can lead to your release.",
	"Form does not differ from emptiness, emptiness does not differ from form; that which is form is emptiness, that which is emptiness form. The same is true of feelings, perceptions, formations, consciousness.",
	// "Wayward I drifted, loosely guided by principle and conviction whose strength teetered and peaked with a worrying frequency. Each inevitable workplace dejection garnered close company with the pangs of such teetering strength, hallmarked by decisional regret of both the short and long term: the inescapable failings of a misguided youth.",
	"You\'re most attractive when you\'re not worried about who you\'re attracting.",
	"A gentle breeze was the only thing I had heard. All I could see surrounding my small, green oasis were immaculate dunes, some of stature, some modest, subjacent to a brilliant, pristine, blue sky whose fields spread dotted by puffy, white clouds, inching away ever so slowly, their movement involving enough in this remarkably empty scene so as to merit my attention and enrapture me in contemplative wonder.",
	// "I choose discomfort to my betterment over comfort to my detriment.",
	// "I live for coincidences. They briefly give mto me the illusion or the hope that there\'s a pattern to my life, and if there\'s a pattern, then maybe I\'m moving toward some kind of destiny where it\'s all explained.",
	"Eros Flame is characterized by striking contrasts, where the finest ingredients enrich and enhance each other: cold and hot, sweet and spicy, light and shadow. The opening notes are particularly vibrant. Fresh, juicy Italian citrus fruits like lemon, tangerine, and bitter orange are warmed by notes of black pepper from Madagascar and enveloped in aromatic wild rosemary. Through an olfactory wave of pepperwood, geranium, and rose facets, we reach the base notes where precious woods such as Texas cedar, patchouli cœur, Haitian vetiver, mountain oak moss accord, and sandalwood subtly blend to create a soft and sensuous roundness with tonka bean, perfectly intertwining with vanilla.",
	`I am a United States Sailor. I will support and defend the Constitution of the United States of America and I will obey the orders of those appointed over me. I represent the fighting spirit of the Navy and those who have gone before me to defend freedom and democracy around the world. I proudly serve my country's Navy combat team with Honor, Courage and Commitment. I am committed to excellence and the fair treatment of all.`
];

let poemnumber = 0;
let selectedpoem = poems[poemnumber];

function getPoemNumber() {
	document.getElementById("poemnum").innerHTML = "Passage #" + (poemnumber + 1);
}

/* SETS THE POEM INTO THE FORTYPING ID ELEMENT */
let englishSutraLine = 0;
document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);

// document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[englishSutraLine][0] + "</span>" + selectedpoem[englishSutraLine].substring(1, selectedpoem[englishSutraLine].length) + ".";
// document.getElementById("fortyping").innerHTML = selectedpoem.split(".")[englishSutraLine];


function nextPoem() {
	englishSutraLine = 0;
	if (poemnumber === poems.length - 1) {
		poemnumber = 0;
		selectedpoem = poems[poemnumber];
	}
	else {
		selectedpoem = poems[++poemnumber];
	}
	document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);
	document.getElementById("sampleTypingField").value = "";
	focusWriting();
	getPoemNumber();
}

function previousPoem() {
	englishSutraLine = 0;
	if (poemnumber === 0) {
		poemnumber = poems.length - 1;
		selectedpoem = poems[poemnumber];
	}
	else {
		selectedpoem = poems[--poemnumber];
	}
	document.getElementById("fortyping").innerHTML = `<span class="writinginitial">` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);
	document.getElementById("sampleTypingField").value = "";
	focusWriting();
	getPoemNumber();
}

const tap = 1;


// Avalokiteshvara Bodhisattva, when practicing deeply the prajna paramita, perceived that all five skandhas in their own being are empty, and was saved from
function typingTest() {
	const para = selectedpoem;
	const typed = document.getElementById("sampleTypingField").value;
	const typingProgress = document.getElementById("fortyping");

	if (typed === selectedpoem.substring(0, typed.length) && typed.length) {
		typingProgress.innerHTML = para.replace(typed, `<span class="writinginitial" style="color:rgb(123, 153, 184);">` + typed[0] + `</span> <span style="color:rgb(123, 153, 184);">` + typed.substring(1, typed.length) + "</span>");
	}

	// IS WHAT'S TYPED THE SAME AS THE SELECTION? COMPLETE!
	if (typed === selectedpoem) {
		document.getElementById("sampleTypingField").value = "";
		document.getElementById("fortyping").innerHTML = `<span class="writinginitial">"` + selectedpoem[0] + "</span>" + selectedpoem.substring(1, selectedpoem.length);
		alert("✨");
		nextPoem();
	}
}

document.onkeydown = function (evt) {
	evt = evt || window.event;
	let isEscape = false;
	if ("key" in evt) {
		isEscape = evt.key === "Escape" || evt.key === "Esc";
	}
	else {
		isEscape = evt.keyCode === 27;
	}
	if (isEscape) {
		nextPoem();
	}
};


/* |==========| INDEXED DB |====================> */
/* |==========| SUPPORT FUNCTIONS TO GAUGE IDB |====================> */
const canSupportIndexedDB = () => {
	if (!window.indexedDB) {
		// console.log("Browser doesn't support IndexedDB");
		return "Browser doesn't support IndexedDB";
	} else {
		// console.log("Indexed DB Supported");
		return "Indexed DB Supported";
	}
}; // closeout functions with semicolon to prevent continual evaluation in IIFE runners.
/**
 * 
 * @param {String[]} args 
 * @returns {String[]} val;
 */
function collectJSconfigs(...args) {
	let val = [];
	for (let arg of args) {
		// val += ("|=====> " + arg + "\n");
		val.push("|=====> " + arg);
	}
	console.log(val);
	return val;
};
/**
 * 
 * @param {IDBDatabase} db 
 * @param {*} indexedPost 
 */
function insertIndexedPost(db, indexedPost) {
	// const demojson = {
	// 	id: "",
	// 	author: "chrispy",
	// 	date: "03/06/2026",
	// 	location: "Pittsboro, NC",
	// 	time: "2200 HRS",
	// 	title: "An Indexed DB Journey",
	// 	body: "Tryna get this thang going.",
	// 	tags: "",
	// 	photos: "",
	// 	audio: ""
	// }	
	// initIndexedDB("create", demojson);
	const txn = db.transaction("Posts", "readwrite");
	const store = txn.objectStore("Posts");
	let query = store.put(indexedPost);

	query.onsuccess = function (event) {
		console.log("Transaction Query Success");
		console.log(event);
	};
	query.onerror = function (event) {
		console.log("Transaction Error: Post Likely Already Exists");
	}
	txn.oncomplete = function () {
		console.log("Closing Transaction");
		db.close();
	}
};
/**
 * 
 * @param {String} crud transaction option: create, update, read, delete 
 * @param {JSON} dataJson data as json
 */
function initIndexedDB(crud, queryData) {
	const request = indexedDB.open("cmbrBlog", 1);
	request.onerror = (event) => { event.target.error ? console.error(`Database Error: ${event.target.errorCode}`) : console.log("No IndexedDB Error..."); };
	request.onupgradeneeded = (event) => {
		/**
		 * @type {IDBDatabase} db
		 */
		let db = event.target.result;
		console.log("DB at onupgradeneeded: " + db);

		let store = db.createObjectStore("Posts", {
			autoIncrement: true
		});

		let index = store.createIndex("title", "title", {
			unique: true
		});
	};
	request.onsuccess = (event) => {
		/**
		 * @type {IDBDatabase} db
		 */
		const db = event.target.result;

		switch (crud) {
			case "create":
				console.log("Create IndexedDB Transaction");
				insertIndexedPost(db, queryData);
				break;
			case "read":
				console.log("Read IndexedDB Transaction");
				break;
			case "update":
				console.log("Update IndexedDB Transaction");
				break;
			case "delete":
				console.log("Delete IndexedDB Transaction");
				break;
			default:
				console.log("Defaulted IndexedDB Transaction");
				break;
		}
		console.log("DB at onsuccess: " + db);
	}
};

/* |==========| MAIN |====================> */
/* |==========| RUNNER |====================> */
(console.log("|=====| START |=====|=====>"), async () => {

	// tubeVids = await CMBRutil.connectCMBRjson(["tubeVideos"]);
	// console.log("Total Tube Videos: " + tubeVids.length);
	// initBlogMap(activeBlogPostCoordinates);
	pauseVideo();
	// initBlogData(blogData);
	// enableBlogButtons();
	// enableBlogSelect();
	// console.log("https://www.youtube.com/watch?v=6uNkTqNSulY".split("v=")[1]);
	// collectJSconfigs(canSupportIndexedDB());

})(console.log("|=====| END |=====|"));