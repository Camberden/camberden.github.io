import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogData } from './blog/blog-data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Blog posts loaded:', blogData.length);

// Read wasm file
const wasmPath = path.join(__dirname, 'node_modules/sql.js/dist/sql-wasm.wasm');
const wasmData = fs.readFileSync(wasmPath);

// Initialize SQL.js
const SQL = await initSqlJs({ wasmBinary: wasmData });
console.log('SQL.js initialized');

// Create database
const db = new SQL.Database();

// Create table
db.run(`
    CREATE TABLE blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT,
        location TEXT,
        time TEXT,
        title TEXT,
        content TEXT
    )
`);

// Insert data
let count = 0;
blogData.forEach((entry) => {
    const parts = entry.split('|').map(p => p.trim()).filter(p => p);
    if (parts.length >= 4) {
        const date = parts[0] || '';
        const location = parts[1] || '';
        const time = parts[2] || '';
        const content = parts[3] || '';
        const titleMatch = content.match(/<b-title>(.*?)<\/b-title>/);
        const title = titleMatch ? titleMatch[1] : 'Untitled';
        
        db.run(
            'INSERT INTO blog_posts (date, location, time, title, content) VALUES (?, ?, ?, ?, ?)',
            [date, location, time, title, content]
        );
        count++;
    }
});

// Export to file
const data = db.export();
const dbPath = path.join(__dirname, 'blog', 'blog.db');
fs.writeFileSync(dbPath, Buffer.from(data));

console.log(`✓ Created blog.db (${Buffer.from(data).length} bytes)`);
console.log(`✓ Inserted ${count} posts`);
