const express = require('express');
const connection = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Create a new note
router.post('/', authenticateToken, async (req, res) => {

  try {
    const { title, body, tags, location, photos, audio } = req.body;
    const user_id = req.user.id;

    if (!title || !body) {
      return res.status(400).json({ error: 'Title and body are required' });
    }

    const connection = await pool.getConnection();

    const [result] = await connection.execute(
      'INSERT INTO notes (user_id, title, body, tags, location, photos, audio) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, title, body, JSON.stringify(tags || []), location, JSON.stringify(photos || []), JSON.stringify(audio || [])]
    );

    connection.release();

    res.status(201).json({
      message: 'Note created successfully',
      noteId: result.insertId
    });
  } catch (error) {
    console.error('Note creation error:', error);
    res.status(500).json({ error: 'Failed to create note' });
  }
});

// Get all notes (public)
router.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();

    const [notes] = await connection.execute(
      'SELECT n.id, n.title, n.body, n.tags, n.location, n.photos, n.audio, n.created_at, u.username FROM notes n JOIN users u ON n.user_id = u.id ORDER BY n.created_at DESC'
    );

    connection.release();

    // Parse JSON fields
    const parsedNotes = notes.map(note => ({
      ...note,
      tags: note.tags ? JSON.parse(note.tags) : [],
      photos: note.photos ? JSON.parse(note.photos) : [],
      audio: note.audio ? JSON.parse(note.audio) : []
    }));

    res.json(parsedNotes);
  } catch (error) {
    console.error('Notes fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// Get a single note
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();

    const [notes] = await connection.execute(
      'SELECT n.*, u.username FROM notes n JOIN users u ON n.user_id = u.id WHERE n.id = ?',
      [id]
    );

    connection.release();

    if (notes.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }

    const note = notes[0];
    note.tags = note.tags ? JSON.parse(note.tags) : [];
    note.photos = note.photos ? JSON.parse(note.photos) : [];
    note.audio = note.audio ? JSON.parse(note.audio) : [];

    res.json(note);
  } catch (error) {
    console.error('Note fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch note' });
  }
});

// Update a note (owner only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, tags, location, photos, audio } = req.body;
    const user_id = req.user.id;

    const connection = await pool.getConnection();

    // Check ownership
    const [notes] = await connection.execute(
      'SELECT user_id FROM notes WHERE id = ?',
      [id]
    );

    if (notes.length === 0) {
      connection.release();
      return res.status(404).json({ error: 'Note not found' });
    }

    if (notes[0].user_id !== user_id) {
      connection.release();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await connection.execute(
      'UPDATE notes SET title = ?, body = ?, tags = ?, location = ?, photos = ?, audio = ? WHERE id = ?',
      [title, body, JSON.stringify(tags || []), location, JSON.stringify(photos || []), JSON.stringify(audio || []), id]
    );

    connection.release();

    res.json({ message: 'Note updated successfully' });
  } catch (error) {
    console.error('Note update error:', error);
    res.status(500).json({ error: 'Failed to update note' });
  }
});

// Delete a note (owner only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;

    const connection = await pool.getConnection();

    // Check ownership
    const [notes] = await connection.execute(
      'SELECT user_id FROM notes WHERE id = ?',
      [id]
    );

    if (notes.length === 0) {
      connection.release();
      return res.status(404).json({ error: 'Note not found' });
    }

    if (notes[0].user_id !== user_id) {
      connection.release();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await connection.execute('DELETE FROM notes WHERE id = ?', [id]);

    connection.release();

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Note delete error:', error);
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;
