import http from 'http'
import express from 'express'
import { Server } from 'socket.io';
import ejs from 'ejs'
import Player from './src/model/Player.js'
import Game from './src/model/Game.js'



const app = express()

const server = http.Server(app).listen(8080)

const io = new Server(server);
const clients = {}

app.use(express.static('./public'))
app.use('/vendor',express.static('./node_modules'))
app.set('views', './public')
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)


app.get('/', (req, res) => {
    return res.render('index.html')
})

const games = {}
let unmatched = null;
io.on('connection', (socket) => {

    let id = socket.id
    console.log("\nNovo cliente conectado! ID: "+id+"\n")
    clients[id] = socket    

    socket.on("game.begin", (data) => {
        const game = join(socket, data)
        if(game.player2){
            console.log("\nNo jogo começando!",game)
            clients[game.player1.socketId].emit('game.begin', game)
            clients[game.player2.socketId].emit('game.begin', game)

        }
    })
    socket.on("disconnect", ()=> {

        console.log("Cliente Desconectado! ID: "+id)
        delete clients[id]
    
    })
})

const join = (socket, data) => {
    const player = new Player(data.playerName, "X",socket.id)

    if(unmatched){
        unmatched.player2 = player;
        games[unmatched.player2.socketId] = unmatched;
        games[unmatched.player2.socketId] = unmatched;
        unmatched = null
        return games[socket.id]
    }else {
        unmatched = new Game(player);
        return unmatched;
    }
}