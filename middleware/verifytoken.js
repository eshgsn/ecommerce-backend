const jwt = require('jsonwebtoken');

const jwtSecret = 'jwt_secret_key';

const verifytoken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, token missing' });
    }

    try {
        // Verify token
        const check = jwt.verify(token, jwtSecret);

        req.user = check;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = verifytoken;
