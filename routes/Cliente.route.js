module.exports = function(app) {
    const clientes = require('../controllers/cliente.controller.js');

    // Cria um novo cliente
    app.post('/clientes', clientes.create);

    // Traz todos os clientes
    app.get('/clientes', clientes.findAll);

    // Traz um cliente pelo clienteid
    app.get('/clientes/:idcliente', clientes.findById);

    // Atualiza o cliente pelo clienteid
    app.put('/clientes/:idcliente', clientes.update);

    // Apaga um cliente pelo clienteid
    app.delete('/clientes/apaga/:idcliente', clientes.delete);
}
