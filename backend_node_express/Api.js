//Conf dependencias do express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var HELLO =[
    {'msg': 'Hello Express'}
];

function getHello(){
    return HELLO;
}

//##### INFORMA QUE API TRABALHARÁ COM JSON #####
app.use(bodyParser.json());


//Primeira função fará requisição do getHello implementado aqui mesmo
//A segunda é configurada para trabalharo com as rotas e controller
app.get('/', function(req, res){
    res.send(getHello());
})

const userRoute = require('./src/routes/user-route');
app.use('/users', userRoute);

//### DEFINE A PORTA ONDE O SERVIDOR IRÁ RODAR #####
app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000');
});


//API >> ROTA >> CONTROLLER