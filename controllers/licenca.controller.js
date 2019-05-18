const db = require('../data/dbconfig.js');
const Licencas = db.licencas;

//POST: Criar uma Licenca
exports.create = (req, res) => {
    //Salvar dados no Mysql db
    Licencas.create({
        chave: req.body.chave,
        validade: req.body.validade,
        dtvalidade: req.body.dtvalidade,
    }).then( licencas => {
        res.status(200).send(licencas);
    }).catch( erro => {
        console.log(erro);
        res.status(400).send("Alguma coisa deu erro ao cadastrar a licenca" + erro);
    });
};

//GET: Traz lista de licencas
exports.findAll = (req, res) => {
    Licencas.findAll().then( licencas => {
        res.send(licencas);
    }).catch( erro => {
        console.log(erro);
    });
};

//GET: Traz Cliente pelo Id
exports.findById = (req, res) => {
    Licencas.findById(req.params.idlicenca).then( licencas => {
        res.send(licencas);    
    }).catch( erro => {
        console.log(erro);
    });
}

//PUT: Atualiza o CLiente
exports.update = (req, res) => {
    const id = req.params.idlicenca;
    Licencas.update( 
        {
            chave: req.body.chave,
            validade: req.body.validade,
            dtvalidade: req.body.dtvalidade
        },
        { where: { idlicenca: req.params.idlicenca } }
    ).then( () => {
        res.status(200).send('A licensa foi atualizada com sucesso! id = ' + id);
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar atualizar a licenca, id = ' + id + 'Erro: ' + erro);
    });
};

//DELETE: Apaga o Cliente pelo Id
exports.delete = (req, res) => {
    const id = req.params.idlicenca;
    Licencas.destroy({
        where: { id: req.params.idlicenca }
    }).then ( () => {
        res.status(200).send('A licenca foi apagada com sucesso! id = ' + id);
    }).catch( erro => {
        res.status(400).send('Alguma coisa deu errado ao tentar apagar a licensa, id = ' + id + 'Erro: ' + erro);
    });
};