'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  full_name: {
    type: String,
    Required: 'Enter first name'
  },
  time: {
    type: String,
    Required: 'Enter checkout'
  },
  people: {
    type: Number,
    Requied: 'Enter people'
  },
  kids: {
    type: Number,
    Required: 'Enter kids'
  },
  room_type: {
    type: String,
    Required: 'Enter room type'
  },
  room_number: {
    type: Number,
    Required: 'Enter room Number'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Rooms', RoomSchema);


















//
