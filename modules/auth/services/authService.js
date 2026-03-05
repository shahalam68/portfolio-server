import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

class AuthService {
    async login(password) {
        const adminPassword = process.env.ADMIN_PASSWORD;
        
        // In a real app, we'd check against a DB hash. 
        // For simplicity, we compare with the env var.
        if (password !== adminPassword) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        return { token };
    }

    async verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

export default new AuthService();
