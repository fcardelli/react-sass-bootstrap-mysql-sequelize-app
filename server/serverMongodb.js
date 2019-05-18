// Importando os pacotes necessários
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

// Url de dados do Mongo DB
const mongoDB = 'mongodb://localhost:27017/clientes';

// Criando express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database 
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
() => { console.log('Banco de dados conectado') },
err => {console.log('Ocorreu um problema ao se conectar com o banco de dados ' + err)}
);

// Todas as rotas do Express
const clientesRoutes = require('../routes/Clientes.route');

// Capta data vinda no formato JSON
app.use(bodyParser.json());

// Habilita o Cors
app.use(cors());

// Configura o servidor na porta 4000
const port = process.env.port || 4000;

// Configuração de Rotas
app.use('/clientes', clientesRoutes);

// Iniciando o servidor Express
const server = app.listen(port, function(){
    console.log('Servidor está ativo na porta: ' + port);
});