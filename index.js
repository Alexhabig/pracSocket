const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', (socket) => {
    console.log('a user connected gago');

    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg);
        console.log("message: " + msg);
    });
    // socket.on('disconnect', ()=>{
    //     console.log("disconnected kana gago")
    // });

});



server.listen(3000, () => {
  console.log('tang ina mo listening on *:3000');
  console.log('tang inamo')
});