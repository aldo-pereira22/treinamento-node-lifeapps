const EvetEmitter = require('events')
const eventEmitter = EvetEmitter()

eventEmitter.on('start', () => {
    console.log("Durante")
})

console.log("Antes")


eventEmitter.emit('start')

console.log("Depois")