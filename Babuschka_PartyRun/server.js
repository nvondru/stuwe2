const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");
const compression = require("compression");

const BabuschkaServer = require("./Classes/BabuschkaServer.js");

const app = express();

const httpServer = createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const babuschkaServer = new BabuschkaServer(io);
const publicPath = path.join(__dirname, "Public");
app.use(express.static(publicPath));

app.use(compression());

httpServer.listen(process.env.PORT || 5501, () => {
  console.log("Server listening on port 5501");
});
