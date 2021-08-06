const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require("socket.io")

corsOptions = {
  cors: true,
  origins: ["http://localhost:3000"],
}
const rooms = {}


const io = socketio(server, corsOptions)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connect', (socket) => {
  console.log('a user connected');
  socket.on("disconnect", () => {
    console.log("a disconnect")
  })

  socket.on("get_rooms", () => {
    const arr = Array.from(io.sockets.adapter.rooms)
    const filtered = arr.filter(room => !room[1].has(room[0]))
    const res = filtered.map(i => i[0]);
    console.log(arr);
    socket.emit("return_rooms", res)
  })

  socket.on("make_room", (name) => {
    socket.join(name) 
    console.log(io.sockets.adapter.rooms)
  })
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});