const express = require('express')
const hb = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

const app = express()


app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.engine('handlebars', hb.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('Home')
})

conn.sync().then(() => {
    console.log("Conectado ao Banco de Dados!")
    app.listen(3000)
}).catch( (error) => console.log(error))