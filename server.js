require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const pool = require('./config/database');
const path = require('path');
const url = require('url');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Content Security Policy - Allow API calls to same origin
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; connect-src 'self' https://cdn.jsdelivr.net https://unpkg.com https://dummyjson.com; frame-src https://www.youtube.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://unpkg.com/leaflet@1.9.4/dist/leaflet.js.map https://www.youtube.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com; img-src 'self' data: https:; font-src 'self' data:"
  );
  next();
});



// API Routes
app.use('/api/auth', require('/routes/auth'));
// app.use('/api/blog', require('./routes/blog'));
// app.use('/api/notes', require('./routes/notes'));
// app.use('/api/imagery', require('./routes/imagery'));

// 404 handler for API routes - return JSON instead of HTML
app.use('/api/*', (req, res, next) => {
  res.status(404).json({ error: 'API endpoint not found' });
  next();
});
// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for any unmatched routes (client-side routing support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
