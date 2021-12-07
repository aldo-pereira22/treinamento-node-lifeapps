const express = require("../blogapp/node_modules/express");
const app = express();
const bodyParser = require('../blogapp/node_modules/body-parser')
const handlebars = require('../blogapp/node_modules/express-handlebars')
const rotas = require('./routes/rotas')
// const app = express()





// Configurações

   //Body-Parser
   app.use(bodyParser.urlencoded({extended:true}))
   app.use(bodyParser.json())
    // Handlebars
    // app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');


 
    // Configuração das rotas
    app.use('/', rotas)



let porta = 8084
app.listen(porta, () => {
    console.log("Servidor rodando na url: http://localhost:"+ porta)
});