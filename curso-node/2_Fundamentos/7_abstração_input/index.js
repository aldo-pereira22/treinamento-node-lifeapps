const inquirer = require('inquirer')

inquirer.prompt([{
    name:'p1',
    message:' Qual a primeira nota ?'
},{
    name:'p2',
    message:'Qual a segunda nota ?'

}
]).then((answares) => {
    console.log(answares)
    const media = (parseInt(answares.p1) + parseInt(answares.p2)) / 2

    console.log("A média é: "+ media)
}).catch( err => console.log(err))