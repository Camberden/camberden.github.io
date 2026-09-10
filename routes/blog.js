const express = require('express');
const pool = require('../config/database');
const { cookieJwtAuth } = require('../middleware/auth');
const { memStorage } = require("../middleware/media");

const router = express.Router();

/* 1	id	int	NULL	NULL	NO	NULL	auto_increment		
2	user_id	int	NULL	NULL	NO	NULL		users(id)	
3	title	varchar(255)	utf8mb4	utf8mb4_0900_ai_ci	NO	NULL			
4	location	varchar(255)	utf8mb4	utf8mb4_0900_ai_ci	YES	NULL			
5	audio	varchar(255)	utf8mb4	utf8mb4_0900_ai_ci	YES	NULL			
6	photos	varchar(255)	utf8mb4	utf8mb4_0900_ai_ci	YES	NULL			
7	tags	varchar(255)	utf8mb4	utf8mb4_0900_ai_ci	YES	NULL			
8	content	mediumtext	utf8mb4	utf8mb4_0900_ai_ci	NO	NULL			16,777,215 for medium text
9	created_at	timestamp	NULL	NULL	YES	CURRENT_TIMESTAMP	DEFAULT_GENERATED		
10	updated_at	timestamp	NULL	NULL	YES	CURRENT_TIMESTAMP	on update CURRENT_TIMESTAMP		 
  */

// router.post('/upload', memStorage.single('heicBP'), function (req, res, next) {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded');
//   }
//   console.log("blog photo uploading...");
//   (async () => {
//     const inputBuffer = await promisify(fs.readFile)(req.file.path);
//     const outputBuffer = await convert({
//       buffer: inputBuffer,
//       format: 'JPEG',
//       quality: 0.5,
//       name: 'temp-photo',
//       // % Possibly add 'name' here?
//     });

//     await promisify(fs.writeFile)(`assets/blog-photos/bp-photo-${Date.now()}.jpeg`, outputBuffer);

//   })();
//   fs.unlink(req.file.path, (err) => {
//     if (err) {
//       console.error('File cleanup failed:', err);
//     } else {
//       console.log('Uploaded file cleaned up successfully');
//     }
//   });
//   // res.redirect('/');
//   next();
// });

// Create a new blog post
router.post('/', cookieJwtAuth, async (req, res, next) => {

  try {

    if (!req.user) {
      res.sendStatus(404);
      return;
    }

    const { newBpTitle, newBpLocation, newBpAudio, newBpPhotos, newBpTags, newBpContent } = req.body;
    const user_id = req.user.payload.id;
    console.log(user_id);

    if (!newBpTitle || !newBpContent) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    await pool.getConnection();

    const [result] = await pool.query(
      'INSERT INTO blog_posts (user_id, title, location, audio, photos, tags, content) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, newBpTitle, newBpLocation, newBpAudio, newBpPhotos, newBpTags, newBpContent]
    );

    await pool.releaseConnection();

    // res.redirect('../blog/blog.html');
    res.redirect('../../test-blog/test-blog.html');

    // res.send({
    //   message: '(1) Blog post created successfully!',
    //   postId: result.insertId,
    //   location: '/blog/blog.html',
    //   redirectUrl: 'blog/blog.html'
    // });
  } catch (error) {
    console.error('Blog post creation error:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }

  next();
});
router.get('/', async (req, res) => {
  const closeout = req.body.message;
  console.log("hi")
  res.send(closeout);
});
// Get all blog posts (public)
router.get('/all', async (req, res) => {
  console.log('Blog API: router.get(`/all`) [const parsedPosts = posts.map(post => ({...post, }));]');

  if (req.message) {
    console.log(message);
  }
  try {
    await pool.getConnection();

    const [posts] = await pool.execute(
      'SELECT bp.id, bp.title, bp.location, bp.audio, bp.created_at, u.username FROM blog_posts bp JOIN users u ON bp.user_id = u.id ORDER BY bp.created_at DESC'
    );

    pool.releaseConnection();

    // ! Parse JSON fields
    const parsedPosts = posts.map(post => ({
      ...post,
    }));
    // tags: post.tags ? JSON.parse(post.tags) : []

    res.json(parsedPosts);
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});
// Get a single blog post
router.get('/read/:id', async (req, res, next) => {
  console.log('Blog API: router.get(`/read/:id`) [res.send(req.params)]');
  console.log('These are simply the request parameters.');
  res.send(req.params);
  next();
});
// Update a blog post (owner only)
// ^ Former: `SELECT bp.*, u.username FROM blog_posts bp JOIN users u ON bp.user_id = u.id WHERE bp.id = ?`
// ^ const id = parseInt(req.params.id).toFixed(0);

router.get('/all/:username', cookieJwtAuth, async (req, res) => {
  console.log('Blog API: router.get(`/all`) [const parsedPosts = posts.map(post => ({...post, }));]');

  try {
    if (!req.user.payload.username) {
      console.log("Not a user.");
      return res.status(404).json({ error: "Not a user." });
    }
    const currentUser = req.user.payload.username;
    console.log(currentUser);

    await pool.getConnection();

    const [posts] = await pool.execute(
      'SELECT bp.id, bp.title, bp.location, bp.audio, bp.created_at, u.username FROM blog_posts bp JOIN users u ON bp.user_id = u.id ORDER BY bp.created_at DESC'
    );

    pool.releaseConnection();

    // ! Parse JSON fields
    const parsedPosts = posts.map(post => ({
      ...post,
    }));
    // tags: post.tags ? JSON.parse(post.tags) : []

    res.json(parsedPosts);
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

router.get('/:id', async (req, res) => {
  console.log('Blog API: router.get(`/:id`) [const id = req.params.id]');
  try {
    const id = parseInt(req.params.id).toFixed(0);
    console.log("Fetching blog post with ID:", id);
    console.log("Id type:", typeof id);

    await pool.getConnection();
    console.log("Getting connection; checking type:")
    const [posts] = await pool.execute(
      `SELECT bp.id, bp.title, bp.location, bp.audio, bp.photos, bp.tags, bp.content, bp.created_at FROM blog_posts bp WHERE bp.id = ?`
      , [id]
    );

    pool.releaseConnection();
    console.log("Connection released; checking posts length:", posts.length);
    if (posts.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    const parsedPost = posts.map(post => ({
      ...post,
    }));
    console.log(parsedPost);

    res.json(parsedPost);
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});
router.put('/:id', cookieJwtAuth, async (req, res) => {
  try {
    const updateBpId = parseInt(req.params.id).toFixed(0);
    const { updateBpTitle, updateBpLocation, updateBpAudio, updateBpPhotos, updateBpTags, updateBpContent } = req.body;
    const user_id = req.user.payload.id;

    await pool.getConnection();

    // Check ownership
    const [posts] = await pool.execute(
      'SELECT user_id FROM blog_posts WHERE id = ?',
      [updateBpId]
    );

    if (posts.length === 0) {
      pool.releaseConnection();
      return res.status(404).json({ error: 'Blog post not found' });
    }

    if (posts[0].user_id !== user_id) {
      pool.releaseConnection();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await pool.execute(
      'UPDATE blog_posts SET title = ?, location = ?, audio = ?, photos = ?, tags = ?, content = ? WHERE id = ?',

      [updateBpTitle, updateBpLocation, updateBpAudio, updateBpPhotos, updateBpTags, updateBpContent, updateBpId]
    );

    pool.releaseConnection();

    res.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error('Blog update error:', error);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});
// Delete a blog post (owner only)
router.delete('/:id', cookieJwtAuth, async (req, res) => {
  try {
    const deleteBpId = parseInt(req.params.id).toFixed(0);
    const user_id = req.user.payload.id;
    console.log("Fetching delete param:", deleteBpId);
    console.log("Id type:", typeof deleteBpId);

    await pool.getConnection();

    // Check ownership
    const [posts] = await pool.execute(
      'SELECT user_id FROM blog_posts WHERE id = ?',
      [deleteBpId]
    );

    if (posts.length === 0) {
      pool.releaseConnection();
      return res.status(404).json({ error: 'Blog post not found' });
    }

    if (posts[0].user_id !== user_id) {
      pool.releaseConnection();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await pool.execute('DELETE FROM blog_posts WHERE id = ?', [deleteBpId]);

    pool.releaseConnection();

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Blog delete error:', error);
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

module.exports = router;
