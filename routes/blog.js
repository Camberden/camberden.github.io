const express = require('express');
const pool = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Create a new blog post
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, content, date_posted, location, hours, tags } = req.body;
    const user_id = req.user.id;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const connection = await pool.getConnection();

    const [result] = await connection.execute(
      'INSERT INTO blog_posts (user_id, title, content, date_posted, location, hours, tags) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, title, content, date_posted, location, hours, JSON.stringify(tags || [])]
    );

    connection.release();

    res.status(201).json({ 
      message: 'Blog post created successfully',
      postId: result.insertId 
    });
  } catch (error) {
    console.error('Blog post creation error:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// Get all blog posts (public)
router.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();

    const [posts] = await connection.execute(
      'SELECT bp.id, bp.title, bp.content, bp.date_posted, bp.location, bp.hours, bp.tags, bp.created_at, u.username FROM blog_posts bp JOIN users u ON bp.user_id = u.id ORDER BY bp.date_posted DESC'
    );

    connection.release();

    // Parse JSON fields
    const parsedPosts = posts.map(post => ({
      ...post,
      tags: post.tags ? JSON.parse(post.tags) : []
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
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, date_posted, location, hours, tags } = req.body;
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
      'UPDATE blog_posts SET title = ?, content = ?, date_posted = ?, location = ?, hours = ?, tags = ? WHERE id = ?',
      [title, content, date_posted, location, hours, JSON.stringify(tags || []), id]
    );

    connection.release();

    res.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error('Blog update error:', error);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});

// Delete a blog post (owner only)
router.delete('/:id', authenticateToken, async (req, res) => {
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
