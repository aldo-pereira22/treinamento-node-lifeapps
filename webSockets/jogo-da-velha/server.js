import http from 'http'
import express from 'express'
import { Server } from 'socket.io';
import ejs from 'ejs'



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

io.on('connection', (socket) => {

    let id = socket.id
    console.log("\nNovo cliente conectado! ID: "+id+"\n")
    clients[id] = socket    
    socket.on("disconnect", ()=> {

        console.log("Cliente Desconectado! ID: "+id)
        delete clients[id]
    
    })
})