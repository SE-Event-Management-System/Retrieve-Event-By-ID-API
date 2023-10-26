const Event = require('../models/events');

// Retrieve an event by ID
exports.getEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Retrieve an event by title
exports.getEventByTitle = async (req, res) => {
  try {
    const eventTitle = req.params.eventTitle;
    const event = await Event.findOne({ title: eventTitle });
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
