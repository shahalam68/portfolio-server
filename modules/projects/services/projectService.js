import Project from '../models/Project.js';

class ProjectService {
    async getAll() {
        return await Project.find().sort({ num: 1 });
    }

    async getBySlug(slug) {
        const project = await Project.findOne({ slug });
        if (!project) throw new Error('Project not found');
        return project;
    }

    async create(projectData) {
        return await Project.create(projectData);
    }

    async update(slug, updateData) {
        const project = await Project.findOneAndUpdate({ slug }, updateData, { new: true });
        if (!project) throw new Error('Project not found');
        return project;
    }

    async delete(slug) {
        const project = await Project.findOneAndDelete({ slug });
        if (!project) throw new Error('Project not found');
        return project;
    }
}

export default new ProjectService();
