const express = require('express')
const routers = require('./api/index.js')
const app = express()
const {sequelize} = require('./models/index')

app.use(express.json())
app.use('/',routers)

sequelize.sync().then(() => {
    console.log('conectado com o banco de dados.')
})
const port = 3000
app.listen(port, (req, res) => {
    console.log("App On-line na porta: "+port)
})