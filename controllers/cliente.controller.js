const db = require('../data/dbconfig.js');
const Clientes = db.clientes;

//POST: Criar um Cliente
exports.create = (req, res) => {
    //Salvar dados no Mysql db
    Clientes.create({
        nome: req.body.nome,
        email: req.body.email,
        idusuario: req.body.idusuario,
        idlicenca: req.body.idlicenca,
        dtregistro: req.body.dtregistro
    }).then( clientes => {
        res.send(clientes);
        res.status(200).json({'cliente': 'O Cliente foi adicionado com sucesso'});
    }).catch( erro => {
        console.log(erro);
        res.status(400).send('Alguma coisa deu erro ao cadastrar o cliente. ' + 'Erro: ' + erro);
    });
};

//GET: Traz lista de Clientes
exports.findAll = (req, res) => {
    Clientes.findAll().then( clientes => {
        res.send(clientes);
    }).catch( erro => {
        console.log(erro);
    });
};

//GET: Traz Cliente pelo Id
exports.findById = (req, res) => {
    Clientes.findById(req.params.idcliente).then( clientes => {
        res.send(clientes);    
    }).catch( erro => {
        console.log(erro);
    });
}

//PUT: Atualiza o CLiente
exports.update = (req, res) => {
    const id = req.params.idcliente;
    Clientes.update( 
        {
            nome: req.body.nome, 
            email: req.body.email,
            idusuario: req.body.idusuario,
            idlicenca: req.body.idlicenca, 
            dtregistro: req.body.dtregistro
        },
        { where: { idcliente: req.params.idcliente } }
    ).then( () => {
        res.status(200).send('O cliente foi atualizado com sucesso! id = ' + id);
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar atualizar o cliente, id = ' + id + 'Erro: ' + erro);
    });
};

//DELETE: Apaga o Cliente pelo Id
exports.delete = (req, res) => {
    const id = req.params.idcliente;
    Clientes.destroy({
        where: { idcliente: req.params.idcliente }
    }).then ( () => {
        res.status(200).send('O cliente foi apagado com sucesso! id = ' + id);
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar apagar o cliente, id = ' + id);
    });
};