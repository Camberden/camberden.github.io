const { verifyToken } = require('../services/tokenService');
const cookieParser = require('cookie-parser');

exports.cookieJwtAuth = (req, res, next) => {
	console.log("[=== MODULE ===> AUTH.JS ==] ");
	const token = req.cookies.jwt_token;
	try {
		const user = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;
		next();
	} catch (err) {
		res.clearCookie('jwt_token');
		return res.redirect('/index.html');
	}
}