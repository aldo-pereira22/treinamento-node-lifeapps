const fs = require('fs')
const os = require('os')
fs.stat('novo_arquivo.txt', (err, stats) => {
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())

    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)

    console.log("CPU: "+os.cpus)

})