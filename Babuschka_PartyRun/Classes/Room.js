const SocketEvent = require("./SocketEvent");

class Room {
  constructor(viewer, babuschkaServer) {
    this.id = viewer.id;
    this.viewer = viewer;
    this.controllers = [];
    this.serverRole = "Room";
    this.babuschkaServer = babuschkaServer;
    console.log("New room was created with id: " + this.id);
    this.emitTo(this.viewer, new SocketEvent("room created", this.id), this);
  }
  subscribeController(controller) {
    this.controllers.push(controller);
    console.log("Controller " + controller.id + " joined  room: " + this.id);
  }
  unsubscribeController(controller) {
    this.controllers.splice(this.controllers.indexOf(controller), 1);
    console.log("Controller " + controller.id + " left room: " + this.id);
  }
  emitTo(target, event, source) {
    target.socket.emit(event.name, event.data);
    console.log(
      source.serverRole +
        " " +
        source.id +
        " sent event to " +
        target.serverRole +
        " " +
        target.id +
        ": " +
        event.name
    );
  }
  delete() {
    while (this.controllers.length > 0) {
      this.controllers[0].socket.disconnect();
    }
    this.babuschkaServer.removeRoom(this);
  }
}

module.exports = Room;
