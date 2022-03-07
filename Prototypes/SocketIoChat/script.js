var containerChat = document.getElementById("container_chat");
var form = document.getElementById("form");
var input = document.getElementById("input");

let containerNickname = document.getElementById("container_nickname");
let inputNickname = document.getElementById("input_nickname");
let formNickname = document.getElementById("form_nickname");

let typingDisplay = document.getElementById("typing");

let typingTimeout;
let isTyping = false;

let socket;

let nickname = "";

formNickname.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputNickname.value) {
    nickname = inputNickname.value;
    containerNickname.classList.add("hidden");
    containerChat.classList.remove("hidden");
    createSocket();
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", { msg: input.value, nickname: nickname });
    input.value = "";
  }
});

let createSocket = () => {
  socket = io();
  socket.on("chat message", (data) => {
    var item = document.createElement("li");
    item.textContent = data.nickname + ": " + data.msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

  socket.on("user connected", (nickname) => {
    // alert(nickname + " joined the chat. Say Hello :)");
  });

  socket.on("connect", () => {
    socket.emit("user connected", nickname);
  });

  socket.on("typing", (nickname) => {
    typingDisplay.innerText = nickname + " is typing ...";
  });

  socket.on("typing ended", () => {
    typingDisplay.innerText = "";
  });

  input.addEventListener("keydown", () => {
    if (!isTyping) {
      isTyping = true;
      console.log("asasd");
      socket.emit("typing", nickname);
    }
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      isTyping = false;
      socket.emit("typing ended");
    }, 2000);
  });
};
