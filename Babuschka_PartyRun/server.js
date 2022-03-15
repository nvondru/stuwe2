const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const compression = require("compression");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

let viewers = [];
let controllers = [];

app.use(express.static(__dirname + "/Public"));
app.use(compression());

io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);
  io.to(socket.id).emit("connection success", "connected successfully");
  socket.on("disconnect", (reason) => {
    console.log("User disconnected. " + socket.id + " Reason: " + reason);
  });

  socket.on("register viewer", () => {
    viewers.push(socket);
    console.log("Viewer registered: " + socket.id);
    socket.on("disconnect", () => {
      viewers.splice(viewers.indexOf(socket), 1);
      console.log("Viewer " + socket.id + " unsubscribed.");
    });
  });

  socket.on("register controller", () => {
    socket.on("disconnect", () => {
      viewers.splice(controllers.indexOf(socket), 1);
      console.log("Controller " + socket.id + " unsubscribed.");
    });

    controllers.push(socket);
    console.log("Controller registered: " + socket.id);

    socket.on("jump", () => {
      sendToAllViewers({ name: "jump", data: {} });

      setTimeout(() => {
        sendToAllControllers({ name: "jump processed", data: {} });
      }, 200);
    });

    socket.on("shoot charge", () => {
      sendToAllViewers({ name: "shoot charge", data: {} });

      setTimeout(() => {
        sendToAllControllers({ name: "shoot charge processed", data: {} });
      }, 50);
    });

    socket.on("shoot release", () => {
      sendToAllViewers({ name: "shoot release", data: {} });

      setTimeout(() => {
        sendToAllControllers({ name: "shoot release processed", data: {} });
      }, 50);
    });
  });
});

let sendToAllViewers = (event) => {
  viewers.forEach((viewer) => {
    console.log(`Sending ${event.name} event to viewer with id: ${viewer.id}`);
    io.to(viewer.id).emit(event.name, event.data);
  });
};

let sendToAllControllers = (event) => {
  controllers.forEach((controller) => {
    console.log(
      `Sending ${event.name} event to controller with id: ${controller.id}`
    );
    io.to(controller.id).emit(event.name, event.data);
  });
};

httpServer.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});
