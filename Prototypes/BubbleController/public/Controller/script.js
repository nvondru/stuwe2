let socket;
let updateRate = 50;
let angleDisplayX = document.getElementById("angleDisplayX");
let angleDisplayY = document.getElementById("angleDisplayY");
let angleDisplayZ = document.getElementById("angleDisplayZ");

let motion = {
  x: 0,
  y: 0,
  angleX: 0,
  angleY: 0,
  angleZ: 0,
};

socket = io("https://cc78-147-88-200-120.ngrok.io/");
socket.on("connection success", () => {
  console.log("controller connected successfully to the server!");

  socket.emit("register controller");

  if (window.DeviceMotionEvent == undefined) {
    //No accelerometer is present. Use buttons.
    alert("no accelerometer");
  } else {
    alert("accelerometer found");
    window.addEventListener("devicemotion", (event) => {
      motion.x = -event.acceleration.x;
      motion.y = event.acceleration.y;
    });
  }
});

let requestDeviceMotion = () => {
  DeviceMotionEvent.requestPermission().then((response) => {
    if (response == "granted") {
      console.log("permission for DeviceMotion sensor granted :)");
      window.addEventListener("devicemotion", (event) => {
        motion.x = -event.acceleration.x;
        motion.y = event.acceleration.y;
        motion.angleX = event.rotationRate.beta;
        motion.angleY = event.rotationRate.gamma;
        motion.angleZ = event.rotationRate.alpha;

        angleDisplayX.innerHTML = event.rotationRate.beta;
        angleDisplayY.innerHTML = event.rotationRate.gamma;
        angleDisplayZ.innerHTML = event.rotationRate.alpha;
      });
    } else {
    }
  });
};

setInterval(() => {
  socket.emit("update", motion);
}, 1000 / updateRate);
