const { verifyToken } = require('../services/tokenService');
const cookieParser = require('cookie-parser');
const authenticateToken = (req, res, next) => {
	console.log("[=== MODULE ===> AUTH.JS ==] ");
	const token = cookieParser.signedCookie('jwt_token');

	if (!token) {
		console.log('Access Token required: !token');
		return res.status(401).json({ error: 'Access Token required' });
	}
	try {
		const decodedToken = verifyToken(token);
		res.send(decodedToken.payload.username);
		res.end();
	} catch (err) {
		return res.status(403).json({ error: 'Expired or Invalid Access Token' });
	}
};

const signedIn = (req, res, next) => {
	let credentialed = false;
	const token = cookieParser.signedCookie(req.signedCookies.jwt_token);
	if (token) {
		credentialed = true;
		return next();
	};
	if (!token) {
		console.log('token: undefined');
		return next();
	}
	try {
		if (!credentialed) {
			const decodedToken = verifyToken(token);
			const operator = decodedToken.payload.username;
			if (operator) {
				credentialed = true;
				console.log("Active, Verified.");
				return res.next();
			}
		}
	} catch (err) {
		console.error('Token verification error:', err);
		return next();
	}
}

module.exports = {
	authenticateToken, signedIn
};