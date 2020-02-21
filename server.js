const http = require('http')

const server = http.createServer ((req, res) => {
    const resp = []
    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = '<h1>Contato</h1>'

    res.end(resp[req.url])
})

server.listen(3001, 'localhost', () => {
    console.log('Servido de pé em http://localhost:3001')
    console.log('pra desligar o servidor : ctrl + c')
})

  //if(req.url == '/'){
    //res.end('<h1>Casa</h1>')
    //}

    //if(req.url == '/Home'){
    //res.end('<h1>Sem Criatividade</h1>')
    //}

    //res.end('<h1>Fora da casa</h1>')
