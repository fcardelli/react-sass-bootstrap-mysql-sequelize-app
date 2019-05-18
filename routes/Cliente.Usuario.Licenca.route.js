module.exports = function(app) {
    const clientesRel = require('../controllers/cliente.usuario.licenca.controller.js');

    //Libera acesso externo para utilização dos roteamentos que passam pelo Cors
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // Cria um novo cliente
    app.post('/clientesRelacionamento', clientesRel.create);

    // Traz todos os clientes
    app.get('/clientesRelacionamento', clientesRel.findAll);

    // Traz um cliente pelo id
    app.get('/clientesRelacionamento/:id', clientesRel.findById);

    // Atualiza o cliente pelo id
    app.put('/clientesRelacionamento/:id', clientesRel.update);

    // Apaga um cliente pelo id
    app.delete('/clientesRelacionamento/:id', clientesRel.delete);
}
