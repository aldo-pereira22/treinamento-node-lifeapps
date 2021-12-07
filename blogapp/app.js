const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
// const path = require('path')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')

// configurações
    // sessão 
        app.use(session({
            secret:'cursonode',
            resave: true,
            saveUninitialized: true

        }))
        app.use(flash())

    // MiddleWare
        app.use((req, res, next)=>{
            res.locals.success_msg = req.flash("success_msg")
            res.locals.erro_msg = req.flash("error_msg")
            next()
        })

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
            console.log("Erro ao conectar ao banco de dados!"+err)
        })

    //public 
//     app.use(express.static(path.join(__dirname, "public")))
    // app.use(express.static(path.join( 'public/css')))
    console.log("caminho+"+ __dirname);
    app.use(express.static(path.join(__dirname, "public")))

    // app.use((req, res, next) => {
    //     console.log("Oi eu sou um midlleware")
    //     next()
    // })
// Rotas 
    app.use('/admin', admin)

const PORT = 8081

app.listen(PORT, (err)=> {
    console.log("Servidor rodando!")
})






