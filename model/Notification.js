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
    toyID:{
      type: Object,
      required: true
    },
    messages:[
      {
        sender:{
          type: String,
          required: true
        },
        text:{
          type: String,
          required: true
        },
        date:{
          type: Date,
          default: new Date
        }
      }
    ],
    date: {
      type: Date,
      default: new Date
    },
    clicked:{
        type: Boolean,
        default: false
    },
    receiver:{
      type: String,
      required: true
    },
    sender:{
      type: String,
      required: true
    }
  });
  
  module.exports = mongoose.model("Notification", notifySchema);