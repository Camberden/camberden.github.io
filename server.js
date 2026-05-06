const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3020;

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
