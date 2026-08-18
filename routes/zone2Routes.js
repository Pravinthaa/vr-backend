// routes/zone2Routes.js
const express = require('express');
const router = express.Router();
const {
  getCategories,
  getProjectsByCategory,
  getProjectDetail,
} = require('../controllers/zone2Controller');


router.get('/categories', getCategories);

router.get('/:categoryId', getProjectsByCategory);
router.get('/:categoryId/:projectSlug', getProjectDetail);

module.exports = router;
