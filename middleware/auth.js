const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    // Request ke header se Authorization header lena
    const authHeader = req.headers.authorization;

    // 401: Agar header ya token mojood na ho
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized access: No token provided',
      });
    }

    // "Bearer <token>" mein se sirf actual token alag karna
    const token = authHeader.split(' ')[1];

    // Token ko verify karna JWT_SECRET ke sath
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Verified user ki ID request object mein store kar dena
    req.user = decoded;

    // Aglay function (route) par forward karna
    next();
  } catch (error) {
    // 401: Agar token invalid ya expire ho
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access: Invalid or expired token',
    });
  }
};

module.exports = auth;