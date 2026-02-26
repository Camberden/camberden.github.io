#!/usr/bin/env node
// filepath: /Users/chrispy/Documents/cambergithub/camberden.github.io/scripts/update‑cmbr‑blog.js

import fs from 'fs';
import path from 'path';
import { blogData } from './blog/blog-data.js';
import { BlogPost } from './blog/blog-data.js';

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

/**
 * @type {BlogPost[]} an array of BlogPost objects
 */
const blogPosts = []; 

const dataLength = blogData.length;
for (let i = 1; i <= (dataLength - 1); i++) {
		const instance = blogData[i];
		const splitInstance = instance.split("|");
		const instanceDate = splitInstance[1].trim();
		const instanceLocation = splitInstance[2].trim();
		const instanceTime = splitInstance[3].trim();
    const instanceBlogPost = splitInstance[4].trim();
		const instanceTitle = gatherTextBetweenTags(instanceBlogPost, "b-title").trim();
		const bp = new BlogPost(i, instanceDate, instanceLocation, instanceTime, instanceTitle, [], [], instanceBlogPost);

		blogPosts.push(bp);
  }

/* strip garbage characters from the date string and turn it
   into an ISO timestamp; if parsing fails the original string is kept */
function cleanDate(raw) {
  const cleaned = raw.replace(/[^\d\/\-,…\: ]/g, '');
  const d = new Date(cleaned);
  return isNaN(d) ? raw : d.toISOString();
}

/* remove anything that isn’t a digit, colon or AM/PM marker */
function cleanTime(raw) {
  return raw.replace(/[^\dAPMapm\:]/g, '').trim();
}

function buildBlogObject(posts) {
  const obj = {};
  posts.forEach((bp, i) => {
    obj[`post-${i}`] = {
      date: cleanDate(bp.date || ''),
      location: bp.location || '',
      hour: cleanTime(bp.time || ''),
      title: bp.title || '',
      tags: Array.isArray(bp.tags) ? bp.tags : [],
      media: Array.isArray(bp.media) ? bp.media : [],
      content: bp.content || bp.blogPost || ''
    };
  });
  return obj;
}

function main() {
  const cmbrPath = path.resolve(process.cwd(), 'cmbr.json');
  const cmbr = JSON.parse(fs.readFileSync(cmbrPath, 'utf8'));
  cmbr.blog = buildBlogObject(blogPosts);
  fs.writeFileSync(cmbrPath, JSON.stringify(cmbr, null, 2));
  console.log(`wrote ${Object.keys(cmbr.blog).length} posts to ${cmbrPath}`);
}

// main();