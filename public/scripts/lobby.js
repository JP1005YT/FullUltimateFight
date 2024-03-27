import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io()

socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });