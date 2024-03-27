import express from "express";
import path from "path"
import { v4 } from "uuid";
import bodyParser from "body-parser";
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

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

app.get("/lobby/getPlayers",(req,res) => {
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


app.listen("3000",() => {
    console.log('Server Open http://localhost:3000/')
})