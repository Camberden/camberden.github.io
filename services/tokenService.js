const jwt = require('jsonwebtoken');

// Cookie updates or deletes must use the same path and domain
exports.generateToken = (payload) => {
	const token = jwt.sign(
		// TODO Change id to email
		{ payload },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRATION || '604800000' }
	);
	return token;
}
exports.verifyToken = (token) => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET);
	} catch (err) {
		throw err;
	}
};