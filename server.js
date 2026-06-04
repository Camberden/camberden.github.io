// ^ 1 ^ Primary Server Engine: express and app 
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const url = require('url');
const cookieParser = require('cookie-parser');
app.use(express.static(path.join(__dirname)));
app.use(cookieParser(process.env.JWT_SECRET));

// const { signedIn } = require('./middleware/auth.js');
app.get('/', (req, res, next) => {
	console.log(req.user);
	next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ^ 2 ^ Built-in Middleware for parsing JSON bodies 

app.use('/', (req, res, next) => {
	console.log(`${new Date().toLocaleString()} - ${req.method} ${req.path}`);
	res.setHeader(
		'Content-Security-Policy',
		"default-src 'self'; connect-src 'self' https://cdn.jsdelivr.net https://unpkg.com https://dummyjson.com; frame-src https://www.youtube.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://unpkg.com/leaflet@1.9.4/dist/leaflet.js.map https://www.youtube.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com; img-src 'self' data: https:; font-src 'self' data:"
	);
	// cookieParser.signedCookie(req.signedCookies.jwt_token);
	next();
});
// ^ 3 ^ Logging Middleware and Content Security Policy (CSP) Headers
// ^ 4 ^ Authentication Middleware

app.use('/api/auth', require('./routes/auth'));
app.use('/api/media', require('./routes/media'));
app.use('/api/blog', require('./routes/blog'));
// app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
// |====================|
// app.use('/api/auth', require('/routes/auth'));
// app.use('/api/blog', require('./routes/blog'));
// app.use('/api/notes', require('./routes/notes'));
// app.use('/api/imagery', require('./routes/imagery'));
// app.use('/api/*', (req, res, next) => {
//   res.status(404).json({ error: 'API endpoint not found' });
//   next();
// });


// app
//   .route('/book')
//   .get((req, res) => {
//     res.send('Get a random book');
//   })
//   .post((req, res) => {
//     res.send('Add a book');
//   })
//   .put((req, res) => {
//     res.send('Update the book');
//   });