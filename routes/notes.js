const express = require('express');
const pool = require('../config/database');
const { cookieJwtAuth } = require('../middleware/auth');

const router = express.Router();

// Create a new note
router.post('/', cookieJwtAuth, async (req, res, next) => {

  try {
    const { newNoteTitle, newNoteLocation, newNoteAudio, newNotePhotos, newNoteTags, newNoteContent } = req.body;
    const user_id = req.user.payload.id;

    if (!newNoteTitle || !newNoteContent) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    await pool.getConnection();
    console.log("Pool gets first notes connection");
    const [result] = await pool.execute(
      'INSERT INTO notes (user_id, title, location, audio, photos, tags, content) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, newNoteTitle, newNoteLocation, newNoteAudio, newNotePhotos, newNoteTags, newNoteContent]
    );

    pool.releaseConnection();


    res.redirect('/workspace/workspace.html');
    // res.status(201).json({
    //   message: 'Note created successfully',
    //   noteId: result.insertId
    // });
  } catch (error) {
    console.error('Note creation error:', error);
    res.status(500).json({ error: 'Failed to create note' });
  }
});

// Get all notes (public)
router.get('/', async (req, res) => {
  try {
    console.log("accessing router.get('/')");
    await pool.getConnection();

    const [notes] = await pool.execute(
      'SELECT n.id, n.title, n.location, n.audio, n.photos, n.tags, n.content, n.created_at, u.username FROM notes n JOIN users u ON n.user_id = u.id ORDER BY n.created_at DESC'
    );

    pool.releaseConnection();

    // Parse JSON fields
    const parsedNotes = notes.map(note => ({
      ...note,
      // tags: note.tags ? JSON.parse(note.tags) : [],
      // photos: note.photos ? JSON.parse(note.photos) : [],
      // audio: note.audio ? JSON.parse(note.audio) : []
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
    await pool.getConnection();

    const [notes] = await pool.execute(
      'SELECT n.*, u.username FROM notes n JOIN users u ON n.user_id = u.id WHERE n.id = ?',
      [id]
    );

    pool.releaseConnection();

    if (notes.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }

    const note = notes[0];
    // note.tags = note.tags ? JSON.parse(note.tags) : [];
    // note.photos = note.photos ? JSON.parse(note.photos) : [];
    // note.audio = note.audio ? JSON.parse(note.audio) : [];

    res.json(note);
  } catch (error) {
    console.error('Note fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch note' });
  }
});

// Update a note (owner only)
router.put('/:id', cookieJwtAuth, async (req, res) => {
  try {
    const { id } = req.params;
    // TODO updateNoteTitle, updateNoteLocation, updateNoteAudio, updateNotePhotos, updateNoteTags, updateNoteContent
    const { title, location, audio, photos, tags, content } = req.body;
    const user_id = req.user.id;

    await pool.getConnection();

    // Check ownership
    const [notes] = await pool.execute(
      'SELECT user_id FROM notes WHERE id = ?',
      [id]
    );

    if (notes.length === 0) {
      pool.releaseConnection();
      return res.status(404).json({ error: 'Note not found' });
    }

    if (notes[0].user_id !== user_id) {
      pool.releaseConnection();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await pool.execute(
      'UPDATE notes SET title = ?, location = ?, audio = ?, photos = ?, tags = ?, content = ? WHERE id = ?',
      [title, location, audio, photos, tags, content, id]
    );

    pool.releaseConnection();

    res.json({ message: 'Note updated successfully' });
  } catch (error) {
    console.error('Note update error:', error);
    res.status(500).json({ error: 'Failed to update note' });
  }
});

// Delete a note (owner only)
router.delete('/:id', cookieJwtAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;

    await pool.getConnection();

    // Check ownership
    const [notes] = await pool.execute(
      'SELECT user_id FROM notes WHERE id = ?',
      [id]
    );

    if (notes.length === 0) {
      pool.releaseConnection();
      return res.status(404).json({ error: 'Note not found' });
    }

    if (notes[0].user_id !== user_id) {
      pool.releaseConnection();
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await pool.execute('DELETE FROM notes WHERE id = ?', [id]);

    pool.releaseConnection();

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Note delete error:', error);
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;
