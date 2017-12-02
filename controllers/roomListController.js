import mongoose from 'mongoose';
import { RoomSchema } from '../models/roomListModel';

const Room = mongoose.model('Room', RoomSchema);

    // export const list_all_rooms = (req, res) => {
    //   Room.find({}, (err, task) => {
    //     if(err) {
    //       res.send(err);
    //     }
    //     res.json(task);
    //   });
    // };

    export const list_all_rooms = (req, res) => {
      return new Promise((resolve, reject) => {
        Room.find({}, (err, task) => {
          if(err) {
            reject(res.send(err));
          }
          resolve(res.json(task));
        });
      })
    };

    export const create_a_room = (req, res) => {
      var new_room = new Room(req.body);
      console.log(req.body);
      new_room.save((err, task) => {
        if(err) {
          res.send(err);
        }
        res.json(task);
      });
    };

    export const delete_a_room = (req, res) => {
      Room.remove({
        _id: req.params.roomId
      }, (req, task) => {
        if (err) {
          res.send(err);
        };
        res.json({ task: 'Room successfully deleted'});
      });
    };

    export const read_a_room = (req, res) => {
      Room.findById(req.params.roomId, (err, task) => {
        if (err) {
          res.send(err);
        };
        res.json(task);
      });
    };
