let socket;
let btnJump = document.getElementById("btn_jump");
let btnShoot = document.getElementById("btn_shoot");

socket = io("https://blooming-shore-50486.herokuapp.com/");
socket.on("connection success", () => {
  console.log("controller connected successfully to the server!");

  socket.emit("register controller");
});

btnJump.addEventListener("touchstart", () => {
  socket.emit("jump");
});

btnShoot.addEventListener("touchstart", () => {
  socket.emit("shoot start");
});

btnShoot.addEventListener("touchend", () => {
  console.log("released shoot btn");
  socket.emit("shoot end");
});
