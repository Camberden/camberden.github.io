import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the cmbr.json file
const cmbrPath = path.join(__dirname, 'cmbr.json');
const cmbr = JSON.parse(fs.readFileSync(cmbrPath, 'utf8'));

// Read the travel-photos directory
const travelPhotosDir = path.join(__dirname, 'assets', 'travel-photos');
const files = fs.readdirSync(travelPhotosDir);

// Filter for JPEG files and sort
const jpegFiles = files
  .filter(file => /\.(jpg|jpeg)$/i.test(file))
  .sort();

// Generate the items array with relative paths
const items = jpegFiles.map(file => path.join('assets', 'travel-photos', file).replace(/\\/g, '/'));

// Update the cmbr.json
cmbr['travel-photos'].items = items;
cmbr['travel-photos'].count = items.length;

// Write back to cmbr.json with nice formatting
fs.writeFileSync(cmbrPath, JSON.stringify(cmbr, null, '\t'), 'utf8');

console.log(`✓ Updated cmbr.json with ${items.length} travel photo entries`);
