// console.log(process.argv)

const args = process.argv.slice(2)
console.log(args)

const nome = args[0].split('=')[1] // Divide o array quando chegar no "=", ai fica duas variáveis, nome indice[0] e mateus no indice[1]

console.log("nome: "+nome)