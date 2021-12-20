const express  = require('express')
const app = express()
const port = 3001
const path = require('path')
const userRouter = require('./users/index')




// Configuração MIDDLEWARE
// Ler o body
app.use( 
    express.urlencoded({
        extended:true,
    })
    )
    app.use(express.json())
    
    const basepath = path.join(__dirname, 'templates')
 
app.use('/users', userRouter)

// Arquvios estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basepath}/404.html`)
})
app.listen(port, () => {
    console.log(`App Rodando na porta teste ${port}\n`)
})

