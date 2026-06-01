const bcrypt = require('bcryptjs');

/**
 * @function
 * @param {String} prePassword name='currentPassword'
 * @returns 
 */
const hashPassword = (prePassword) => {
	console.log("[=== MODULE ===> HASHINGSERVICE.JS ==] ");
	const salt = bcrypt.genSalt(10);
	return bcrypt.hash(prePassword, salt);
}
/**
 * @param {String} prePassword 
 * @param {String} postPassword 
 * @returns 
 */
const comparePassword = (prePassword, postPassword) => {
	return bcrypt.compare(prePassword, postPassword);
}

module.exports = { hashPassword, comparePassword };