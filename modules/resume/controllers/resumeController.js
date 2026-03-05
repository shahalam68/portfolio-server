import About from '../models/About.js';
import Education from '../models/Education.js';
import Experience from '../models/Experience.js';

// Experience Controllers
export const getExperience = async (req, res) => {
    try {
        const experience = await Experience.find().sort({ createdAt: -1 });
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createExperience = async (req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.status(201).json(experience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateExperience = async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(experience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteExperience = async (req, res) => {
    try {
        await Experience.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Experience deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Education Controllers
export const getEducation = async (req, res) => {
    try {
        const education = await Education.find().sort({ createdAt: -1 });
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createEducation = async (req, res) => {
    try {
        const education = await Education.create(req.body);
        res.status(201).json(education);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateEducation = async (req, res) => {
    try {
        const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(education);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteEducation = async (req, res) => {
    try {
        await Education.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Education deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// About Controllers
export const getAbout = async (req, res) => {
    try {
        let about = await About.findOne();
        if (!about) {
            // Return empty structure if not found
            return res.status(200).json({ title: 'About me', description: '', info: [] });
        }
        res.status(200).json(about);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAbout = async (req, res) => {
    try {
        let about = await About.findOne();
        if (about) {
            about = await About.findByIdAndUpdate(about._id, req.body, { new: true });
        } else {
            about = await About.create(req.body);
        }
        res.status(200).json(about);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
