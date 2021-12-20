const http = require('http')
const fs = require('fs');
const url = require('url')

const port = 3000;

const server = http.createServer((req, resp)=> {
    
    const q = url.parse(req.url, true)

    const filename = q.pathname.substring(1)


    if(filename.includes('html')){
        if(fs.existsSync(filename)){
            fs.readFile(filename, (err, data) => {
                resp.writeHead(200, {'content-type': 'text/html'})
                resp.write(data)
                return resp.end()
            })
        }
    }else {
        fs.readFile('404.html', (err, data) => {
            resp.writeHead(404, {'content-type': 'text/html'})
            resp.write(data)
            return resp.end()
        })
    }

})


server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})