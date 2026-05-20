require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3020;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Content Security Policy - Allow API calls to same origin
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; connect-src 'self' https://unpkg.com; frame-src https://www.youtube.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://unpkg.com/leaflet@1.9.4/dist/leaflet.js.map https://www.youtube.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/fullcalendar@5.11.0/main.min.css https://unpkg.com; img-src 'self' data: https:; font-src 'self' data:"
  );
  next();
});

// API Routes
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const notesRoutes = require('./routes/notes');

app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/notes', notesRoutes);

// 404 handler for API routes - return JSON instead of HTML
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for any unmatched routes (client-side routing support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
