const FacultyProfile = require('../models/zone4');

// GET /api/faculty
exports.getAllFaculty = async (req, res) => {
  try {
    const faculty = await FacultyProfile.find().sort({ createdAt: 1 });
    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch faculty', details: err.message });
  }
};

// GET /api/faculty/:id
exports.getFacultyById = async (req, res) => {
  try {
    const faculty = await FacultyProfile.findById(req.params.id);
    if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch faculty', details: err.message });
  }
};

// POST /api/faculty
exports.createFaculty = async (req, res) => {
  try {
    const { name, designation, achievementsAndHonors, projects, researchPapers } = req.body;

    if (!name || !designation) {
      return res.status(400).json({ error: 'name and designation are required' });
    }

    const newFaculty = await FacultyProfile.create({
      name,
      designation,
      achievementsAndHonors: achievementsAndHonors || [],
      projects: projects || [],
      researchPapers: researchPapers || []
    });

    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create faculty', details: err.message });
  }
};

// PUT /api/faculty/:id
exports.updateFaculty = async (req, res) => {
  try {
    const updated = await FacultyProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Faculty not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update faculty', details: err.message });
  }
};

// DELETE /api/faculty/:id
exports.deleteFaculty = async (req, res) => {
  try {
    const deleted = await FacultyProfile.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Faculty not found' });
    res.status(200).json({ message: 'Faculty deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete faculty', details: err.message });
  }
};

// POST /api/faculty/:id/achievements
exports.addAchievement = async (req, res) => {
  try {
    const faculty = await FacultyProfile.findById(req.params.id);
    if (!faculty) return res.status(404).json({ error: 'Faculty not found' });

    faculty.achievementsAndHonors.push(req.body);
    await faculty.save();
    res.status(201).json(faculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add achievement', details: err.message });
  }
};

// POST /api/faculty/:id/projects
exports.addProject = async (req, res) => {
  try {
    const faculty = await FacultyProfile.findById(req.params.id);
    if (!faculty) return res.status(404).json({ error: 'Faculty not found' });

    faculty.projects.push(req.body);
    await faculty.save();
    res.status(201).json(faculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add project', details: err.message });
  }
};

// POST /api/faculty/:id/research-papers
exports.addResearchPaper = async (req, res) => {
  try {
    const faculty = await FacultyProfile.findById(req.params.id);
    if (!faculty) return res.status(404).json({ error: 'Faculty not found' });

    faculty.researchPapers.push(req.body);
    await faculty.save();
    res.status(201).json(faculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add research paper', details: err.message });
  }
};