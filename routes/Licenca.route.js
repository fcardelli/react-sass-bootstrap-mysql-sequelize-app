module.exports = function(app) {
    const licencas = require('../controllers/licenca.controller.js');

    // Cria uma nova licenca
    app.post('/licencas', licencas.create);

    // Traz todos as licencas
    app.get('/licencas', licencas.findAll);

    // Traz uma licensa pelo licensaid
    app.get('/licencas/:idlicenca', licencas.findById);

    // Atualiza a licensa pelo licensaid
    app.put('/licencas/:idlicenca', licencas.update);

    // Apaga um licensa pelo licensaid
    app.delete('/licencas/apaga/:idlicenca', licencas.delete);
}