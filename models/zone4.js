const mongoose = require('mongoose');
const { Schema } = mongoose;

const achievementSchema = new Schema({
  title:       { type: String, required: true },
  description: String,
  year:        Number
}, { _id: false });

const projectSchema = new Schema({
  title:       { type: String, required: true },
  description: String,
  year:        Number,
  role:        String
}, { _id: false });

const researchPaperSchema = new Schema({
  title:   { type: String, required: true },
  journal: String,
  year:    Number,
  link:    String
}, { _id: false });

const facultyProfileSchema = new Schema({
  name:        { type: String, required: true },
  designation: { type: String, required: true },
  photo: { type: String, required: true },
  achievementsAndHonors: [achievementSchema],
  projects:              [projectSchema],
  researchPapers:        [researchPaperSchema]
}, { timestamps: true });

module.exports = mongoose.model('FacultyProfile', facultyProfileSchema);