//const Sequelize = require('sequelize')
const db = require('../data/dbconfig.js');
const Clientes = db.clientes,
      Usuario = db.usuarios,
      Licenca = db.licencas;
      //Op = Sequelize.Op;

//POST: Criar um Cliente
exports.create = (req, res, next) => {
    //Salvar dados no Mysql db
    Clientes.create({
        nome: req.body.nome,
        email: req.body.email,
        dtregistro: req.body.dtregistro,
        usuario: {
            login: req.body.login,
            senha: req.body.senha
        },
        licenca: {
            chave: req.body.chave,
            validade: req.body.validade,
            dtvalidade: req.body.dtvalidade
        }
    },
    { 
        include: [ Usuario, Licenca] 
    }).then( cliente => {
        //res.send(clientes);
        res.status(200).send(cliente);//json({'Cliente / Usuario / Licenca': 'O Cliente foi adicionado com sucesso ' + clientes});
    }).catch( erro => {
        //console.log(erro);
        res.status(400).send('Alguma coisa deu erro ao cadastrar o cliente. ' + id + 'Erro: ' + erro);
    });
};

//GET: Traz lista de Clientes / Usuario / Licencas
exports.findAll = (req, res, next) => {
    //const idusuario = req.params.idusuario;
    //const idlicenca = req.params.idlicenca;

    Clientes.findAll({
        include: [{
            model: Usuario,
            where: Usuario.idusuario 
        },
        {
            model: Licenca,
            where: Licenca.idlicenca
        }]
    }).then( clientes => {
        res.send(clientes);
    }).catch( erro => {
        console.log(erro);
    });
};

//GET: Traz Cliente pelo Id
exports.findById = (req, res, next) => {
    //const id = req.params.id;
    Clientes.findById(req.params.id, { 
        include: [
            {   
                model: Usuario,
                where: Usuario.id
            },
            {
                model: Licenca,
                where: Licenca.id
            }
        ]
    }).then( cliente => {
        res.send(cliente);    
    }).catch( erro => {
        console.log(erro);
    });
}

//PUT: Atualiza o CLiente
exports.update = (req, res, next) => {
    const id = req.params.id;
    Clientes.findById(id, 
    {
        include: [
            {   
                model: Usuario,
                where: Usuario.id
            },
            {
                model: Licenca,
                where: Licenca.id
            }
        ]
    }).then( cliente => {
        //console.log(cliente.usuario);
        Promise.all([
            cliente.updateAttributes({
                nome: req.body.nome,
                email: req.body.email,
                dtregistro: req.body.dtregistro
            }),
            cliente.usuario.updateAttributes ({
                login: req.body.login,
                senha: req.body.senha
            }),
            cliente.licenca.updateAttributes ({
                chave: req.body.chave,
                validade: req.body.validade,
                dtvalidade: req.body.dtvalidade
            })
        ]).catch( erro => {
            console.log( erro );
        })
    }).then( () => {
        res.status(200).send('O cliente foi atualizado com sucesso:');
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar atualizar o cliente. Erro: ' + erro);
    });
};

//DELETE: Apaga o Cliente pelo Id
exports.delete = (req, res, next) => {
    const id = req.params.id;
    Clientes.destroy({
        where: { id: id }
    }).then ( () => {
        res.status(200).send('O cliente foi apagado com sucesso.');
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar apagar o cliente, id = ' + id + 'Erro: ' + erro);
    });
};