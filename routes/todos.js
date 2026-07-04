const express = require('express');
const pool = require('../config/database');
const { cookieJwtAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
	console.log('Todos API: router.get(`/`) [const parsedTodos = todoposts.map(todopost => ({...todopost, }));]');

	if (req.message) {
		console.log(message);
	}
	try {
		await pool.getConnection();

		const [todoposts] = await pool.execute(
			'SELECT td.id, td.info, td.created_at, td.updated_at FROM todos td JOIN users u ON td.user_id = u.id ORDER BY td.created_at DESC'
		);

		pool.releaseConnection();

		// ! Parse JSON fields
		const parsedTodoposts = todoposts.map(todopost => ({
			...todopost,
		}));
		// tags: post.tags ? JSON.parse(post.tags) : []

		res.json(parsedTodoposts);
	} catch (error) {
		console.error('Todo fetch error:', error);
		res.status(500).json({ error: 'Failed to fetch todos' });
	}
});

router.post('/', cookieJwtAuth, async (req, res, next) => {

	try {

		if (!req.user) {
			res.sendStatus(404);
			return;
		}

		const { newTdInfo } = req.body;
		const user_id = req.user.payload.id;
		console.log(user_id);

		if (!newTdInfo) {
			return res.status(400).json({ error: 'Info required.' });
		}

		await pool.getConnection();

		const [result] = await pool.query(
			'INSERT INTO todos (user_id, info) VALUES (?, ?)',
			[user_id, newTdInfo]
		);

		await pool.releaseConnection();

		// res.redirect('../blog/blog.html');
		res.redirect('../../worksite/worksite.html');

		// res.send({
		//   message: '(1) Blog post created successfully!',
		//   postId: result.insertId,
		//   location: '/blog/blog.html',
		//   redirectUrl: 'blog/blog.html'
		// });
	} catch (error) {
		console.error('Blog todo creation error:', error);
		res.status(500).json({ error: 'Failed to create todopost' });
	}

	next();
});

router.put('/:id', cookieJwtAuth, async (req, res, next) => {
	try {
		const { updateTdId } = req.params;
		const { updateTdInfo } = req.body;
		const user_id = req.user.payload.id;

		await pool.getConnection();

		// Check ownership
		const [todoposts] = await pool.execute(
			'SELECT user_id FROM todos WHERE id = ?',
			[updateTdId]
		);

		if (todoposts.length === 0) {
			pool.releaseConnection();
			return res.status(404).json({ error: 'todoposts not found' });
		}

		if (todoposts[0].user_id !== user_id) {
			pool.releaseConnection();
			return res.status(403).json({ error: 'Unauthorized' });
		}

		await pool.execute(
			'UPDATE todos SET info = ? WHERE id = ?',

			[updateTdInfo, updateTdId]
		);

		pool.releaseConnection();

		res.json({ message: 'todopost updated successfully' });
	} catch (error) {
		console.error('todopost update error:', error);
		res.status(500).json({ error: 'Failed to update todopost' });
	}
});

router.delete('/:id', cookieJwtAuth, async (req, res) => {
	console.log("Todos API: router.delete(`/:id`) [const { deleteTdId } = req.params;]");
	try {
		const { deleteTdId } = req.params;
		const user_id = req.user.payload.id;

		await pool.getConnection();

		// Check ownership
		const [todoposts] = await pool.execute(
			'SELECT user_id FROM todos WHERE id = ?',
			[deleteTdId]
		);

		if (todoposts.length === 0) {
			pool.releaseConnection();
			return res.status(404).json({ error: 'Todopost not found' });
		}

		if (todoposts[0].user_id !== user_id) {
			pool.releaseConnection();
			return res.status(403).json({ error: 'Unauthorized' });
		}

		await pool.execute('DELETE FROM todos WHERE id = ?', [deleteTdId]);

		pool.releaseConnection();

		res.json({ message: 'Blog post deleted successfully' });
	} catch (error) {
		console.error('Blog delete error:', error);
		res.status(500).json({ error: 'Failed to delete blog post' });
	}
});


module.exports = router;