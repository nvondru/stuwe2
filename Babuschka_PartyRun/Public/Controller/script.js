let socket;
let btnJump = document.getElementById("btn_jump");
let btnShoot = document.getElementById("btn_shoot");
let btnStart = document.getElementById("btn_start");
let permissionGranted = false;

let serverState = {
  jumpPending: false,
  shootChargePending: false,
  shootReleasePending: false,
};

let setup = () => {
  socket = io("https://blooming-shore-50486.herokuapp.com/");
  // socket = io("https://5b7f-2a02-1210-88f4-c400-79e8-19b3-b576-d697.ngrok.io/");
  socket.on("connection success", () => {
    console.log("controller connected successfully to the server!");

    socket.emit("register controller");
  });

  socket.on("jump processed", () => {
    serverState.jumpPending = false;
  });

  registerTouchListeners();
};

/**
 * Source: https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
let getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
};

let registerTouchListeners = () => {
  btnJump.addEventListener("touchstart", (event) => {
    event.stopPropagation();
    event.preventDefault();
    triggerJump();
  });

  btnShoot.addEventListener("touchstart", (event) => {
    event.stopPropagation();
    event.preventDefault();
    triggerShootCharge();
  });

  btnShoot.addEventListener("touchend", (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("released shoot btn");
    triggerShootRelease();
  });
};

let registerShakeListeners = () => {
  // for testing -- can be removed
  console.log(getMobileOperatingSystem());

  if (getMobileOperatingSystem() == "iOS") {
    DeviceMotionEvent.requestPermission().then((response) => {
      if (response == "granted") {
        addShakeHandler();
      }
    });
  } else if (getMobileOperatingSystem() == "Android") {
    if (window.DeviceMotionEvent != undefined) {
      addShakeHandler();
    }
  } else {
    alert("Please use a mobile device :)");
  }

  btnStart.style.pointerEvents = "none";
  btnStart.style.opacity = "0";
};

let addShakeHandler = () => {
  // Position variables
  var x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0;

  var sensitivity = 20;
  window.addEventListener(
    "devicemotion",
    function (e) {
      x1 = e.accelerationIncludingGravity.x;
      y1 = e.accelerationIncludingGravity.y;
    },
    false
  );

  // Periodically check the position and fire
  // if the change is greater than the sensitivity
  setInterval(function () {
    var changeX = x1 - x2;
    var changeY = Math.abs(y1 - y2);

    if (changeX > sensitivity) {
      console.log("Shake in positive X");
      triggerShootRelease();
    } else if (changeX < -sensitivity) {
      console.log("Shake in negative X");
      triggerShootCharge();
    }

    if (changeY > sensitivity) {
      console.log("Shake in Y");
      triggerJump();
    }

    // Update new position
    x2 = x1;
    y2 = y1;
  }, 10);
};

let triggerShootCharge = () => {
  if (!serverState.shootChargePending) {
    socket.emit("shoot charge");
  }
};

let triggerShootRelease = () => {
  if (!serverState.shootReleasePending) {
    socket.emit("shoot release");
  }
};

let triggerJump = () => {
  if (!serverState.jumpPending) {
    serverState.jumpPending = true;
    socket.emit("jump");
  }
};

setup();
