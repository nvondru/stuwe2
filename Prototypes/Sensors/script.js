let output = document.getElementById("output");
let outputX = document.getElementById("outputX");
let outputY = document.getElementById("outputY");
let outputZ = document.getElementById("outputZ");

let x;
let y;
let z;

function getAccel() {
  console.log("Requesting...");
  DeviceMotionEvent.requestPermission().then((response) => {
    output.innerHTML = "Permission for DeviceMotion sensor: " + response;
    if (response == "granted") {
      console.log("permission granted :)");
      window.addEventListener("devicemotion", (event) => {
        x = event.acceleration.x.toFixed(4);
        y = event.acceleration.y.toFixed(4);
        z = event.acceleration.z.toFixed(4);
      });
    } else {
    }
  });
}

setInterval(() => {
  outputX.innerText = "X: " + x;
  outputY.innerText = "Y: " + y;
  outputZ.innerText = "Z: " + z;
}, 500);
