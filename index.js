const http = require("http");
const express = require('express');
const {Server} = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server)
app.use(express.static(__dirname + "/view"));




app.get("/", (req,res)=>{
    return res.sendFile("index")
})

io.on('connection', (socket)=>{
    socket.on('user-message', (message)=>{
        io.emit('send-message', message);
    })
})

server.listen(8000, ()=>{
    console.log('Server Listening on Port http://localhost:8000')
})