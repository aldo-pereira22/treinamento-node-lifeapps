const app = require('express')()
const http = require('http').createServer(app)

const io = require('socket.io')(http)


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

io.on('connection', (socket) => {
    console.log('\nMENSAGEM DO SERVIDOR: Um novo usuário conectado: ',socket.id)


    // Escutando a mensagem do cliente: através do evento scoket.emit():
    // Parametro 1: o nome do evento
    // Parametro 2: a mensage, pode ser um objeto.
    socket.on('msg', (msg) => {
        console.log(msg)

        // Enviar uma mensagem para todos os clientes conectados
        // Parametro 1: Nome do evento
        // Parametro 2: Mensagem
        socket.broadcast.emit('msg', "BROADCAST: Novo usuário conecetado: "+socket.id)

    })
})

http.listen(3000, ()=>{
    console.log('Rodando na porta 3000:')
})