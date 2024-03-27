import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const queryString = window.location.search
const params = new URLSearchParams(queryString)
const lobbyId = params.get("id")

const socket = io()

const data = {
  'lobbyId' : lobbyId
}

socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    socket.emit(lobbyId,data)
});

function GetHost(){

}