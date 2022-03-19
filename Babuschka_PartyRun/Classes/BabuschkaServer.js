const Room = require("./Room.js");
const Controller = require("./Controller.js");
const Viewer = require("./Viewer.js");

class BabuschkaServer {
  constructor(io) {
    this.io = io;
    this.rooms = [];

    io.on("connection", (socket) => {
      io.to(socket.id).emit("connection success", "connected successfully");

      socket.on("register viewer", () => {
        let viewer = new Viewer(socket);
        this.createRoomForViewer(viewer);
        socket.on("disconnect", (reason) => {
          console.log(
            "Viewer " + socket.id + " disconnected. Reason: " + reason
          );
        });
      });

      socket.on("join room", (id) => {
        if (this.rooms[id] != undefined) {
          let controller = new Controller(socket);
          controller.joinRoom(this.rooms[id]);
        } else {
          // to do
          // show info to the client, that his code is not active anymore and he should scan a new QR Code

          console.log(
            "User with id: " +
              socket.id +
              " could not join room " +
              id +
              ". The room does not exist anymore."
          );
          console.log(
            "User with id: " +
              socket.id +
              " will be disconnected from the Socket.io server"
          );
          socket.disconnect();
        }
      });
    });
  }

  createRoomForViewer(viewer) {
    let room = new Room(viewer, this);
    this.rooms[room.id] = room;
    viewer.room = room;
  }
  removeRoom(room) {
    delete this.rooms[room.id];
    console.log("Removed room " + room.id + " from the room list!");
  }
}

module.exports = BabuschkaServer;
