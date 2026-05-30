const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '/images/tmp/');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});
const upload = multer({ storage: storage });
const uploadMiddleware = upload.fields({ name: 'heic-photo', maxCount: 1 });

module.exports = { uploadMiddleware };