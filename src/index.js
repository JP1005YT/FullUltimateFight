import express from "express";
import path from "path"
import { v4 } from "uuid";
import bodyParser from "body-parser";
import { Server as socketIO } from 'socket.io';
import http from "http";

const app = express()
const server = http.createServer(app)
const io = new socketIO(server)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

io.on("connection",(socket) => {
    console.log(`usuario ${socket.id} foi conectado!`)
    socket.on("lobbyUpdate",(lobbyId,data) => {
        l
    })
})

let lobbyIds = {}

app.get("/lobby",(req,res) => {
    const ID = req.query.id
    const ListIDs = Object.keys(lobbyIds)
    let ItsOkay = false
    ListIDs.forEach(IDofList =>{
        if(IDofList === ID){
            ItsOkay = true
        }
    })
    if(ItsOkay){
        res.sendFile(path.resolve("pages/lobby/index.html"))
    }else{
        res.send({error:"Room don't exist"})
    }
})

app.post("/lobby/getPlayers",(req,res) => {
    const ID = req.query.id
    const ListIDs = Object.keys(lobbyIds)
    ListIDs.forEach(IDofList =>{
        if(IDofList === ID){
            res.send(lobbyIds[req.query.id])
        }
    })
})

app.post("/execute/:command",(req,res) => {
    const HostName = req.body.playerName
    if(typeof(HostName) === "undefined"){
        res.send({"Error":"Invalid User Name"})
    }
    switch (req.params.command) {
        case "createRoom":
            const idNew = v4()
            lobbyIds[idNew] = []
            lobbyIds[idNew].push(HostName)
            res.send({"Room": idNew})
            break;
    }
    console.log(lobbyIds)
})


server.listen("3000",() => {
    console.log('Server Open http://localhost:3000/')
})