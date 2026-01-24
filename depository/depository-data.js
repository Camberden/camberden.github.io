

const tags = [
	"accounting",
	"programming",
	"music",
	"fitness",
	"policy",
	"philosophy",
	"travel",
	"recreation",
];


/**
 * 
 * @param {String} tag 
 * @returns {String} <tag class="tag-tag"></tag>
 */
function gatherStylesWithinTag(tag) {
	return (`${tag} class="tag-${tag};"`);
}

/**
 * @param {String} content
 * Gathers text within a blog post's content between custom tags such as `<b-title></b-title>`.
 * @param {String}tag
 * The tag name without decorators, such as `b-title` for `<b-title></b-title>`.
 * @fires gatherStylesWithinTag(string)
 * @see /blog/blog-data.js 
 */
function gatherTextBetweenTags(content, tag) {
	const l = tag.length + 2;
	return content.substring(content.indexOf("<" + gatherStylesWithinTag(tag) + ">") + l, content.indexOf("</" + tag + ">"));
}


function initDepositedNotes() {
	for (let i = 0; i < depositoryData.length - 1; i++) {
		console.log("haha");
	}

}
const depositoryData = [

	`

	`,

	`
	
	`,

	`
	
	`,

];