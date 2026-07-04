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
	console.log(__dirname);
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
app.use('/api/notes', require('./routes/notes'));
app.use('/api/todos', require('./routes/todos'));

app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '404.html'));
});
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
// |====================|
