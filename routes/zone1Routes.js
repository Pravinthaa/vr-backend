const express = require('express');
const router = express.Router();
const { getAllEvents, getEventById } = require('../controllers/zone1Controller');

router.get('/', getAllEvents);
router.get('/:id', getEventById);

module.exports = router;
