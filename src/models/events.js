const { string } = require('joi');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
<<<<<<< HEAD
    type: String,
=======
    type: Buffer,
>>>>>>> 1cca928657201d97af625fe1a7a2b7873be99dd3
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
