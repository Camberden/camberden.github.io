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

    const { title, date_posted, location, hours, audio, photos, tags, content } = req.body;
    const user_id = req.user.payload.id;
    console.log(user_id);

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    await pool.getConnection();

    const [result] = await pool.query(
      'INSERT INTO blog_posts (title, date_posted, location, hours, audio, photos, user_id, tags, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [title, date_posted, location, hours, audio, photos, user_id, tags, content]
    );

    await pool.releaseConnection();
    res.send({
      message: '(1) Blog post created successfully!',
      postId: result.insertId,
      location: '/blog/blog.html',
      redirectUrl: 'blog/blog.html'
    });
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
  if (req.message) {
    alert(message);
  }
  try {
    const connection = await pool.getConnection();

    const [posts] = await connection.execute(
      'SELECT bp.id, bp.title, bp.location, bp.audio, bp.photos, bp.tags, bp.content, bp.created_at, u.username FROM blog_posts bp JOIN users u ON bp.user_id = u.id ORDER BY bp.date_posted DESC'
    );

    connection.release();

    // Parse JSON fields
    const parsedPosts = posts.map(post => ({
      ...post,
      // tags: post.tags ? JSON.parse(post.tags) : []
    }));

    res.json(parsedPosts);
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});
// Get a single blog post
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();

    const [posts] = await connection.execute(
      'SELECT bp.*, u.username FROM blog_posts bp JOIN users u ON bp.user_id = u.id WHERE bp.id = ?',
      [id]
    );

    connection.release();

    if (posts.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    const post = posts[0];
    post.tags = post.tags ? JSON.parse(post.tags) : [];

    res.json(post);
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});
// Update a blog post (owner only)
router.put('/:id', cookieJwtAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, location, audio, photos, tags, content } = req.body;
    const user_id = req.user.id;

    const connection = await pool.getConnection();

    // Check ownership
    const [posts] = await connection.execute(
      'SELECT user_id FROM blog_posts WHERE id = ?',
      [id]
    );

    if (posts.length === 0) {
      connection.release();
      return res.status(404).json({ error: 'Blog post not found' });
    }

    if (posts[0].user_id !== user_id) {
      connection.release();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await connection.execute(
      'UPDATE blog_posts SET title = ?, location = ?, audio = ?, photos = ?, tags = ?, content = ? WHERE id = ?',

      [title, location, audio, photos, tags, content, id]
    );

    connection.release();

    res.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error('Blog update error:', error);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});
// Delete a blog post (owner only)
router.delete('/:id', cookieJwtAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;

    const connection = await pool.getConnection();

    // Check ownership
    const [posts] = await connection.execute(
      'SELECT user_id FROM blog_posts WHERE id = ?',
      [id]
    );

    if (posts.length === 0) {
      connection.release();
      return res.status(404).json({ error: 'Blog post not found' });
    }

    if (posts[0].user_id !== user_id) {
      connection.release();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await connection.execute('DELETE FROM blog_posts WHERE id = ?', [id]);

    connection.release();

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Blog delete error:', error);
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

module.exports = router;
