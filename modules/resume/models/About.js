import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    info: [{
        fieldName: { type: String, required: true },
        fieldValue: { type: String, required: true }
    }]
}, {
    timestamps: true
});

const About = mongoose.model('About', aboutSchema);

export default About;
