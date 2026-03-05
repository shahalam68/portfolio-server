import express from 'express';
import { protect } from '../../../middleware/auth.js';
import upload from '../../../middleware/uploadMiddleware.js';
import { uploadImage, uploadMultipleImages } from '../controllers/uploadController.js';

const router = express.Router();

// Currently applying protect middleware if you want to restrict to logged in users
router.post('/', protect, upload.single('image'), uploadImage);
router.post('/multiple', protect, upload.array('images', 5), uploadMultipleImages);

export default router;
