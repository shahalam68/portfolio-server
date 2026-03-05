import ProjectService from '../services/projectService.js';

class ProjectController {
    async getAll(req, res, next) {
        try {
            const projects = await ProjectService.getAll();
            res.json(projects);
        } catch (error) {
            next(error);
        }
    }

    async getBySlug(req, res, next) {
        try {
            const project = await ProjectService.getBySlug(req.params.slug);
            res.json(project);
        } catch (error) {
            res.status(404);
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const project = await ProjectService.create(req.body);
            res.status(201).json(project);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const project = await ProjectService.update(req.params.slug, req.body);
            res.json(project);
        } catch (error) {
            res.status(404);
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            await ProjectService.delete(req.params.slug);
            res.json({ message: 'Project removed' });
        } catch (error) {
            res.status(404);
            next(error);
        }
    }
}

export default new ProjectController();
