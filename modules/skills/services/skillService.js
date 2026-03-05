import Skill from '../models/Skill.js';

class SkillService {
    async getAll() {
        return await Skill.find();
    }

    async create(skillData) {
        return await Skill.create(skillData);
    }

    async delete(id) {
        return await Skill.findByIdAndDelete(id);
    }
}

export default new SkillService();
