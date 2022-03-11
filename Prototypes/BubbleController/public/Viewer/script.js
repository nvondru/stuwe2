let socket;
let pos = {
  x: 0,
  y: 0,
};

function setup() {
  createCanvas(innerWidth, innerHeight);
  pos = {
    x: width / 2,
    y: height / 2,
  };
  socket = io("https://cc78-147-88-200-120.ngrok.io/");
  socket.on("connection success", () => {
    console.log("connected successfully to the server!");
    socket.emit("register viewer");
  });

  socket.on("update", (motion) => {
    console.log(motion);
    pos.x += motion.x;
    pos.y += motion.y;
    // rotate(motion.angleX);
  });
}

function draw() {
  background(220);
  rect(pos.x, pos.y, 15, 30);
}
