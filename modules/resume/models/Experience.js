import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: String }
}, {
    timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
