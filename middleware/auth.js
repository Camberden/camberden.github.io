const { verifyToken } = require('../services/tokenService');
const cookieParser = require('cookie-parser');

exports.cookieJwtAuth = (req, res, next) => {
	try {
		if (req.cookies.jwt_token) {
			const cook = cookieParser.signedCookie(req.cookies.jwt_token);
			const user = verifyToken(cook);
			if (user) {
				console.log("Accessed.");
				req.user = user;
				console.log(user.payload);
			}
		} else {
			console.log("Not Accessed.");
			console.log("No token found in cookies.");
		}
	} catch (err) {
		console.lot("No token or token invalid: " + err.message);
		next();
	};
	next();
};