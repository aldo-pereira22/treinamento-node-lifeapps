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


app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const ocupation = req.body.ocupation
    let newsletter = req.body.newsletter

    if(newsletter ==='on') {
        newsletter = true
    }else {
        newsletter = false
    }
    // console.log( name, ocupation, newsletter)

    await User.create({name, ocupation, newsletter})
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    console.log("Conectado ao Banco de Dados!")
    app.listen(3000)
}).catch( (error) => console.log(error))