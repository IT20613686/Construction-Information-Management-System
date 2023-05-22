const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hardwareItemSchema = new Schema({
  
  itemID: {
    type: String,
  },
  itemName: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  hardwareName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }

});

const HardwareItem = mongoose.model("HardwareItem", hardwareItemSchema);

module.exports = HardwareItem;
