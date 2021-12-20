const fs = require('fs')


fs.unlink('arquivo.txt', (err) => {
    if(err){
        console.log(err)
        return err
    }

    console.log('Arquivo removido!')
})