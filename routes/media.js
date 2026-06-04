const express = require('express');
const multer = require('multer');
const { uploadMiddleware } = require('../middleware/media');

const router = express.Router();

router.post('/heic', uploadMiddleware, async (req, res) => {
	if (!req.files) {
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

		await promisify(fs.writeFile)(`/images/tmp/photo-${Date.now()}.jpg`, outputBuffer);

	})();
	fs.unlink(req.file.path, (err) => {
		if (err) {
			console.error('File cleanup failed:', err);
		} else {
			console.log('Uploaded file cleaned up successfully');
		}
	});
	res.redirect('/');
	// next();
});

module.exports = router;