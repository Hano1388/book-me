'use strict';

var mongoose = require('mongoose'),
    Room = mongoose.model('Rooms');

    exports.list_all_rooms = (req, res) => {
      Room.find({}, (err, task) => {
        if(err) {
          res.send(err);
        }
        res.json(task);
      });
    };

    exports.create_a_room = (req, res) => {
      var new_room = new Room(req.body);
      new_room.save((err, task) => {
        if(err) {
          res.send(err);
        }
        res.json(task);
      });
    };

    exports.delete_a_room = (req, res) => {
      Room.remove({
        _id: req.params.roomId
      }, (req, task) => {
        if (err) {
          res.send(err);
        };
        res.json({ task: 'Room successfully deleted'});
      });
    };

    exports.read_a_room = (req, res) => {
      Room.findById(req.params.roomId, (err, task) => {
        if (err) {
          res.send(err);
        };
        res.json(task);
      });
    };














    //
