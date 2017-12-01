// const express = require('express');
// const roomsRoute = express.Router();
// const Content = require('../models/roomListModel');

import {
  list_all_rooms,
  create_a_room,
  delete_a_room,
  read_a_room
} from '../controllers/roomListController';

const roomsRoute = (app) => {
  app.route('/rooms')
  .get(list_all_rooms, (err, data) => {
    if(err) throw err;
    rooms = json.stringify(data);
    console.log(rooms);
  });
}

export default roomsRoute;
