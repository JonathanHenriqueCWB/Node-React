'use-strict'

var USERS = [
    {"id": 1, 'username': 'zero', 'password': 'Zero@1234' },
    {"id": 2, 'username': 'mario', 'password': 'Mario@1234' },
    {"id": 3, 'username': 'luigi', 'password': 'Luigi@1234' }
];

function getUsers(){
    return USERS;
}

exports.get = async(rec, res, next) => {
    console.log('Entrou no controller')
    res.send(getUsers());
};