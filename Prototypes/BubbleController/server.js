const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

let viewers = [];
let controllers = [];

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("a user connected");
  io.to(socket.id).emit("connection success", "connected successfully");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("register viewer", () => {
    viewers.push(socket);
    console.log("a viewer registered");
  });

  socket.on("register controller", () => {
    controllers.push(socket);
    console.log("a controller registered");
    socket.on("update", (motion) => {
      viewers.forEach((viewer) => {
        console.log(motion);
        io.to(viewer.id).emit("update", motion);
      });
    });
  });
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});
