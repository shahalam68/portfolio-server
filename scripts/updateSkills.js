import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars from server/.env
dotenv.config({ path: path.join(__dirname, '../.env') });

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    iconName: { type: String },
    iconUrl: { type: String },
    type: { type: String, enum: ['tech', 'tool'], default: 'tech' }
}, {
    timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);

const skills = [
    { name: "Next.js", iconName: "SiNextdotjs", type: "tech" },
    { name: "TypeScript", iconName: "SiTypescript", type: "tech" },
    { name: "TanStack Query", iconName: "SiTanstackquery", type: "tech" },
    { name: "React.js", iconName: "FaReact", type: "tech" },
    { name: "Node.js", iconName: "FaNodeJs", type: "tech" },
    { name: "MongoDB", iconName: "SiMongodb", type: "tech" },
    { name: "Zustand", iconName: "SiZustand", type: "tech" },
    { name: "Material UI", iconName: "SiMui", type: "tech" },
    { name: "Tailwind CSS", iconName: "SiTailwindcss", type: "tech" },
    { name: "Auth.js", iconName: "SiAuth0", type: "tech" },
    { name: "ASP.NET Core", iconName: "SiDotnet", type: "tech" },
    { name: "PostgreSQL", iconName: "SiPostgresql", type: "tech" },
    { name: "WordPress", iconName: "FaWordpress", type: "tool" },
    { name: "WooCommerce", iconName: "SiWoocommerce", type: "tool" },
    { name: "Git", iconName: "FaGitAlt", type: "tool" },
    { name: "Fork", iconName: "FaCodeBranch", type: "tool" },
    { name: "ClickUp", iconName: "SiClickup", type: "tool" },
    { name: "Jira", iconName: "SiJira", type: "tool" }
];

async function updateSkills() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected successfully.');

        console.log('Clearing existing skills...');
        await Skill.deleteMany({});
        console.log('Cleared.');

        console.log('Inserting new skills...');
        await Skill.insertMany(skills);
        console.log('Inserted ' + skills.length + ' skills.');

        console.log('Update complete!');
        process.exit(0);
    } catch (error) {
        console.error('Error updating skills:', error);
        process.exit(1);
    }
}

updateSkills();
