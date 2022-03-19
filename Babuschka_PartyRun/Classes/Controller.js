const SocketEvent = require("./SocketEvent");

class Controller {
  constructor(socket) {
    this.id = socket.id;
    this.socket = socket;
    this.serverRole = "Controller";
    console.log("New controller was created with id: " + this.id);
  }
  joinRoom(room) {
    if (room != undefined) {
      this.room = room;
      this.room.subscribeController(this);
      this.registerSocketListeners();
    } else {
      console.log(
        "Controller with id: " +
          this.id +
          " could not join room " +
          room.id +
          ". The room is not registered anymore!"
      );
    }
  }
  leaveRoom() {
    this.room.unsubscribeController(this);
  }
  registerSocketListeners() {
    this.socket.on("disconnect", () => {
      this.leaveRoom();
    });

    this.socket.on("jump", () => {
      this.room.emitTo(this.room.viewer, new SocketEvent("jump", {}), this);
    });

    this.socket.on("shoot charge", () => {
      this.room.emitTo(
        this.room.viewer,
        new SocketEvent("shoot charge", {}),
        this
      );
    });

    this.socket.on("shoot release", () => {
      this.room.emitTo(
        this.room.viewer,
        new SocketEvent("shoot release", {}),
        this
      );
    });
  }
}

module.exports = Controller;
