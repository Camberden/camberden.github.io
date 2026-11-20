---
title: Info for Cambermark Runner
location: Pittsboro, NC
time: 2026-11-18T21:00:00
author: Chrispy  
tags:
  - blogging
  - cmbr
audio:
  - https://www.youtube.com/watch?v=ICsUXMEa1Lg
photos:
  - ./images/photo-nc-e001-6186.jpeg
draft: false
---

# Testing Markdown Database

I'm using MarkdownDB to manage my blog posts.

## How to:

> be **strong!**

***

``

npx mddb <path-to-folder-with-your-md-files>

npx mddb /Users/chrispy/Documents/cambermark/dataset

Monitor changes => npx mddb ./dataset

npm install mddb

SELECT files.* FROM files INNER JOIN file_tags ON files._id = file_tags.file WHERE file_tags.tag = 'cmbr'

SELECT * FROM dataset INNER JOIN file_tags ON files._id = file_tags.file WHERE file_tags.tag = 'cmbr'

``