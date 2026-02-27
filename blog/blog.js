const activeBlogPost = document.getElementById("active-blog-post");
let activeBlogPostNumber = blogData.length - 1;
let activeBlogPostCoordinates = [35.71951016932923, -79.18136391788723];
const blogPostList = document.getElementById("blog-post-list");
const blogPostTitle = document.getElementById("blog-post-title");
const blogMap = L.map("blog-map");
let blogMapMarker;
let listedYears = [];
let currentYear;
var player;

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
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	height: "100%",
	width: '100%',
	videoId: '0b-b9lO_7xk',
	playerVars: {
	'playsinline': 1,
	'disablekb': 1,
	'fs': 0,
	'autoplay': 1,
	'hl': 'ja'
	},
	events: {
	'onReady': onPlayerReady,
	'onStateChange': onPlayerStateChange
	}
	});
}
function onPlayerReady(event) {
	event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 600000);
		done = true;
	}
}
function stopVideo() {
	player.stopVideo();
}

function displayActiveBlogPostNumber() {
	document.getElementById("displayed-post").innerHTML = activeBlogPostNumber + 1;
	document.getElementById(`bp-${activeBlogPostNumber}`).classList.add("listing-highlight");
	if (activeBlogPostNumber === blogData.length - 1) {
		document.getElementById("next-bp").disabled = true;
	} else {
		document.getElementById("next-bp").disabled = false;
	}
}
/**
 * @param content
 * Gathers text within a blog post's content between custom tags such as `<b-title></b-title>`.
 * @param tag
 * The tag name without decorators, such as `b-title` for `<b-title></b-title>`.
 */
function gatherTextBetweenTags(content, tag) {
	const l = tag.length + 2;
	return content.substring(content.indexOf("<" + tag + ">") + l, content.indexOf("</" + tag + ">"));

}

function extractHeaderData(increment) {
	const bp = blogPosts[increment];
	document.getElementById("blog-post-date").innerHTML = bp.date;
	document.getElementById("blog-post-location").innerHTML = bp.location;
	if (activeBlogPostCoordinates != coordinates[bp.location]) {
		changeCoordinates(coordinates[bp.location]);
		activeBlogPostCoordinates = coordinates[bp.location];
	} else {
		activeBlogPostCoordinates = coordinates[bp.location];
	}
	document.getElementById("blog-tags").innerHTML = bp.location;
	document.getElementById("blog-post-time").innerHTML = bp.time;
	blogPostTitle.innerHTML = bp.title;
	const instance = blogData[increment];
	const splitInstance = instance.split("|");
	const instanceBlogPost = splitInstance[4].trim();
	// changeCoordinates(activeBlogPostCoordinates);

	displayActiveBlogPostNumber();

	return instanceBlogPost;
}

function initBlogData(dataLength) {
	for (i = 0; i <= dataLength - 1; i++) {
		const instance = blogData[i];
		const splitInstance = instance.split("|");
		const instanceDate = splitInstance[1].trim();
		const instanceLocation = splitInstance[2].trim();
		const instanceTime = splitInstance[3].trim();
		const instanceBlogPost = splitInstance[4].trim();
		const instanceTitle = gatherTextBetweenTags(instanceBlogPost, "b-title").trim();
		const listedYear = instanceDate.substring(instanceDate.indexOf(",") + 2, instanceDate.indexOf("…"));

		const bp = new BlogPost(instanceDate, instanceLocation, instanceTime, instanceTitle, i);
		document.getElementById("blog-post-date").innerHTML = bp.date;
		document.getElementById("blog-post-location").innerHTML = bp.location;
		document.getElementById("blog-post-time").innerHTML = bp.time;


		let listedBlogPost = document.createElement("li");
		const span = document.createElement("span");
		span.setAttribute("class", "listed-title");
		span.innerText = bp.title;

		if (!listedYears.includes(listedYear) && listedYear) {
			listedYears += listedYear + " ";
		}
		listedBlogPost.setAttribute("class", `bp-year-${listedYear}`);
		listedBlogPost.classList.add("blog-post-inside-list");

		listedBlogPost.setAttribute("value", i);
		listedBlogPost.setAttribute("id", `bp-${i}`);
		blogPostList.appendChild(listedBlogPost);
		listedBlogPost.append("Post " + (bp.number + 1) + ": ");
		listedBlogPost.appendChild(span);

		blogPosts.push(bp);
		// Latest Entry
		if (i === dataLength - 1) {
			activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` +
				extractHeaderData(activeBlogPostNumber) + `</span>`;
				
		}
		currentYear = listedYear;
	}
	listedYears = Array.from(listedYears.trim().split(" "));
}

function chooseActiveBlogPost() {
	document.querySelectorAll(".blog-post-inside-list").forEach(listing => {
		listing.onclick = function () {
			document.getElementById(`bp-${activeBlogPostNumber}`).classList.remove("listing-highlight");
			activeBlogPostNumber = listing.value;
			activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + extractHeaderData(activeBlogPostNumber) + `</span>`;
		}
	})
}

function enableBlogButtons(postjson) {
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
					if (activeBlogPostNumber < blogData.length - 1) {
						document.getElementById(`bp-${activeBlogPostNumber}`).classList.remove("listing-highlight");
						activeBlogPostNumber++;
						activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` +
							extractHeaderData(activeBlogPostNumber) + `</span>`;
							routeJson(postjson);
					}
					break;
				case "previous":
					if (activeBlogPostNumber > 0) {
						document.getElementById(`bp-${activeBlogPostNumber}`).classList.remove("listing-highlight");
						activeBlogPostNumber--;
						activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` +
							extractHeaderData(activeBlogPostNumber) + `</span>`;
							routeJson(postjson);
					}
					break;
				default:
					console.log("Default Switch Triggered");
			}
		};
	});
}

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
		for (let li of blogPostList.children) {
			if (li.classList.contains("listing-none")) {
				li.classList.remove("listing-none");
			} 
			if (!li.classList.contains(`bp-year-${blogPostYearSelect.value}`) && blogPostYearSelect.value != "all-years"){
				li.classList.add("listing-none");
			} 
		}
	};
	
}

function reEnableBlogPostList(){
	for (let li of blogPostList.children) {
		li.classList.remove("listing-none");
	}
}

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
}

/**
 * 
 * @param {Array[number]} latLng 
 */
function changeCoordinates(latLng) {
	blogMap.flyTo(latLng);
	blogMapMarker.remove();
	blogMapMarker = L.marker(latLng).addTo(blogMap);
}

( async () => {

	CMBRutil.navigationCharter();
	initBlogMap(activeBlogPostCoordinates);
	initBlogData(blogData.length);
	chooseActiveBlogPost();
	enableBlogButtons();
	/**
	 * @constant
	 * @type {JSON}
	 * @example bpjson["post-1"]["date"]
	 */
	const bpjson = await CMBRutil.connectCMBRjson(["blog"]);
	setTimeout(()=>{
		enableBlogButtons(bpjson);
	}, 1000);
	enableBlogSelect();

})();