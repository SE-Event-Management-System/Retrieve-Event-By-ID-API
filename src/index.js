const express = require('express');
const mongoose = require('mongoose');
const eventController = require('./routes/retrieveAllEvents.controller.js');
const mongoURL = 'mongodb://localhost/dummy-database-name';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to your MongoDB database
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get('/api/events/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const event = await eventController.getEventById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/events/title/:eventTitle', async (req, res) => {
  try {
    const eventTitle = req.params.eventTitle;
    const event = await eventController.getEventByTitle(eventTitle);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports.handler = serverless(app);
