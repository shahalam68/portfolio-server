import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    iconName: { type: String },
    iconUrl: { type: String },
    type: { type: String, enum: ['tech', 'tool'], default: 'tech' }
}, {
    timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
