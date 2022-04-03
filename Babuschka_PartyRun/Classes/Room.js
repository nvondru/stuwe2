const SocketEvent = require("./SocketEvent");

class Room {
  constructor(viewer, babuschkaServer) {
    this.id = viewer.id;
    this.viewers = [];
    this.controllers = [];
    this.serverRole = "Room";
    this.babuschkaServer = babuschkaServer;
    this.roles = [
      {
        role: "jump",
        selected: false,
        playerName: "",
      },
      {
        role: "shotCharge",
        selected: false,
        playerName: "",
      },
      {
        role: "shotRelease",
        selected: false,
        playerName: "",
      },
      {
        role: "enemy",
        selected: false,
        playerName: "",
      },
    ];
    this.viewers.push(viewer);
    console.log("New room was created with id: " + this.id);
    this.emitTo(this.viewers, new SocketEvent("room created", this.id), this);
  }
  subscribeController(controller) {
    this.controllers.push(controller);
    console.log("Controller " + controller.id + " joined  room: " + this.id);
  }
  unsubscribeController(controller) {
    this.controllers.splice(this.controllers.indexOf(controller), 1);
    console.log("Controller " + controller.id + " left room: " + this.id);
  }

  unsubscribeViewer(viewer) {
    this.viewers.splice(this.viewers.indexOf(viewer), 1);
    console.log("Viewer " + viewer.id + " left room: " + this.id);
    if (this.viewers.length <= 0) {
      this.delete();
    }
  }

  updateRoles() {
    this.emitTo(
      this.controllers,
      new SocketEvent("update role state", this.roles),
      this
    );

    this.emitTo(
      this.viewers,
      new SocketEvent("update role state", { roles: this.roles }),
      this
    );
  }
  emitTo(targets, event, source) {
    targets.forEach((target) => {
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
    });
  }
  delete() {
    while (this.controllers.length > 0) {
      this.controllers[0].socket.disconnect();
    }
    this.babuschkaServer.removeRoom(this);
  }
}

module.exports = Room;
