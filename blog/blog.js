const activeBlogPost = document.getElementById("active-blog-post");
let activeBlogPostNumber = blogData.length - 1;
const blogPostList = document.getElementById("blog-post-list");
const blogPostTitle = document.getElementById("blog-post-title");
let listedYears = [];
let currentYear;

function displayActiveBlogPostNumber() {
	document.getElementById("displayed-post").innerHTML = activeBlogPostNumber + 1;
	document.getElementById(`bp-${activeBlogPostNumber}`).classList.add("listing-highlight");
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
	document.getElementById("blog-post-time").innerHTML = bp.time;
	blogPostTitle.innerHTML = bp.title;
	const instance = blogData[increment];
	const splitInstance = instance.split("|");
	const instanceBlogPost = splitInstance[4].trim();	

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
					if (activeBlogPostNumber < blogData.length - 1) {
						document.getElementById(`bp-${activeBlogPostNumber}`).classList.remove("listing-highlight");
						activeBlogPostNumber++;
						activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` +
							extractHeaderData(activeBlogPostNumber) + `</span>`;
					}
					break;
				case "previous":
					if (activeBlogPostNumber > 0) {
						document.getElementById(`bp-${activeBlogPostNumber}`).classList.remove("listing-highlight");
						activeBlogPostNumber--;
						activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` +
							extractHeaderData(activeBlogPostNumber) + `</span>`;
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

function viewBlogPostMap() {
	const map = L.map("blog-map").setView([35.91029565048358, -79.0553474519402], 7);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map); 

	const marker = L.marker([35.91029565048358, -79.0553474519402]).addTo(map);

	const circle = L.circle([35.71951016932923, -79.18136391788723], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}).addTo(map);

	// const polygon = L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(map);

	marker.bindPopup("<b>Hello you,</b><br>I'm around here.").openPopup();
	circle.bindPopup("I am a circle.");
	// polygon.bindPopup("I am a polygon.");

	const onMapClick = (e) => {
		alert("You clicked the map at " + e.latlng);
	}

	map.on('click', onMapClick);

}

(()=> {

	initBlogData(blogData.length);
	chooseActiveBlogPost();
	enableBlogButtons();
	enableBlogSelect();
	viewBlogPostMap();

})();