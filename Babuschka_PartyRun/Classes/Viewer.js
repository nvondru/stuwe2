const SocketEvent = require("./SocketEvent");

class Viewer {
  constructor(socket) {
    this.id = socket.id;
    this.socket = socket;
    this.serverRole = "Viewer";
    this.room;
    console.log("New viewer was created with id: " + this.id);
    this.registerSocketListeners();
  }

  registerSocketListeners() {
    this.socket.on("disconnect", () => {
      this.room.unsubscribeViewer(this);
    });

    this.socket.on("request role state", () => {
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("init role state", { roles: this.room.roles }),
        this
      );
    });
  }
}

module.exports = Viewer;
