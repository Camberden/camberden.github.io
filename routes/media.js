const express = require('express');
const router = express.Router();

const { promisify } = require('util');
const fs = require('fs');
const multer = require('multer');
const convert = require('heic-convert');
const { charterDir } = require('../services/charterService');
const { heiconversion } = require('../services/imageService');

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

router.get('/', (req, res) => {

	req.body = charterDir('images/tmp/');

	console.log(res.body);
	res.json("Files: " + res.body);
	res.end();
});


module.exports = router;