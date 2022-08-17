const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server,{
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket)=>{
  socket.on("getMessage", (data)=>{
    console.log("get message: " + JSON.stringify(data))
  })
  console.log("socket connected")
})

server.listen(3001,()=>{
  console.log("server run port 3001")
})
// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io")
// const io = new Server(server);


// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/index.html');
// //     // res.links('http://localhost:3000/');
// //   });

// io.on('connection', (socket) => {
//     console.log('a user connected gago');

//     socket.on('chat message', (msg)=>{
//         io.emit('chat message', msg);
//         console.log("message: " + msg);
//     });
//     socket.on('disconnect', ()=>{
//         console.log("disconnected kana gago")
//     });

// }); 

// server.listen(3001, () => {
//   console.log('tang ina mo listening on *:5000');
//   console.log('tang inamo')
// });