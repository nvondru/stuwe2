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
      this.room.delete();
    });
  }
}

module.exports = Viewer;
