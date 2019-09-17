const mongoose = require("mongoose");

const notifySchema = new mongoose.Schema({
    userID:{
        type: Object,
        required: true 
    },
    receiverID: {
      type: Object,
      required: true
    },
    senderID: {
      type: Object,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    clicked:{
        type: Boolean,
        required: true
    }
  });
  
  module.exports = mongoose.model("Notification", notifySchema);