import express from 'express';
import { protect } from '../../../middleware/auth.js';
import SkillController from '../controllers/skillController.js';

const router = express.Router();

router.get('/', SkillController.getAll);
router.post('/', protect, SkillController.create);
router.delete('/:id', protect, SkillController.delete);

export default router;
