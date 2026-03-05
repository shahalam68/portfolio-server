import AuthService from '../services/authService.js';

class AuthController {
    async login(req, res, next) {
        try {
            const { password } = req.body;
            const result = await AuthService.login(password);
            res.json(result);
        } catch (error) {
            res.status(401);
            next(error);
        }
    }

    async getMe(req, res) {
        res.json({ role: 'admin', authorized: true });
    }
}

export default new AuthController();
