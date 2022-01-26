const express = require('express')
const path = require('path')
const http = require('http')
const socketIo = require('socket.io')
const { Socket } = require('dgram')
const { connect } = require('http2')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)
server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')))

let usuariosConectados = [];


io.on('connection', (socket) => {
    console.log("Conexão detectda....");
    socket.on('join-request', (username) => {
        socket.username = username
        usuariosConectados.push(username)
        console.log(usuariosConectados)

        socket.emit('user-ok', usuariosConectados)
        socket.broadcast.emit('list-update', {
            joined: username,
            list: usuariosConectados
        })
    });
})