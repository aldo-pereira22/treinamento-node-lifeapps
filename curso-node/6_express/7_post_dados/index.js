const express  = require('express')
const app = express()
const port = 3001

const path = require('path')


const basepath = path.join(__dirname, 'templates')


// Configuração MIDDLEWARE
// Ler o body
app.use( 
    express.urlencoded({
        extended:true,
    })
)
app.use(express.json())




app.get('/users/add', (req, res) => {
    res.sendFile(`${basepath}/userform.html`)
})
app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é: ${name} e a idade é: ${age} anos`)
    res.sendFile(`${basepath}/userform.html`)
})

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

