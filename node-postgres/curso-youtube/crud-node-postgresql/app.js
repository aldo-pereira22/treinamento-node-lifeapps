const express = require('express')
const routers = require('./api/index.js')
const app = express()

app.use(express.json())
app.use('/',routers)

const port = 3000
app.listen(port, (req, res) => {
    console.log("App On-line na porta: "+port)
})