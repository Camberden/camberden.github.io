const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const url = require('url');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.JWT_SECRET));
app.get('/', (req, res, next) => {
	console.log(req.user);
	console.log(__dirname)
	next();
});


app.use('/', (req, res, next) => {
	console.log(`${new Date().toLocaleString()} - ${req.method} ${req.path}`);
	res.setHeader(
		'Content-Security-Policy',
		"default-src 'self'; connect-src 'self' https://cdn.jsdelivr.net https://unpkg.com https://dummyjson.com; frame-src https://www.youtube.com;" +
		"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://unpkg.com/leaflet@1.9.4/dist/leaflet.js.map https://www.youtube.com;" +
		"style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://maxcdn.bootstrapcdn.com; img-src 'self' data: https:; font-src 'self' data: https://maxcdn.bootstrapcdn.com; " +
		"worker-src blob: http://localhost:3020/*;"
	);
	next();
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/media', require('./routes/media'));

app.use('/api/blog', require('./routes/blog'));

// app.post('/upload', upload.single('heic-photo'), function (req, res) {
// 	if (!req.file) {
// 		return res.status(400).send('No file uploaded');
// 	}
// 	(async () => {
// 		const inputBuffer = await promisify(fs.readFile)(req.file.path);
// 		const outputBuffer = await convert({
// 			buffer: inputBuffer,
// 			format: 'JPEG',
// 			quality: 1,
// 			name: 'temp-photo',
// 			// % Possibly add 'name' here?
// 		});

// 		await promisify(fs.writeFile)(`images/uploads/photo-${Date.now()}.jpg`, outputBuffer);

// 	})();
// 	fs.unlink(req.file.path, (err) => {
// 		if (err) {
// 			console.error('File cleanup failed:', err);
// 		} else {
// 			console.log('Uploaded file cleaned up successfully');
// 		}
// 	});
// 	res.redirect('/');
// });

app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
// |====================|
