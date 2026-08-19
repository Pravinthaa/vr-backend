const mongoose = require('mongoose');
const { Schema } = mongoose;

const facultyProfileSchema = new Schema({
  name:        { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true },
  photo:       { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('FacultyProfile', facultyProfileSchema);