// |==========| BLOG VARIABLES |====================> //
/* |==========| VALUES BY SECTION |====================> */

// ===> BLOG POSTS ===>
const blogPostList = document.getElementById("blog-post-list");
const blogTagList = document.getElementById("blog-post-tags");
/**
 * @type {Number}
 */
let currentlyReadingNumber = 0;
let currentYear;
const listedYears = [];
const titles = [];
const tags = [];

// ===> BLOG MAP ===>
let activeBlogPostCoordinates = [35.71951016932923, -79.18136391788723];
const blogPostTitle = document.getElementById("blog-post-title");
const blogMap = L.map("blog-map");
let blogMapMarker;

// ===> BLOG YOUTUBE PLAYER ===>
// https://www.youtube.com/embed?listType=playlist&list=PLC77007E23FF423C6 // FOR PLAYLIST //
// var player;
// var done = false;
// var playerTag = document.createElement("script");
// playerTag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(playerTag, firstScriptTag);

/* |==========| BLOG MAP |====================> */
/* |==========| LEAFLET API BLOG MAP FUNCTIONS AND VALUES |====================> */
/**
 * 
 * @param {Array[number]} location in coordinates
 */
function initBlogMap(latLng) {

	blogMap.setView(latLng, 7);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(blogMap);
	blogMapMarker = L.marker(latLng).addTo(blogMap);

	// const leafletBottom = document.querySelectorAll(".leaflet-bottom");
	// leafletBottom.forEach(bottom => { bottom.setAttribute("z-index", "0"); bottom.removeAttribute("bottom");});
	// const fixAttrControl = document.querySelector(".leaflet-control-attribution");
	// fixAttrControl.setAttribute("height", "4");
	// fixAttrControl.setAttribute("line-height", "0.5");
	// const fixControl = document.querySelector(".leaflet-control");
	// fixControl.setAttribute("height", "4");
	// const fixAttrFlag = document.querySelector(".leaflet-attribution-flag");
	// fixAttrFlag.setAttribute("height", "4");
	// fixAttrFlag.setAttribute("viewBox", "0 0 12 2");
};
/**
 * 
 * @param {Array[number]} latLng 
 */
function changeCoordinates(latLng) {
	blogMap.flyTo(latLng);
	blogMapMarker.remove();
	blogMapMarker = L.marker(latLng).addTo(blogMap);
};

/* |==========| YOUTUBE PLAYER |====================> */
/* |==========| YOUTUBE PLAYER API VARIABLES & FUNCTIONS |====================> */
// function onYouTubeIframeAPIReady() {
// 	player = new YT.Player("player", {
// 		height: "100%",
// 		width: "100%",
// 		videoId: "VckCoZkCEu8",
// 		playerVars: {
// 			"playsinline": 0,
// 			"disablekb": 1,
// 			"autoplay": 1,
// 			"fs": 1,
// 			"hl": "ja"
// 		},
// 		events: {
// 			"onReady": onPlayerReady,
// 			"onStateChange": onPlayerStateChange,
// 		}
// 	});
// };
// function onPlayerReady(event) {
// 	event.target.playVideo();
// };
// function onPlayerStateChange(event) {
// 	if (event.data == YT.PlayerState.PLAYING && !done) {
// 		setTimeout(console.info("Sixty-five-thousand."), 65000);
// 		done = true;
// 	}
// };
// function pauseVideo() {
// 	player.pauseVideo();
// };
// /**
//  * @global
//  * @function pauseVideoOnConsole
//  * @description Prevents autoplay of audio & video by the embedded YouTube player.
//  * This serves to pause the YouTube player for the corresponding blog post after loading,
//  * with a console group to indicate which post's player is being paused. 
//  * This is necessary due to the asynchronous and nested nature of the YouTube Iframe API which has shown for months
//  * to ignore global method calls to the Player Object within this JavaScript file, blog.js.
//  * Those global method calls proved reactive in the browser at runtime when passed as parameters to console methods on May 20th, 2026.
//  * The setTimeout ensures that pause functionality is delivered after the player has had time to initialize and start playing,
//  * thus smoothly preventing autoplay as intended.
//  * @emits console.info of the Player Object's pauseVideo() method.
//  */
// function pauseVideoOnConsole() {
// 	(setTimeout(() => {
// 		// console.clear();
// 		console.groupCollapsed("Pausing Blog Post " + currentlyReadingNumber + " YouTube Player");
// 		console.info("Audio: " + player.videoTitle);
// 		pauseVideo();
// 		console.groupEnd();
// 	}, 1000));
// }

// |==========| BLOG FUNCTIONS |====================> //
/* |==========| VALUES FOR WRITTEN BLOG CONTENT |====================> */

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

	initBlogMap(activeBlogPostCoordinates);
	// initBlogData(blogData);
	// enableBlogButtons();
	// enableBlogSelect();
	// console.log("https://www.youtube.com/watch?v=6uNkTqNSulY".split("v=")[1]);
	// collectJSconfigs(canSupportIndexedDB());

})(console.log("|=====| END |=====|"));