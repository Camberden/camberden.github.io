/* |==========| BLOG VARIABLES |====================> */
/* |==========| VALUES BY SECTION |====================> */

// ===> BLOG POSTS ===>
const blogPostList = document.getElementById("blog-post-list");
const blogTagList = document.getElementById("blog-post-tags");
let currentlyReading = new BlogPost();
let currentlyReadingNumber;
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
let player;
const playerTag = document.createElement("script");
playerTag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(playerTag, firstScriptTag);
let done = false;

/* |==========| BLOG FUNCTIONS |====================> */
/* |==========| VALUES FOR WRITTEN BLOG CONTENT |====================> */
/**
 * 
 * @param {JSON} postjson 
 */
function routeJson(postjson) {
	const postNum = "post-" + (activeBlogPostNumber - 1);
	const bpJson = postjson[postNum];
	console.log(bpJson);
	const bpTags = document.getElementById("blog-tags");
	const bpPhotos = document.getElementById("blog-photos");
	const bpMusic = document.getElementById("blog-music");
	(()=> {
		bpTags.innerHTML = bpJson["tags"]; 
		bpPhotos.style.background = `url(${bpJson["media"][0]})`;
		stopVideo();
		// player.videoId = bpJson["media"][1];
		player.loadVideoById(bpJson["media"][1]);
	})();
};
/**
 * 
 * @param {string} month
 * @param {string} calendarDay
 * @param {string} year 
 * @returns date Object
 * @description Converts my chosen date format for update display into a date Object
 */
const convertDate = (month, calendarDay, year) => {
	const convertedMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const convertedCalendarDay = calendarDay.replace(/[^0-9]/g, ' ');
	const convertedYear = parseInt(year);
	const date = new Date(convertedYear, convertedMonth.indexOf(month), parseInt(convertedCalendarDay));
	return date;
}
/**
 * @param content
 * Gathers text within a blog post's content between custom permille tags such as `<t‰></t‰>`.
 * @param tag
 * The tag name without decorators, such as `t` for `<t‰></t‰>`.
 * @satisfies {BlogPost} a blog post
 * @returns
 */
function parsePermilleTags(content, tag) {
	const perMilleTags = ["d","l","j","g","p","a","u"];
	const l = tag.length + 3;
	return content.substring(content.indexOf("<" + tag + "‰>") + l, content.indexOf("</" + tag + "‰>"));
};
/**
 * 
 * @param {String[]} data 
 */
function initBlogData(articles) {
	/**
	 * @param {String} article
	 * @param {String[]} articles
	 */
	for (let article of articles) {
	const blogPost = new BlogPost();
	// |=====| PARSE TEXT INPUT |=====| //
	blogPost.id = (articles.indexOf(article) + 1);
	blogPost.author = parsePermilleTags(article, "u");
	blogPost.location = parsePermilleTags(article, "l");
	blogPost.title = parsePermilleTags(article, "t");
	blogPost.body = parsePermilleTags(article, "b");
	const preParsedBlogTags = parsePermilleTags(article, "g");
	blogPost.tags = preParsedBlogTags.split(", ");
	blogPost.photos = parsePermilleTags(article, "p");
	blogPost.audio = parsePermilleTags(article, "a");
	// |=====| DATE & TIME PARSING |=====| //
	const dateString = parsePermilleTags(article, "d").split(" ");
	const postDate = convertDate(dateString[0], dateString[1], dateString[2]);
	if (!listedYears.includes(parseInt(dateString[2]))) {
		listedYears.push(parseInt(dateString[2]));
	}
	blogPost.time = parsePermilleTags(article, "j");
	postDate.setHours(parseInt(blogPost.time.substring(0,2)), parseInt(blogPost.time.substring(2,5)));
	blogPost.date = postDate;
	// |=====| LIST GENERATION |=====| //
	const li = document.createElement("li");
	const text = document.createTextNode(blogPost.id + ": " + blogPost.title);
	li.setAttribute("id", `bp-${blogPost.id}`);
	li.onclick = function() {
		document.getElementById(`bp-${currentlyReadingNumber}`).removeAttribute("class", "listing-highlight");
		currentlyReading = blogPost;
		currentlyReadingNumber = currentlyReading.id;
		displayCurrentlyReading();
	}
	li.appendChild(text);
	blogPostList.prepend(li);
	blogPosts.push(blogPost);
};
currentlyReading = blogPosts[blogPosts.length - 1];
currentlyReadingNumber = currentlyReading.id;
displayCurrentlyReading();
};
/**
 * @constructs BlogPost object from blogPosts[] Array
 * @yields The blog post data based on currentlyReadingNumber
 */
function displayCurrentlyReading() {
	
	// while (blogTagList.lastElementChild) {
	// 	document.removeChild(blogTagList.lastElementChild);
	// }
	blogTagList.innerHTML = "";
	document.getElementById("blog-post-date").innerText = CMBRutil.convertToPreferredDateFormat(currentlyReading.date, true);
	document.getElementById("blog-post-location").innerText = currentlyReading.location;
	changeCoordinates(coordinates[currentlyReading.location]);
	document.getElementById("blog-post-time").innerText = currentlyReading.time;
	document.getElementById("blog-post-body").innerHTML = currentlyReading.body;
	document.getElementById("blog-post-title").innerText = currentlyReading.title;
	document.getElementById(`bp-${currentlyReadingNumber}`).setAttribute("class", "listing-highlight");
	for (let tag of currentlyReading.tags) {
		const span = document.createElement("span");
		const text = document.createTextNode(tag);
		span.appendChild(text);
		span.classList.add("blog-tag");
		blogTagList.appendChild(span);
	}

};
function displayBlogPostList() {
	const blogPostList = document.getElementById("blog-post-list");
	blogPosts.forEach(article => {
		const li = document.createElement("li");
		const text = document.createTextNode(article.title);
		li.appendChild(text);
		blogPostList.appendChild(li);
	});

};
function enableBlogButtons() {
	document.querySelectorAll(".blog-button").forEach(button => {
		button.onmouseover = function(){
			CMBRutil.buttonOnMouseEnter(button);
		}
		button.onmouseleave = function(){
			CMBRutil.buttonOnMouseLeave(button);
		}
		button.onclick = function () {
			CMBRutil.buttonOnClick(button);

			switch (button.value) {
				case "next":
					if (currentlyReadingNumber < blogPosts.length) {
						document.getElementById(`bp-${currentlyReadingNumber}`).removeAttribute("class", "listing-highlight");
						++currentlyReadingNumber;
						document.getElementById(`bp-${currentlyReadingNumber}`).setAttribute("class", "listing-highlight");
					}
					break;
				case "previous":
					if (currentlyReadingNumber > 0) {
						document.getElementById(`bp-${currentlyReadingNumber}`).removeAttribute("class", "listing-highlight");
						--currentlyReadingNumber;
						document.getElementById(`bp-${currentlyReadingNumber}`).setAttribute("class", "listing-highlight");
					}
					break;
				default:
					console.log("Defaulted Blog Button Trigger");
				break;
			}
			currentlyReading = blogPosts[currentlyReadingNumber - 1];
			displayCurrentlyReading();
		};
	});
};
function blogFilter(selection) {
	let loaded;
	if (selection === "all-years") {
		for (let li of blogPostList.children) {
			if (li.classList.contains("listing-none")) {
				li.classList.remove("listing-none");
			}

		}
		
	currentlyReading = blogPosts[blogPosts.length - 1];
	currentlyReadingNumber = currentlyReading.id;
	document.getElementById(`bp-${currentlyReadingNumber}`).setAttribute("class", "listing-highlight");
	displayCurrentlyReading();		
	return;
	}
	
	blogPosts.forEach(article => {
		const index = article.id;
		if (article.date.getFullYear() != selection) {
			// document.getElementById(`bp-${article.id}`).style.display = "none";
			document.getElementById(`bp-${index}`).classList.add("listing-none");
		} else {
			document.getElementById(`bp-${index}`).classList.remove("listing-none");
			loaded = index;
		}
	});
	
	currentlyReading = blogPosts[loaded - 1];
	currentlyReadingNumber = currentlyReading.id;
	document.getElementById(`bp-${currentlyReadingNumber}`).setAttribute("class", "listing-highlight");
	displayCurrentlyReading();
	return;
};
function enableBlogSelect() {
	const blogPostYearSelect = document.getElementById("blog-post-year-select");
	for (let i = 0; i < listedYears.length; i++) {
		let option = document.createElement("option");
		option.setAttribute("value", listedYears[i]);
		let text = document.createTextNode(listedYears[i]);
		option.appendChild(text);
		blogPostYearSelect.appendChild(option);
	}
	blogPostYearSelect.onchange = function() {
		document.getElementById(`bp-${currentlyReadingNumber}`).removeAttribute("class", "listing-highlight");
		blogFilter(blogPostYearSelect.value);
	}
};

/* |==========| BLOG MAP |====================> */
/* |==========| LEAFLET API BLOG MAP FUNCTIONS AND VALUES |====================> */
/**
 * 
 * @param {Array[number]} location in coordinates
 */
function initBlogMap(latLng) {
	
	blogMap.setView(latLng, 7);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(blogMap); 
	blogMapMarker = L.marker(latLng).addTo(blogMap);
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
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	height: "100%",
	width: "100%",
	videoId: "0b-b9lO_7xk", //1.51
	playerVars: {
	"playsinline": 1,
	"disablekb": 1,
	"autoplay": 0,
	"fs": 0,
	"hl": "ja"
	},
	events: {
	// 'onReady': onPlayerReady,
	"onStateChange": onPlayerStateChange
}
	});
};
function onPlayerReady(event) {
	event.target.playVideo();
};
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 600000);
		done = true;
	}
};
function stopVideo() {
	player.stopVideo();
};

/* |==========| INDEXED DB |====================> */
/* |==========| SUPPORT FUNCTIONS TO GAUGE IDB |====================> */
const canSupportIndexedDB = () => {
	if(!window.indexedDB) {
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

	switch(crud) {
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

	CMBRutil.navigationCharter();
	initBlogMap(activeBlogPostCoordinates);
	initBlogData(blogData);
	enableBlogButtons();
	enableBlogSelect();
	
})(setTimeout(() => { collectJSconfigs(canSupportIndexedDB()); console.log("|=====| END |=====|====|") }, 2000 ));