const bcrypt = require('bcrypt');

/**
 * @function
 * @param {String} prePassword
 * @returns 
 */
const hashPassword = (prePassword) => {
	console.log("[=== MODULE ===> HASHINGSERVICE.JS ==] ");
	return bcrypt.hash(prePassword, 10);
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