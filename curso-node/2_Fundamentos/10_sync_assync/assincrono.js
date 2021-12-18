const fs = require('fs')

console.log("Inicio")

fs.writeFile("arquivo.txt", "Oi", (err) => {
    setTimeout(()=> {
        console.log("Arquivo Criado!")
    }, 1000)
})