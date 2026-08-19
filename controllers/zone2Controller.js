// controllers/zone2Controller.js
const { Category, Project, Secretary, Achievement } = require('../models/zone2');

// GET /api/projects/categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ number: 1 });
    res.json(categories);
  } catch (err) {
    console.error('getCategories error:', err);
    res.status(500).json({ message: 'Failed to fetch categories.', error: err.message });
  }
};

// GET /api/projects/:categoryId

exports.getProjectsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const category = await Category.findOne({ id: categoryId });
    if (!category) {
      return res.status(404).json({ message: `Category '${categoryId}' not found.` });
    }

    if (categoryId === 'secretaries') {
      const secretaries = await Secretary.find().select(
        'categoryId slug name club class position year -_id'
      );
      return res.json(secretaries);
    }

    if (categoryId === 'achievements') {
      const achievements = await Achievement.find().select(
        'categoryId slug title description name rollNo class -_id'
      );
      return res.json(achievements);
    }

    const projects = await Project.find({ categoryId }).select(
      'categoryId slug name title year programme description class githubLink -_id'
    ); 
    res.json(projects);
  } catch (err) {
    console.error('getProjectsByCategory error:', err);
    res.status(500).json({ message: 'Failed to fetch projects.', error: err.message });
  }
};

// GET /api/projects/:categoryId/:projectSlug
exports.getProjectDetail = async (req, res) => {
  try {
    const { categoryId, projectSlug } = req.params;

    if (categoryId === 'secretaries') {
      const secretary = await Secretary.findOne({ slug: projectSlug });
      if (!secretary) {
        return res.status(404).json({ message: `Secretary '${projectSlug}' not found.` });
      }
      return res.json(secretary);
    }

    if (categoryId === 'achievements') {
      const achievement = await Achievement.findOne({ slug: projectSlug });
      if (!achievement) {
        return res.status(404).json({ message: `Achievement '${projectSlug}' not found.` });
      }
      return res.json(achievement);
    }

    const project = await Project.findOne({ categoryId, slug: projectSlug });
    if (!project) {
      return res
        .status(404)
        .json({ message: `Project '${projectSlug}' not found in category '${categoryId}'.` });
    }
    res.json(project);
  } catch (err) {
    console.error('getProjectDetail error:', err);
    res.status(500).json({ message: 'Failed to fetch project.', error: err.message });
  }
};