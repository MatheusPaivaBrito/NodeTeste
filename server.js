const http = require('http')

const server = http.createServer((req, res)  => {
    if(req.url == '/'){
        res.end('<h1>Casa</h1>')
    }

    if(req.url == '/Home'){
        res.end('<h1>Sem Criatividade</h1>')
    }

    res.end('<h1>Fora da casa</h1>')

})

server.listen(3001, 'localhost', () => {
    console.log('Servidor em pé em : http://localhost:3001')
    console.log('para derrubar o sevidor: crtl + c')
})