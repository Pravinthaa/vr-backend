const express = require('express');
const router = express.Router();
const {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
  addAchievement,
  addProject,
  addResearchPaper
} = require('../controllers/zone4Controller');

router.get('/', getAllFaculty);
router.get('/:id', getFacultyById);
router.post('/', createFaculty);
router.put('/:id', updateFaculty);
router.delete('/:id', deleteFaculty);

router.post('/:id/achievements', addAchievement);
router.post('/:id/projects', addProject);
router.post('/:id/research-papers', addResearchPaper);

module.exports = router;