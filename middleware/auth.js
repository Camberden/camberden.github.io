const { verifyToken } = require('../services/tokenService')

module.exports = (req, res, next) => {
  // Check for token in Authorization header or cookies
  let token = null;

  const authHeader = req.headers['authorization'];
  if (authHeader) {
    token = authHeader.split(' ')[1]; // Bearer TOKEN
  } else if (req.cookies && req.cookies.jwt_token) {
    token = req.cookies.jwt_token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Access Token required' });
  }

  try {
    const decodedToken = verifyToken(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Expired or Invalid Access Token' });
  }
};