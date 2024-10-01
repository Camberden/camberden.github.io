// ----- BLOG POSTS
let activeBlogPost = document.getElementById("active-blog-post");
let activeBlogPostNumber = blogData.length - 1;
let blogPostList = document.getElementById("blog-post-list");
let blogPostTitle = document.getElementById("blog-post-title");


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
	return content.substring(content.indexOf("<" + tag + ">"), content.indexOf("</" + tag + ">"));
}

function extractHeaderData(increment) {
	const instance = blogData[increment];
	let splitInstance = instance.split("|");
	let instanceDate = splitInstance[1].trim();
	document.getElementById("blog-post-date").innerHTML = instanceDate;
	let instanceLocation = splitInstance[2].trim();
	document.getElementById("blog-post-location").innerHTML = instanceLocation;
	let instanceTime = splitInstance[3].trim();
	document.getElementById("blog-post-time").innerHTML = instanceTime;
	let instanceBlogPost = splitInstance[4].trim();
	/* Add tags below as needed: */
	blogPostTitle.innerHTML = gatherTextBetweenTags(instanceBlogPost, "b-title");

	displayActiveBlogPostNumber();

	return instanceBlogPost;
}

function initBlogData(dataLength) {
	for (i = 0; i <= dataLength - 1; i++) {
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

function chooseActiveBlogPost() {
	document.querySelectorAll(".blog-post-inside-list").forEach(listing => {
		listing.onclick = function () {
			document.getElementById(`bp-${activeBlogPostNumber}`).classList.remove("listing-highlight");
			activeBlogPostNumber = listing.value;
			activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + extractHeaderData(activeBlogPostNumber) + `</span>`;
		}
	})
}
chooseActiveBlogPost();


function enableBlogButtons() {
	document.querySelectorAll(".blog-button").forEach(button => {
		button.onclick = function () {
			buttonInterface.addButtonDepressedHighlight(button);

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
		button.onmouseenter = function () {
			buttonInterface.addButtonHighlight(button);
		}
		button.onmouseleave = function () {
			buttonInterface.removeButtonDepressedHighlight(button);
		}
	});
}
enableBlogButtons();
