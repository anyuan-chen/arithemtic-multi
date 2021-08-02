const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require("socket.io")

corsOptions = {
  cors: true,
  origins: ["http://localhost:3000"],
}
const io = socketio(server, corsOptions)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connect', (socket) => {
  console.log('a user connected');
  socket.on("disconnect", () => {
    console.log("a disconnect")
  })

  socket.on("handshake", () => {
    console.log("recieved")
  })
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});