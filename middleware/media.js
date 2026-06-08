const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images/tmp");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});
const memStorage = multer({ dest: 'assets/blog-photos' });

const upload = multer({ storage: storage });
const uploadMiddleware = upload.fields([{ name: 'photos', maxCount: 1 }]);

module.exports = {
	storage,
	memStorage,
	upload,
};