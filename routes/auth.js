const express = require('express');
const { hashPassword, comparePassword } = require("../services/hashingService");
const { generateToken, verifyToken } = require("../services/tokenService");
const pool = require('../config/database');
const { cookieJwtAuth } = require('../middleware/auth.js');
const cookieParser = require("cookie-parser");

const router = express.Router();

router.post('/register', async (req, res, next) => {
	try {
		const { usernameRegister, emailRegister, passwordRegister } = req.body;
		if (!usernameRegister || !passwordRegister) {
			return res.status(400).json({ error: 'Username and password are required' });
		}
		await pool.getConnection();
		console.log("POOL GOT CONNECTION");
		console.log("Querying...");
		const [existingUsers] = await pool.execute(
			'SELECT id FROM users WHERE username = ?',
			[usernameRegister]
		);
		if (existingUsers.length > 0) {
			await pool.releaseConnection();
			return res.status(409).json({ error: 'Username already exists' });
		}
		console.log("Query completed. Hashing password...");
		const passwordString = passwordRegister.toString();
		const passwordHash = await hashPassword(passwordString);
		console.log("Password hashed. Inserting user...");
		await pool.execute(
			'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
			[usernameRegister, emailRegister, passwordHash]
		);
		await pool.releaseConnection();
		console.log("User registered successfully");
		res.status(201).json({ message: 'User registered successfully' });
		next();
	} catch (err) {
		console.error('Registration error:', err);
		return res.status(500).json({ error: 'Registration failed', details: err.message });
	}
});
router.post('/login', async (req, res, next) => {
	try {
		console.log("AT LOGIN TRY CATCH");
		const { currentUsername, currentPassword } = req.body;
		console.log("Awaiting connection")

		if (!currentUsername || !currentPassword) {
			return res.status(400).json({ error: 'Username and password are required' });
		}
		await pool.getConnection();
		console.log("POOL GOT CONNECTION");
		console.log("Users being queried...");
		// Find user as users array
		const [users] = await pool.execute(
			'SELECT id, username, password_hash FROM users WHERE username = ?',
			[currentUsername]
		);
		console.log("USERS QUERIED");

		if (users.length === 0) {
			return res.status(401).json({ error: 'Invalid username or password' });
		}

		const selectedUser = users[0];
		console.log("Model Selected: " + selectedUser.username);

		// Compare password with stored hash

		const validPassword = comparePassword(currentPassword, selectedUser.password_hash);
		if (!validPassword) {
			await pool.releaseConnection();
			return res.status(401).json({ error: 'Invalid username or password' });
		}
		console.log("Password Compared: " + (selectedUser.password_hash).substr(0, 10) + "...");


		const token = await generateToken({ id: selectedUser.id, username: selectedUser.username });
		console.log("TOKEN GENERATED");
		console.log("Releasing Connection...");
		await pool.releaseConnection();

		if (!token) {
			console.log('token: undefined');
			return res.status(500).json({ error: 'Invalid token generated.' });
		} else {
			// % Access Token Set! % //
			const user = verifyToken(token);
			req.user = user;
			res.cookie('jwt_token', token, {
				// signed: true,
				httpOnly: true,
				// secure: true, 
				// sameSite: 'strict', 
				// 'strict' can block cookies on same-site requests
				// maxAge: 7 * 24 * 60 * 60 * 1000
				// 7 days
			});
			res.redirect('/workspace/workspace.html');
		}
	} catch (err) {
		console.error('Login error:', err);
		// res.clearCookie('jwt_token');
		return res.status(500).json({ error: 'Login failed', details: err.message });
	}
	console.log("Login route completed.");
	// Only call next() if response wasn't already sent
	if (!res.headersSent) {
		next();
	}
});
router.post('/version', async (req, res) => {
	const { mysqlVcheck } = req.body;
	await pool.getConnection();
	const [rows] = await pool.query('SELECT VERSION() AS version');
	console.log('MySQL version:', rows[0].version);
	result = (rows[0].version).toString();
	console.log('Result: ' + result);
	resultRows = rows[0];

	await pool.releaseConnection();
	// res.sendFile("/workspace/workspace.html");
	res.write("MySqlVersion: " + result);
	res.end();

});
router.get('/reactivate', async (req, res, next) => {
	try {
		if (req.cookies.jwt_token) {
			const cook = cookieParser.signedCookie(req.cookies.jwt_token);
			const user = verifyToken(cook);
			const iden = user.payload.username;
			res.send(iden);
		} else {
			console.log("No token found in cookies.");
			const noIden = '';
			res.send(noIden);
		}
	} catch (err) {
		console.lot("No token or token invalid: " + err.message);
		next();
	};
});
router.post('/logout', async (req, res) => {
	res.get('jwt_token');
	res.clearCookie('jwt_token');
	res.redirect('/');
});

// module.exports = router;
module.exports = router;
