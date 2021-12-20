const http = require('http')

const port = 3000;


const server = http.createServer((req, resp)=> {

    resp.statusCode = 200;
    resp.setHeader('content-type', 'text/html')
    resp.end('<h1> Olá, este é meu primeiro server com HTML</h1>')
})


server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})