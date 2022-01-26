const express = require('express')
const path = require('path')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)
server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
    console.log("Conexão detectda....");

})