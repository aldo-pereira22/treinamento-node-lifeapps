const http = require('http')

const port = 3000;


const server = http.createServer((req, resp)=> {
    resp.write("Oi http")
    resp.end()
})


server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})