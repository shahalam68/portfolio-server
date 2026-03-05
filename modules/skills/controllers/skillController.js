import SkillService from '../services/skillService.js';

class SkillController {
    async getAll(req, res, next) {
        try {
            const skills = await SkillService.getAll();
            res.json(skills);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const skill = await SkillService.create(req.body);
            res.status(201).json(skill);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            await SkillService.delete(req.params.id);
            res.json({ message: 'Skill removed' });
        } catch (error) {
            res.status(404);
            next(error);
        }
    }
}

export default new SkillController();
