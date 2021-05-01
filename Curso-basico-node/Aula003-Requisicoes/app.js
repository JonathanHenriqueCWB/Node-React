// importando modulo http do node (sem express)
const http = require('http')

// criando um servidor
http.createServer(function(req, res){
    res.end("Criando um servidor HTTP com Node!")
}).listen(8080)

console.log('Server is running on port 8080')