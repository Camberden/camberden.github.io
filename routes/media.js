const express = require('express');
const router = express.Router();

const pool = require('../config/database');

const { promisify } = require('util');
const fs = require('fs');
const multer = require('multer');
const convert = require('heic-convert');
const { charterDir } = require('../services/charterService');
const { heiconversion } = require('../services/imageService');

const { cookieJwtAuth } = require('../middleware/auth.js');
const { upload, uploadMiddleware } = require('../middleware/media');


router.post('/upload', upload.single('heic-photo'), function (req, res) {
	if (!req.file) {
		return res.status(400).send('No file uploaded');
	}
	(async () => {
		const inputBuffer = await promisify(fs.readFile)(req.file.path);
		const outputBuffer = await convert({
			buffer: inputBuffer,
			format: 'JPEG',
			quality: 1,
			name: 'temp-photo',
			// % Possibly add 'name' here?
		});

		await promisify(fs.writeFile)(`images/uploads/photo-${Date.now()}.jpg`, outputBuffer);

	})();
	fs.unlink(req.file.path, (err) => {
		if (err) {
			console.error('File cleanup failed:', err);
		} else {
			console.log('Uploaded file cleaned up successfully');
		}
	});
	res.redirect('/');
});


router.get('/reactivate', async (req, res, next) => {
	try {
		if (req.cookies.jwt_token) {
			const cook = cookieParser.signedCookie(req.cookies.jwt_token);
			const user = verifyToken(cook);
			const iden = user.payload.username;
			res.send("Welcome back, " + iden + "!");
		} else {
			console.log("No token found in cookies.");
		}
	} catch (err) {
		console.lot("No token or token invalid: " + err.message);
		next();
	};
});

router.get('/done', async (req, res) => {
	console.log("Done.");
});

router.get('/uploads', async (req, res, next) => {
	console.log("HELLOOOOO FOLDERS?>?>?")
	try {
		const togetFolder = './images/uploads';
		const fhouwdoughs = fs.readdirSync(togetFolder);
		console.log("fuck the what")
		if (fhouwdoughs) {
			console.warn("What the fuck")
			res.json(fhouwdoughs);
			next();
		}
	} catch (err) {
		console.error("Issue");
		res.next();
	}
});

router.get('/travel-photos', async (req, res, next) => {
	console.log("Travel Photos Access")
	try {
		const togetFolder = './assets/travel-photos';
		const fhouwdoughs = fs.readdirSync(togetFolder);
		console.log("fuck the what")
		if (fhouwdoughs) {
			console.warn("Sending...");
			res.json(fhouwdoughs);
			next();
		}
	} catch (err) {
		console.error("Issue");
		res.next();
	}
});

router.get('/clouds', async (req, res) => {
	if (req.message) {
		console.log(message);

	}
	try {
		const connection = await pool.getConnection();
		console.log("cloud before query");
		const [clouds] = await connection.execute(
			'SELECT cl.id, cl.title, cl.thought, cl.weight, cl.compelled, u.username FROM clouds cl JOIN users u ON cl.user_id = u.id ORDER BY cl.compelled DESC'
		);
		console.log("cloud after query before release");
		connection.release();
		console.log("cloud after release");

		// Parse JSON fields
		const parsedClouds = clouds.map(cloud => ({
			title: cloud.title,
			thought: cloud.thought,
			weight: cloud.weight,
		}));
		console.log("clouds parsed");

		res.json(parsedClouds);
	} catch (error) {
		console.error('Blog fetch error:', error);
		res.status(500).json({ error: 'Failed to fetch clouds' });
	}
});

router.post('/clouds', cookieJwtAuth, async (req, res) => {

	try {
		const { title, thought, weight } = req.body;
		const user_id = req.user.payload.id;

		if (!title || !thought) {
			return res.status(400).json({ error: 'Title and Thought are required' });
		}

		await pool.getConnection();

		const [result] = await pool.execute(
			'INSERT INTO clouds (user_id, title, thought, weight) VALUES (?, ?, ?, ?)',
			[user_id, title, thought, weight]
		);

		await pool.releaseConnection();


		// res.status(201).json({
		// 	message: 'Cloud created successfully',
		// 	cloudId: result.insertId
		// });
		res.redirect('/cloudspace/cloudspace.html');
	} catch (error) {
		console.error('Cloud creation error:', error);
		res.status(500).json({ error: 'Failed to create cloud' });
	}
});

// router.get('/', (req, res) => {

// 	req.body = charterDir('images/tmp/');

// 	console.log(res.body);
// 	res.json("Files: " + res.body);
// 	res.end();
// });


module.exports = router;