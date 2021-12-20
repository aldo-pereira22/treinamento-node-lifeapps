const http = require('http')
const port = 3000;


const server = http.createServer((req, resp)=> {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    resp.statusCode = 200;
    resp.setHeader('content-type', 'text/html')

    if(!name){
        resp.end('<h1> Preencha seu nome:<form method="GET"> <input type="text" name="name"/> <input type="submit" value="enviar"/></form>')
    }else {
        resp.end(`<h1> Seja Bem Vindo ${name} </h1>`)
    }
})


server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})