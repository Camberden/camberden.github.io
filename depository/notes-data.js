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
 * `<t‰>TITLE</t‰>
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
	`<t‰>first thing</t‰>
	<g‰>philosophy</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	Here's the first thing.

	</b‰>`,
	
	`<t‰>anything</t‰>
	<g‰>place</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	Here's anything.

	</b‰>`,

	`<t‰>something</t‰>
	<g‰>equipment</g‰>
	<p‰></p‰>
	<a‰></a‰>
	<l‰></l‰>
	<u‰>Chrispy</u‰>
	<b‰>
	Here's something.

	</b‰>`,



];