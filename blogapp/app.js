const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
// const mongoose = require('mongoose')

// configurações
    //Body-Parser
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(bodyParser.json())

    // Handlebars
        // app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // Mongoose

// Rotas 
    app.use('/admin', admin)

const PORT = 8081

app.listen(PORT, ()=> {
    console.log('servidor rodando!!! ')
})