import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    num: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    detailedDescription: { type: String, required: true },
    workplace: { type: String, required: true },
    stack: [{ name: { type: String, required: true } }],
    image: { type: String, required: true },
    images: [{ type: String }],
    live: { type: String },
    github: { type: String },
    caseStudy: {
        challenge: { type: String, required: true },
        solution: { type: String, required: true },
        impact: { type: String, required: true },
    }
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
