import express from 'express';
import { protect } from '../../../middleware/auth.js';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/me', protect, AuthController.getMe);

export default router;
