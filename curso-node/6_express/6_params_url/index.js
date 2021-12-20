const express  = require('express')
const app = express()
const port = 3001

const path = require('path')


const basepath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {

    const id = req.params.id
    // Leitura da tabela users, resgatar um usuário
    console.log("Buscando pelo usuário: " +id)
    res.sendFile(`${basepath}/users.html`)
})



app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App Rodando na porta teste ${port}\n`)
})