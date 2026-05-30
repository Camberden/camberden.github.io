const bcrypt = require('bcryptjs');

/**
 * @function
 * @param {String} prePassword name='currentPassword'
 * @returns 
 */
exports.hashPassword = async (prePassword) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(prePassword, salt);
}
/**
 * @param {String} prePassword 
 * @param {String} postPassword 
 * @returns 
 */
exports.comparePassword = async (prePassword, postPassword) => {
	return await bcrypt.compare(prePassword, postPassword);
}