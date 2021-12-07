const fs = require('fs')
const readline = require('readline')

const caminho = fs.createReadStream('teste.csv')

const rl = readline.createInterface({
    input: caminho
})

let cidades  = []
rl.on('line', (line) => {

    if(!line) return;

    dados = line.split(',')

    cidades = dados
    console.log("Array: "+cidades) 
})

rl.on('close', () => {
    // console.log(cidades)
    // const c1 = cidades.map( x => x.split(',')[1]).filter(x => x.indexOf('Rio') > -1)
    // const c1 = cidades.filter()
    // console.log("Array"+ dados)
})

// console.log("Array"+ dados)
console.log(cidades)




// console.log("CAMINHOOOO:" +caminho)


// // Síncrona
// const cidades = fs.readFileSync(caminho, 'utf-8')
// console.log("STRING: \n"+cidades.length)

// resultado = cidades.split(',')
// let array = [];
// array.push(cidades)
// console.log(resultado.filter( x => x === 'Br'))

// console.log("Array: "+array[0])

// let array = []
// array.push(cidades)
// console.log("Array: \n"+array[0])

// console.log(array.map(x => x.split(',')))



// let array = []
// // Assincrona
// fs.readFile(caminho, 'utf-8', (err, cidades) => {

//     array.push(cidades)
//     console.log( array.map(x => x.split(",")[1]) )
// })

// console.log(c)
