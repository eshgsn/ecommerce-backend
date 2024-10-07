const jwt = require('jsonwebtoken');

const jwtSecret = 'jwt_secret_key';

exports.verifytoken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, token missing' });
    }

    try {
        // Verify token
        const check = jwt.verify(token, jwtSecret);

        req.user = check;
        req.role = check.role;
        req.user.id = check.userId;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};


