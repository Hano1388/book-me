import {
  list_all_rooms,
  create_a_room,
  delete_a_room,
  read_a_room
} from '../controllers/roomListController';

const roomsRoute = (app) => {
    app.route('/rooms')
    .get(list_all_rooms)
    // .get('/rooms', (req, res) => {
    //   const list = list_all_rooms;
    //   res.send(list);
    // })
}


export default roomsRoute;
