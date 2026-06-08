const fs = require('fs');

/**
 * @param {String} folder directory name
 * @example '/workspace/tmp'
 */
exports.charterDir = async (folder) => {
	fs.readdir(folder, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		// Log the list of file names
		console.log('Files in the directory:');
		files.forEach(file => {
			console.log(file);
		});
	});

}

// res.download('/report-12345.pdf');

// res.download('/report-12345.pdf', 'report.pdf');

// res.download('/report-12345.pdf', 'report.pdf', (err) => {
//   if (err) {
//     // Handle error, but keep in mind the response may be partially-sent
//     // so check res.headersSent
//   } else {
//     // decrement a download credit, etc.
//   }
// });