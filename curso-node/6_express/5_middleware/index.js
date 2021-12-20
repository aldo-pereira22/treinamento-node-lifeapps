const express  = require('express')
const app = express()
const port = 3001

const path = require('path')


const basepath = path.join(__dirname, 'templates')

const checkAuth = (req, res, next) => {
    req.authStatus = true
    if(req.authStatus){
        console.log("Esta logado")
        next()
    }else {
        console.log("Não está logado, faça o login para continuar")
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App Rodando na porta teste ${port}\n`)
})