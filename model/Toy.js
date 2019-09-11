const mongoose = require("mongoose");

const toySchema = new mongoose.Schema({
  userID: {
    type: Object,
    required: true
  },
  toyName: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  description: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  url: {
    type: String
  },
  condition: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Toy", toySchema);
