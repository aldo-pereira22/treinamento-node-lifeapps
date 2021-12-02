const mongoose = require('mongoose')


// Configuração do mongoDB
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/banco-teste").then( () => {
    console.log("MongoDB conectado... ")
}).catch( (err)=> {
    console.log("Houve um erro ao se conectar ao mongoDB:"+ err)
})

