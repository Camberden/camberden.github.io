// ----- BLOG POSTS
let activeBlogPost = document.getElementById("active-blog-post");
let activeBlogPostNumber = blogData.length - 1;
let blogPostList = document.getElementById("blog-post-list");

function displayActiveBlogPostNumber(){
	document.getElementById("displayed-post").innerHTML = activeBlogPostNumber + 1;
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
	displayActiveBlogPostNumber();

return instanceBlogPost;
}

function initBlogData(dataLength){
	for (i = 0; i <= dataLength - 1; i++){
		let listedBlogPost = document.createElement("li");
		blogPostList.appendChild(listedBlogPost);
		listedBlogPost.append(`Post ${i + 1}`);

		// Latest Entry
		if (i === dataLength - 1) {
			activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + extractHeaderData(activeBlogPostNumber) + `</span>`;
			displayActiveBlogPostNumber();
		}
	}
}
initBlogData(blogData.length);

function chooseActiveBlogPost(choice){
	if (choice <= blogData.length && choice >= 0) {
		activeBlogPostNumber = choice;
		activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + extractHeaderData(activeBlogPostNumber) + `</span>`;
	}
}

function previousBlogPost(){
	if (activeBlogPostNumber > 0) {
		activeBlogPostNumber--;
		activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + extractHeaderData(activeBlogPostNumber) + `</span>`;
	}
}

function nextBlogPost(){
	if (activeBlogPostNumber < blogData.length - 1) {
		activeBlogPostNumber++;
		activeBlogPost.innerHTML = `<span id=entry-${activeBlogPostNumber}>` + extractHeaderData(activeBlogPostNumber) + `</span>`;
	}
}