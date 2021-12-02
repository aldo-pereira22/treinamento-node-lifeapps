const mongoose = require('mongoose')


// Configuração do mongoDB
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localost/banco-teste").then( () => {
    console.log("MongoDB conectado... ")
}).catch( (err)=> {
    console.log("Houve um erro ao se conectar ao mongoDB:"+ err)
})


//  Model Usuários
const UsuarioSchema = mongoose.Schema({
    nome: {
        type:String,
        require: true

    },
    sobrenome : {
        type: String,
        require: true
    },
    
    email: {
        type: String,
        require: true
    },

    idade: {
        type:Number,
        require:true
    },

    pais: {
        type:String
    }
})
mongoose.model('usuarios', UsuarioSchema )

const novoUsuario = mongoose.model('usuarios')

new novoUsuario({
    nome: "Aldo Pereira",
    sobrenome:"Pereira",
    email:"aldopereira@gmail.com",
    idade: 30,
    pais: "Brasil"
}).save().then(() => {
    console.log("Cliente salvo com sucesso!!!")
}).catch( (err) => {
    console.log("houve um erro ao salvar um usuário!!!"+err)
})