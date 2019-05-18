// Importando pacotes 
const express = require('express');

// Usando o Express e as Rotas
const app = express();
const clientesRoute = express.Router();

// Modulo de Clientes sendo chamado como requerido e sendo importado
let clienteModel = require('../models/Cliente');

// Lista de Clientes
clientesRoute.route('/').get(function (req, res){
    clienteModel.find(function (err, clientes){
        if(err){
            console.log(err);
        }else {
            res.json(clientes);
        }
    });
});

// Adicionando um novo Cliente
clientesRoute.route('/adiciona').post(function (req, res){
    let cliente = new clienteModel(req.body);
    cliente.save()
    .then(cliente => {
        res.status(200).json({'cliente': 'O Cliente foi adicionado com sucesso'});
    })
    .catch(err => {
        res.status(400).send("Alguma coisa deu erro ao cadastrar o cliente")
    });
});

// Carregando os detalhes do Cliente pelo Cliente ID
clientesRoute.route('/detalhes/:id').get(function(req, res){
    let id = req.params.id;
    clienteModel.findById(id, function(err, cliente){
        res.json(cliente);
    });
});

// Atualiza os detalhes do Cliente
clientesRoute.route('/atualiza/:id').post(function (req,res){
    clienteModel.findById(req.params.id, function (err, cliente){
        if (!cliente){
            return next(new Error('Não foi possível localizar um registro com esse id de cliente'));
        }else {
            cliente.nome = req.body.nome;
            cliente.sobrenome = req.body.sobrenome;
            cliente.email = req.body.email;
            cliente.telefone = req.body.telefone;
            cliente.save().then(cliente => {
                res.json('O cliente foi atualizado com sucesso');
            })
            .catch(err => {
                res.status(400).send("Não foi possível atualizar o cliente");
            });
        }
    });
});

// Apagar um  registro de Cliente
clientesRoute.route('/apaga/:id').get(function(req, res){
    clienteModel.findByIdAndRemove({ _id: req.params.id }, function (err, cliente){
        if (err) res.json(err);
        else res.json('O Cliente foi removido com sucesso.')
    });
});

module.exports = clientesRoute;
