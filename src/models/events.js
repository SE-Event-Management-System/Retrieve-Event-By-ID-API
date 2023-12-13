const mongoose = require('mongoose');
require('./booking')
require('./comments');

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
    type: String,
    required: false,
  },
  datetime: {
    type: Date,
    required: true,
  },
  maxSeats: {
    type: Number,
    required: true,
  },
  bookedSeatsArray: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
  maxWaitlist: {
    type: Number,
    required: true,
  },
  waitlistArray: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
  location: {
    type: String,
    required: true,
  },
  lat: Number,
  long: Number,
  address: {
    type: String,
    required: true,
  },
  chatId: String,
  chatAccessKey: String,
  organizer: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: [
    {
      type: String,
      required: false,
    },
  ],
  comments:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
}, {
  timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;