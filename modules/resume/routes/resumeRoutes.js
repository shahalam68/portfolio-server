import express from 'express';
import { protect } from '../../../middleware/auth.js';
import {
    createEducation,
    createExperience,
    deleteEducation,
    deleteExperience,
    getAbout,
    getEducation,
    getExperience,
    updateAbout,
    updateEducation,
    updateExperience
} from '../controllers/resumeController.js';

const router = express.Router();

// Experience routes
router.get('/experience', getExperience);
router.post('/experience', protect, createExperience);
router.put('/experience/:id', protect, updateExperience);
router.delete('/experience/:id', protect, deleteExperience);

// Education routes
router.get('/education', getEducation);
router.post('/education', protect, createEducation);
router.put('/education/:id', protect, updateEducation);
router.delete('/education/:id', protect, deleteEducation);

// About routes
router.get('/about', getAbout);
router.put('/about', protect, updateAbout);

export default router;
