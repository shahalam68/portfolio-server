import express from 'express';
import { protect } from '../../../middleware/auth.js';
import ProjectController from '../controllers/projectController.js';

const router = express.Router();

router.get('/', ProjectController.getAll);
router.get('/:slug', ProjectController.getBySlug);
router.post('/', protect, ProjectController.create);
router.put('/:slug', protect, ProjectController.update);
router.delete('/:slug', protect, ProjectController.delete);

export default router;
