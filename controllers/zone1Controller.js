const Zone1Event = require('../models/zone1');

async function getAllEvents(req, res) {
  try {
    const events = await Zone1Event.find().sort({ id: 1 });
    res.json(events);
  } catch (err) {
    console.error('getAllEvents error:', err);
    res.status(500).json({ error: 'Failed to fetch events.' });
  }
}

async function getEventById(req, res) {
  try {
    const event = await Zone1Event.findOne({ id: req.params.id });
    if (!event) {
      return res.status(404).json({ error: `Event '${req.params.id}' not found.` });
    }
    res.json(event);
  } catch (err) {
    console.error('getEventById error:', err);
    res.status(500).json({ error: 'Failed to fetch event.' });
  }
}

module.exports = {
  getAllEvents,
  getEventById,
};
