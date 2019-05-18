module.exports = function(app) {
    const usuarios = require('../controllers/usuario.controller.js');

    // Cria uma nova licenca
    app.post('/usuarios', usuarios.create);

    // Traz todos as usuarios
    app.get('/usuarios', usuarios.findAll);

    // Traz uma licensa pelo licensaid
    app.get('/usuarios/:idusuario', usuarios.findById);

    // Atualiza a licensa pelo licensaid
    app.put('/usuarios/:idusuario', usuarios.update);

    // Apaga um licensa pelo licensaid
    app.delete('/usuarios/apaga/:idusuario', usuarios.delete);
}