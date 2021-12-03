const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
// const path = require('path')
const mongoose = require('mongoose')
const { Console } = require('console')

// configurações
    //Body-Parser
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(bodyParser.json())

    // Handlebars
        // app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then( ()=> {
            console.log("Conecetado ao banco de dados!!! ")
        }).catch( (err) => {
            console.log("Erro ao conecetar ao banco de dados!"+err)
        })

    //public 
//     app.use(express.static(path.join(__dirname, "public")))
    // app.use(express.static(path.join( 'public/css')))
    console.log("caminho+"+ __dirname);
    app.use(express.static(path.join(__dirname, "public")))

// Rotas 
    app.use('/admin', admin)

const PORT = 8081

app.listen(PORT, ()=> {
    console.log('servidor rodando!!! no endereço: localhost:8081/admin'+PORT)
})