const {Sequelize} = require('sequelize')
const configDatabase = require('./database')

const sequelize = new Sequelize(configDatabase)

// try {
//     sequelize.authenticate()
//     console.log("Conectamos com sucesso!!!!")
// } catch (error) {
//     console.log("Não foi possível conectar: ", error)
// }

module.exports = sequelize

// module.exports = {
//     dialect:'postgres',
//     host:'localhost',
//     port: 5432,
//     database:'aula-node',
//     username: 'postgres',
//     password: '1234'
// }