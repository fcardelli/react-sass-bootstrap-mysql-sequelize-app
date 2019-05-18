// Importando os pacotes necessários
//path = require('path')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Configurando o bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
const db = require('../data/dbconfig.js');

//Sincronizando o Sequelize com o bd Mysql
/*db.sequelize.sync().then( () => {
    console.log('Sequelize sincrozinado.');
}).catch( erro => {
    console.log(erro);
});*/
db.sequelize.sync({force: true}).then(() => {
    console.log(`Drop and Resync with { force: true }`);
});


//Define o roteador
require('../routes/Cliente.route.js')(app);
require('../routes/Licenca.route.js')(app);
require('../routes/Usuario.route.js')(app);
// Rotas relacionadas
require('../routes/Cliente.Usuario.Licenca.route.js')(app);


// Habilita o Cors
app.use(cors());

// Configura o servidor na porta 4000
const port = process.env.port || 4000;

// Configuração de Rotas
//app.use('/clientes', clientesRoutes);

// Iniciando o servidor Express
const server = app.listen(port, function(){
    console.log('Servidor está ativo na porta: ' + port);
});

/*db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });
*/

//cors = require('cors')
//_mysql = require('mysql');

// Parametros de configuração do mysql
/*const mysql = _mysql.createConnection({
    host     : 'localhost',
    //port     : '8080',
    user     : 'root',
    password : '',
    database : 'tvdentesdb'
});
*/
// Criando express server


// Connect MySql Database 
/*
mysql.connect( (erro) => {
    if(erro) return console.log(erro);
    console.log("Banco MySql foi conectado com sucesso!")
});
*/
// Todas as rotas do Express
/*
const clientesRoutes = require('../routes/Clientes.route');
*/
// Configurando o bodyParser
/*
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
*/

// Habilita o Cors
/*
app.use(cors());

// Configura o servidor na porta 4000
const port = process.env.port || 4000;

// Configuração de Rotas
app.use('/clientes', clientesRoutes);

// Iniciando o servidor Express
const server = app.listen(port, function(){
    console.log('Servidor está ativo na porta: ' + port);
});
*/