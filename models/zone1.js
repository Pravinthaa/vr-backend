const mongoose = require('mongoose');

const specificationSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const eventSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    clubName: {
      type: String,
      required: true,
      trim: true,
    },
    websiteLink: {
      type: String,
      trim: true,
    },
    // see more
    eventName: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
      trim: true,
    },
    specifications: {
      type: [specificationSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'zone1_events',
  }
);

module.exports = mongoose.model('Zone1Event', eventSchema);