const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.get("/script.js", (req, res) => {
  res.sendFile(__dirname + "/script.js");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (data) => {
    socket.broadcast.emit("typing ended");
    io.emit("chat message", data);
  });

  socket.on("user connected", (nickname) => {
    socket.broadcast.emit("user connected", nickname);
  });

  socket.on("typing", (nickname) => {
    socket.broadcast.emit("typing", nickname);
  });

  socket.on("typing ended", () => {
    socket.broadcast.emit("typing ended");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
