const express = require('express');
const pool = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/workspace'), (req, res) => {
	res.json({
		redirectUrl: '/workspace'  // Client reads this
	});
}

router.get('/blog'), (req, res) => {
	res.json({
		redirectUrl: '/blog',
	});
}
module.exports = router;