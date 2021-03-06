const SocketEvent = require("./SocketEvent");
const PlayerInfo = require("./PlayerInfo.js");

class Controller {
  constructor(socket) {
    this.id = socket.id;
    this.socket = socket;
    this.serverRole = "Controller";
    this.playerInfo = new PlayerInfo();
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
    let _role = this.room.roles.find((role) => {
      return role.role == this.playerInfo.role;
    });
    if (_role != undefined) {
      _role.selected = false;
      _role.playerName = "";
    }
    this.playerInfo.role = "";
    this.playerInfo.triggerOption = "";
    this.playerInfo.readyState = false;

    this.room.emitTo(
      this.room.viewers,
      new SocketEvent("player disconnected", this.playerInfo),
      this
    );

    // this.room.updateRoles();
    this.room.unsubscribeController(this);
  }

  releaseRole() {
    let _role = this.room.roles.find((role) => {
      return role.role == this.playerInfo.role;
    });
    if (_role != undefined) {
      _role.selected = false;
      _role.playerName = "";
      this.playerInfo.role = "";
      this.room.updateRoles();
    }
  }
  releaseTrigger() {
    this.playerInfo.triggerOption = "";
    this.room.emitTo(
      this.room.viewers,
      new SocketEvent("trigger option updated", this.playerInfo),
      this
    );
  }

  registerSocketListeners() {
    this.socket.on("disconnect", () => {
      this.leaveRoom();
    });

    this.socket.on("set name", (name) => {
      this.playerInfo.name = name;
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("player joined", this.playerInfo.name),
        this
      );
    });

    this.socket.on("role selected", (playerInfo) => {
      this.playerInfo.role = playerInfo.role.role;
      let _role = this.room.roles.find((role) => {
        return role.role == playerInfo.role.role;
      });
      _role.selected = true;
      _role.playerName = playerInfo.name;
      this.room.updateRoles();
    });

    this.socket.on("release role", () => {
      this.releaseRole();
    });

    this.socket.on("release trigger", () => {
      this.releaseTrigger();
    });

    this.socket.on("request role state", () => {
      this.socket.emit("update role state", this.room.roles);
    });

    this.socket.on("trigger option selected", (playerInfo) => {
      this.playerInfo.triggerOption = playerInfo.triggerOption.option;
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("trigger option updated", this.playerInfo),
        this
      );
    });

    this.socket.on("update ready state", (playerInfo) => {
      this.playerInfo.readyState = playerInfo.readyState;
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("update ready state", this.playerInfo),
        this
      );

      if (this.room.allPlayersReady()) {
        this.room.startGame();
      }
    });

    this.socket.on("options opened", () => {
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("pause game", {}),
        this
      );
      this.room.controllers.forEach((controller) => {
        if (controller != this) {
          controller.socket.emit("show paused overlay");
        }
      });
    });

    this.socket.on("options closed", () => {
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("resume game", {}),
        this
      );
      this.room.controllers.forEach((controller) => {
        if (controller != this) {
          controller.socket.emit("hide paused overlay");
        }
      });
    });

    this.socket.on("mute sound", () => {
      this.room.emitTo(this.room.viewers, new SocketEvent("mute sound"), this);
      this.room.emitTo(
        this.room.controllers,
        new SocketEvent("set muted"),
        this
      );
    });

    this.socket.on("unmute sound", () => {
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("unmute sound"),
        this
      );
      this.room.emitTo(
        this.room.controllers,
        new SocketEvent("set unmuted"),
        this
      );
    });

    this.socket.on("restart level", () => {
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("restart level"),
        this
      );
      this.room.controllers.forEach((controller) => {
        if (controller != this) {
          controller.socket.emit("hide paused overlay");
        }
      });

      this.room.emitTo(
        this.room.controllers,
        new SocketEvent("hide restart overlay", {}),
        this
      );
    });

    this.socket.on("request quit to lobby", () => {
      this.room.resetReadyState();
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("quit to lobby", {}),
        this
      );
      this.room.emitTo(
        this.room.controllers,
        new SocketEvent("quit to lobby", {}),
        this
      );
    });

    this.socket.on("jump", () => {
      this.room.emitTo(this.room.viewers, new SocketEvent("jump", {}), this);
    });

    this.socket.on("shotCharge", () => {
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("shoot charge", {}),
        this
      );
    });

    this.socket.on("shotRelease", () => {
      this.room.emitTo(
        this.room.viewers,
        new SocketEvent("shoot release", {}),
        this
      );
    });
  }
}

module.exports = Controller;
