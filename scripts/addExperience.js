import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

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

const newExperience = {
    company: "Transtecq",
    position: "Software Engineer",
    duration: "Jan 2024 - Present",
    description: "Developing and maintaining scalable web applications using modern technologies and best practices.",
    techStack: "Next.js, Node.js, TanStack Query, MongoDB"
};

async function addExperience() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected.');

        // Check if already exists to avoid duplicates
        const existing = await Experience.findOne({ company: "Transtecq" });
        if (existing) {
            console.log('Experience with Transtecq already exists. Updating...');
            await Experience.findByIdAndUpdate(existing._id, newExperience);
        } else {
            console.log('Adding new experience...');
            await Experience.create(newExperience);
        }

        console.log('Operation complete!');
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

addExperience();
