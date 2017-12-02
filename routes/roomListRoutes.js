const express = require('express');
const roomsRouter = express.Router();
// const Content = require('../models/roomListModel');

import {
  list_all_rooms,
  create_a_room,
  delete_a_room,
  read_a_room
} from '../controllers/roomListController';

// const roomsRoute = (app) => {
//   app.route('/rooms')
//   .get((req, res) => {
//     res.render('rooms', {
//       content: 'Hello there'
//     });
//   });
// }


  roomsRouter.get('/', async(req, res, next) => {
    var content = await list_all_rooms(req, res);
    res.end('rooms', {
      content: content
    });
  });

// roomsRouter.get('/', (req, res, next) => {
//   var resultArray = [];
//   const roomList = list_all_rooms(req, res);
//   roomList.foreEach((room, err) => {
//     assert.equal(null, err);
//     resultArray.push(room);
//   }, () => {
//     res.end('rooms', { rooms: resultArray});
//   });
// });


// export default roomsRoute;
module.exports = roomsRouter;


























//
