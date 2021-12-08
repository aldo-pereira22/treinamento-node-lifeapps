const express = require("../../blogapp/node_modules/express");
const router  = express.Router();
const fs = require('fs')
const readline = require('readline')

const caminho = fs.createReadStream('teste1.csv')


const rl = readline.createInterface({
    input: caminho
})

// let cidades  = []

cidades = []
rl.on('line', (line) => {
    if(!line) return;
     cidades = line.split(',')
    console.log(cidades)
})

rl.on('close', () => {

})


router.get("/cidades/:busca", (req, res) => {
    const {busca} = req.params
    console.log(busca)
})

module.exports = router