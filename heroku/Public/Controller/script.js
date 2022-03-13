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

$(".no-zoom").bind("touchend", function (e) {
  e.preventDefault();
  // Add your code here.
  $(this).click();
  // This line still calls the standard click event, in case the user needs to interact with the element that is being clicked on, but still avoids zooming in cases of double clicking.
});
