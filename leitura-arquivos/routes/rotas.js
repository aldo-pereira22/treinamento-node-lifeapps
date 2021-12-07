const express = require("../../blogapp/node_modules/express");
const router  = express.Router();
const fs = require('fs')
const readline = require('readline')

const caminho = fs.createReadStream('cidades.csv')

const rl = readline.createInterface({
    input: caminho
})

let cidades  = []

rl.on('line', (line) => {
    cidades.push(line)
})

rl.on('close', () => {
     const c1 = cidades.map( x => x.split(',')[1]).filter(x => x.indexOf('Rio') > -1)
 
})


router.get("/", (req, res) => {
    res.send(" <h2>  Bem Vindo! </h2>")
})

module.exports = router