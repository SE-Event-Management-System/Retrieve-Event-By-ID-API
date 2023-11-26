const Event = require('../models/events');
const errors = require('../../errors/errors');

module.exports = async (req, res) => {
  try {
    const eventId = req.params.id; // Get event ID from request
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        statusCode: 1,
        timestamp: Date.now(),
        requestId: req.body.requestId,
        info: {
          code: errors['003'].code,
          message: 'Event not found',
          displayText: 'Event not found',
        },
      });
    }

    return res.status(200).json({
      statusCode: 0,
      timestamp: Date.now(),
      requestId: req.body.requestId,
      data: {
        title: event.title,
        description: event.description,
        image: event.image,
        date: event.date,
        maxSeats: event.maxSeats,
        bookedSeats: event.bookedSeats,
        maxWaitlist: event.maxWaitlist,
        currentWaitlist: event.currentWaitlist,
        location: event.location,
        organizer: event.organizer,
        price: event.price,
        tags: event.tags,
      },
      info: {
        code: errors['000'].code,
        message: errors['000'].message,
        displayText: errors['000'].displayText,
      },
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 1,
      timestamp: Date.now(),
      requestId: req.body.requestId,
      info: {
        code: errors['006'].code,
        message: error.message || errors['006'].message,
        displayText: errors['006'].displayText,
      },
      error: error,
    });
  }
};