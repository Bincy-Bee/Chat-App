const {Server} = require('socket.io');
const {Router} = require('express');
const {server} = require('../index')
const router = Router();
const io = new Server(server);


router.get("/", (req,res)=>{
    return res.sendFile("/index.html")
})


module.exports = {router}