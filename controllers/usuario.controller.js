const db = require('../data/dbconfig.js');
const Usuarios = db.usuarios;

//POST: Criar uma Licenca
exports.create = (req, res) => {
    //Salvar dados no Mysql db
    Usuarios.create({
        login: req.body.login,
        senha: req.body.senha
    }).then( usuarios => {
        res.status(200).send(usuarios);
    }).catch( erro => {
        console.log(erro);
        res.status(400).send("Alguma coisa deu erro ao cadastrar o usuario", + erro);
    });
};

//GET: Traz lista de Usuarios
exports.findAll = (req, res) => {
    Usuarios.findAll().then( usuarios => {
        res.send(usuarios);
    }).catch( erro => {
        console.log(erro);
    });
};

//GET: Traz Cliente pelo Id
exports.findById = (req, res) => {
    Usuarios.findById(req.params.idusuario).then( usuarios => {
        res.send(usuarios);    
    }).catch( erro => {
        console.log(erro);
    });
}

//PUT: Atualiza o CLiente
exports.update = (req, res) => {
    const id = req.params.idusuario;
    Usuarios.update( 
        {
            login: req.body.login,
            senha: req.body.senha
        },
        { where: { idusuario: req.params.idusuario } }
    ).then( () => {
        res.status(200).send('O usuario foi atualizado com sucesso! id = ' + id);
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar atualizar o usuario, id = ' + id + 'Erro: '+ erro);
    });
};

//DELETE: Apaga o Cliente pelo Id
exports.delete = (req, res) => {
    const id = req.params.idusuario;
    Usuarios.destroy({
        where: { idusuario: req.params.idusuario }
    }).then ( () => {
        res.status(200).send('O usuario foi apagado com sucesso! id = ' + id);
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar apagar o usuario, id = ' + id + 'Erro: ' + erro);
    });
};