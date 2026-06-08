const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

exports.heiconversion = async (heicpath) => {
	const inputBuffer = await promisify(fs.readFile)(heicpath);
	const outputBuffer = await convert({
		buffer: inputBuffer, // the HEIC file buffer
		format: 'JPEG',      // output format
		quality: 0.5           // the jpeg compression quality, between 0 and 1
	});

	await promisify(fs.writeFile)(`uploads/photo-${Date.now()}.jpg`, outputBuffer);

	fs.unlink(heicpath, (err) => {
		if (err) {
			console.error('File cleanup failed:', err);
		} else {
			console.log('Uploaded file cleaned up successfully');
		}
	});
}