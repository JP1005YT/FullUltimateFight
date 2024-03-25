import express from "express";
import path from "path"
import { v4 } from "uuid";
const app = express()

let lobbyIds = []

app.use(express.static('public'))
// app.use(express.static('public/pages'))

app.get("/lobby",(req,res) => {
    res.sendFile(path.resolve("pages/lobby/index.html"))
})

app.post("/execute/:command",(req,res) => {
    switch (req.params.command) {
        case "createRoom":
            const idNew = v4()
            lobbyIds.push(idNew)
            break;
    }
})


app.listen("3000",() => {
    console.log('Server Open')
})