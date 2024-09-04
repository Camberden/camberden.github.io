// ----- BLOG POSTS
let activeBlogPost = document.getElementById("active-blog-post");
let activeBlogPostNumber = blogData.length - 1;
let blogPostList = document.getElementById("blog-post-list");
let blogPostTitle = document.getElementById("blog-post-title");


function displayActiveBlogPostNumber(){
	document.getElementById("displayed-post").innerHTML = activeBlogPostNumber + 1;
	document.getElementById(`bp-${activeBlogPostNumber}`).classList.add("listing-highlight");
}

function extractHeaderData(increment){
	const instance = blogData[increment];
	let splitInstance = instance.split("|");
	let instanceDate = splitInstance[1].trim();
	document.getElementById("blog-post-date").innerHTML = instanceDate;
	let instanceLocation = splitInstance[2].trim();
	document.getElementById("blog-post-location").innerHTML = instanceLocation;
	let instanceTime = splitInstance[3].trim();
	document.getElementById("blog-post-time").innerHTML = instanceTime;
	let instanceBlogPost = splitInstance[4].trim();
	blogPostTitle.innerHTML = instanceBlogPost.substring(instanceBlogPost.indexOf("≤") + 1, instanceBlogPost.indexOf("≥"));

	displayActiveBlogPostNumber();

return instanceBlogPost;
}

function initBlogData(dataLength){
	for (i = 0; i <= dataLength - 1; i++){
		let listedBlogPost = document.createElement("li");
		listedBlogPost.setAttribute("class", "blog-post-inside-list");
		listedBlogPost.setAttribute("value", i);
		listedBlogPost.setAttribute("id", `bp-${i}`);
		blogPostList.appendChild(listedBlogPost);
		listedBlogPost.append(`Post ${i + 1}: `);
		listedBlogPost.append(blogData[i].substring(blogData[i].indexOf("|") + 1, blogData[i].indexOf("…")));
		// Latest Entry
		if (i === dataLength - 1) {
			activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + 
			extractHeaderData(activeBlogPostNumber) + `</span>`;
		}
	}
}
initBlogData(blogData.length);

function chooseActiveBlogPost(){
	document.querySelectorAll(".blog-post-inside-list").forEach(listing => {
		listing.onclick = function(){
			document.getElementById(`bp-${activeBlogPostNumber}`).classList.remove("listing-highlight");
			activeBlogPostNumber = listing.value;
			activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + extractHeaderData(activeBlogPostNumber) + `</span>`;
		}
	})
}
chooseActiveBlogPost();

function enableBlogButtons(){
	document.querySelectorAll(".blog-button").forEach(button => {
		button.onclick = function() {
			switch(button.value) {
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
		}
	})
}
enableBlogButtons();
