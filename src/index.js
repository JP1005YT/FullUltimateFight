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
    let ItsOkay = false
    lobbyIds.forEach(IDVar => {
        if(IDVar === ID){
            ItsOkay = true
        }
    })
    if(ItsOkay){
        res.sendFile(path.resolve("pages/lobby/index.html"))
    }else{
        res.send({error:"Room don't exist"})
    }
})

app.post("/execute/:command",(req,res) => {
    console.log(req.body.playerName)
    switch (req.params.command) {
        case "createRoom":
            const idNew = v4()
            lobbyIds[idNew] = []
            lobbyIds[idNew].push()
            // console.log(lobbyIds)
            res.send({"Room": idNew})
            break;
    }
})


app.listen("3000",() => {
    console.log('Server Open')
})