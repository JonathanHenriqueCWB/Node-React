//Conf dependencias do express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//##### AARRAY DE USUARIOS #####
var USERS = [
    {"id": 1, 'username': 'zero', 'password': 'Zero@1234' },
    {"id": 2, 'username': 'mario', 'password': 'Mario@1234' }
];
var HELLO =[
    {'msg': 'Hello Express'}
];


//##### FUNÇÃO QUE RETORNARA OS ARRAYS #####
function getHello(){
    return HELLO;
}
function getUsers(){
    return USERS;
}


//##### INFORMA QUE API TRABALHARÁ COM JSON #####
app.use(bodyParser.json());


//##### REQUISIÇÕES #####
//Requisiçoes (GET/POST...), por padrão quando esse arquivo for chamado
//será renderizado essa requisição, por o mesmo foi definido na raiz '/'
app.get('/', function(req, res){
    res.send(getHello());
})
app.get('/users', function(req, res){
    res.send(getUsers());
})


//### DEFINE A PORTA ONDE O SERVIDOR IRÁ RODAR #####
app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000');
});