const connection = require('./db.js')

connection.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Conectado com o BD!")
    }
})

//Criar a tabela usuario
let sql = 'CREATE TABLE IF NOT EXISTS usuario (user varchar(40), nome varchar(50) not null, data_nascimento date not null, cpf char(11) unique not null, email varchar(50) unique not null, senha varchar(20) not null, telefone char(11) unique not null, anfitriao bit not null, PRIMARY KEY(user))'
connection.query(sql, (err) => {
    if (err){
        console.log(err)
    } else {
        console.log("Tabela criada!")
    }
})

//Inserir usuario
let usuario1 = {
     user: 'guviega',
    nome: 'Gustavo Viega',
    data_nascimento: '12-23-2004',
    cpf: "05173805013",
    email: 'guviega@gmail.com',
    senha: 'abcd1234',
    telefone: '51999076062',
    anfitriao: '1'
}

sql = 'INSERT INTO usuario SET ?'
connection.query(sql, usuario1, (err) => {
    if (err){
        console.log(err)
    } else {
        console.log("Usuário gravado! ")
    }
})