// const express = require('express');
// const { hashPassword, comparePassword } = require("../services/hashingService");
// const { generateToken } = require("../services/tokenService");
// const cookieParser = require('cookie-parser');
// const pool = require('../config/database');

// const router = express.Router();
// router.post('/register', async (req, res) => {
// 	try {
// 		const { usernameRegister, emailRegister, passwordRegister } = req.body;

// 		if (!usernameRegister || !emailRegister || !passwordRegister) {
// 			return res.status(400).json({ error: 'Username, email, and password are required' });
// 		}

// 		const connection = pool.getConnection();

// 		// Check if user already exists
// 		const [existingUser] = await connection.execute(
// 			'SELECT id FROM users WHERE username = ? OR email = ?',
// 			[usernameRegister, emailRegister]
// 		);

// 		if (existingUser.length > 0) {
// 			connection.release();
// 			return res.status(409).json({ error: 'Username or email already exists' });
// 		}

// 		// Hash password
// 		const hashedPassword = await hashPassword(passwordRegister);

// 		// Insert new user
// 		const [result] = await connection.execute(
// 			'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
// 			[usernameRegister, emailRegister, hashedPassword]
// 		);

// 		connection.release();

// 		res.status(201).json({
// 			message: 'User registered successfully',
// 			userId: result.insertId
// 		});
// 	} catch (error) {
// 		console.error('Registration error:', error);
// 		res.status(500).json({ error: 'Registration failed' });
// 	}
// });

// router.post('/login', async (req, res) => {

// 	try {

// 		const { currentUsername, currentPassword } = req.body;

// 		if (!currentUsername || !currentPassword) {
// 			return res.status(400).json({ error: 'Username and password are required' });
// 		}

// 		const connection = pool.getConnection();

// 		// Find user
// 		const [users] = await connection.execute(
// 			'SELECT id, username, password_hash FROM users WHERE username = ?',
// 			[currentUsername]
// 		);

// 		connection.release();

// 		if (users.length === 0) {
// 			return res.status(401).json({ error: 'Invalid username or password' });
// 		}

// 		const selectedUser = users[0];

// 		// Compare password with stored hash
// 		const validPassword = await comparePassword(currentPassword, selectedUser.password_hash);

// 		if (!validPassword) {
// 			return res.status(401).json({ error: 'Invalid username or password' });
// 		}
// 		const token = generateToken({ id: selectedUser.id, username: selectedUser.username });

// 		// Set secure HTTP-only cookie
// 		res.cookie('jwt_token', token, {
// 			httpOnly: true,
// 			secure: process.env.NODE_ENV === 'production',
// 			sameSite: 'strict',
// 			maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
// 		});

// 	} catch (err) {
// 		if (err instanceof ReferenceError) {
// 			console.error(err);
// 			res.status(501).send({ message: "Cookie-Related Login Reference Error", redirectUrl: "/" });
// 		}
// 	}
// });

// router.post('/logout', async (req, res) => {
// 	res.clearCookie('jwt_token', { path: '/', sameSite: 'strict' });
// 	res.json({
// 		message: 'Logout successful.',
// 		redirectUrl: '/'
// 	});
// });

// router.post('/profile', (req, res) => {
// 	// req.user is set by auth middleware after token verification
// 	res.json({
// 		message: "Entered.",
// 		user: req.user,
// 	});
// });

// module.exports = router;