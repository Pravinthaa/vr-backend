const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Zone 2 route is ready' });
});

module.exports = router;
