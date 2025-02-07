import jwt from 'jsonwebtoken';

class AuthService {
    generateToken(userId: string) {
        return jwt.sign({ userId }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    }

    verifyToken(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET || 'secret');
    }
}

export default new AuthService();