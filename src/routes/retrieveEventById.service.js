const Event = require('../models/events');

// Retrieve an event by ID
exports.getEventById = async (eventId) => {
  try {
    return await Event.findById(eventId);
  } catch (error) {
    throw error;
  }
};

// Retrieve an event by title
exports.getEventByTitle = async (eventTitle) => {
  try {
    return await Event.findOne({ title: eventTitle });
  } catch (error) {
    throw error;
  }
};
