/* |==========| NOTES-DATA.JS |====================> */
/* |==========| DEFINES NOTES REGISTRY OBJECT AND ITS ARRAY |====================> */

class NotesRegistry {
/**
	 * @since March 30th, 2026
	 * @description Information/Knowledge access.
	 * @param {Number} id
	 * @param {String} author A Username
	 * @param {Date} date The Date in ISO format, including hours from BlogPost.time
	 * @param {String} location Coordinates if applicable
	 * @param {String} title
	 * @param {String} info The post body 
	 * @param {Array} tags
	 * @param {Array} photos An array of photo links @TODO Write as Blob[] for DB Connection
	 * @param {Array} audio An array of audio file links @TODO Write as File[] for mp3
	 * @example `<t‰>TITLE</t‰>
		<g‰>TAGS</g‰>
		<p‰>PHOTOS</p‰>
		<a‰>AUDIO</a‰>
		<l‰>LOCATION</l‰>
		<u‰>Chrispy</u‰>
		<b‰>
		INFORMATION
		</b‰>`,
	 */
	constructor(id, author, title, body, tags, location, photos, audio) {
	this.id = id;
	this.author = author;
	// |=====|
	this.title = title;
	this.body = body;
	this.tags = tags;
	// |=====|
	this.location = location;
	this.photos = photos;
	this.audio = audio;
	}
}

/**
 * @type {NotesRegistry[]}
 */
const infoNotes = [];

/**
 * |=====| EXAMPLE NOTE ENTRY |====================>
 * @example
 	`<t‰>TITLE</t‰>
	<g‰>TAGS</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	INFORMATION
	</b‰>`,
 */
const noteData = [

	`<t‰>Life</t‰>
	<g‰>philosophy</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	It's just the experience of existing. Something profound awaits.
	</b‰>`,

	`<t‰>Planner</t‰>
	<g‰>equipment</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	I got a planner method that involves highlighting all days passed.
	</b‰>`,

	`<t‰>Quercus Rubra</t‰>
	<g‰>flora</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	Red Oak: found a leaf at the Jordan Lake Outset Overlook.
	</b‰>`,

	`<t‰>Closington Cove</t‰>
	<g‰>place</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	What I think I might call the Outset Overlook & landbridge hiking area at Jordan Lake.
	</b‰>`,

	`<t‰>Forsythia Suspensa</t‰>
	<g‰>flora</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	A flowing bush yielding yellow flowers. Characteristic of my childhood backyard and along the shore trails on Jordan Lake.
	</b‰>`,

	`<t‰>Wisteria Sinensis</t‰>
	<g‰>flora</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	Purple flower bunches that are invasive to the Jordan Lake area.
	</b‰>`,

	`<t‰>Positive Emotion</t‰>
	<g‰>philosophy</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	Aiming at something that's worthwhile that you can argue strongly, that's desired, and that's possible, arouses positive emotion.
	A problem resolution does not remove all problems.
	</b‰>`,

	`<t‰>Impermanence</t‰>
	<g‰>philosophy</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	The concept that nothing lasts forever. Do not attach to the expectation for anything to remain.
	Positive expectation may arise negative experience; negative expectation may arise positive experience.
	</b‰>`,

	`<t‰>To Live with Money</t‰>
	<g‰>philosophy</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	Accumulating money serves to establish security in navigating society and to amplify aspects of one's character and personality.
	Such amplification is not inherently a positive. Consider an individual with a character trait of overall carelessness bearing a
	personality that is hedonistic who exhibits plentiful risk-taking behavior. This individual may express interest in experimenting with 
	all psychoactive drugs, be inclined to promiscuity, and invest in dangerous activities such as sky diving and gambling to excess.
	Such amplified aspects offset positives that money could provide as they reduce his security that money might otherwise provide. 

	</b‰>`,
		
	`<t‰>Interest Discovery</t‰>
	<g‰>philosophy</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	There are so many things that could captivate one's interest in life.
	It's as if the act of becoming interested in something bears a deceptive nature.
	One's motivation, interpersonal validation, and engagement in the activity would create a persona so closely
	linked with that interest. Whether or not this interest is the real "passion" for the individual, 
	it only serves in the outset of engagement as a dopeminergic kicker and fragile stairway en route towards solidifying one's sense of identity.
	Come the criticisms, the banalaties, the circumstantial connections and mundanities that surround this interest, it may indeed prove 
	fragility and crumble.
	I've struggled very much in my earlier years to determine what my "passion" really was, or what activity or 
	aspect would become incorporated into my identity to such an extent I would garner a sense of fulfillment.
	I'll expound on this at another date.
	</b‰>`,

];
// TODO: finish the exposition on Interest Discovery
/* 
	`<t‰>TITLE</t‰>
	<g‰>TAGS</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	INFORMATION
	</b‰>`
*/