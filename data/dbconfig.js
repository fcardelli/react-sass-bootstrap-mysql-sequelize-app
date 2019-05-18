const dbconnection = require('./dbconnection.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbconnection.database, dbconnection.username, dbconnection.password, {
    host: dbconnection.host,
    dialect: dbconnection.dialect,
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: dbconnection.max,
        min: dbconnection.min,
        acquire: dbconnection.pool.acquire,
        idle: dbconnection.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// DB mapping to Models
db.usuarios = require('../models/Usuario.js')(sequelize, Sequelize);
db.licencas = require('../models/Licenca.js')(sequelize, Sequelize);
db.clientes = require('../models/Cliente.js')(sequelize, Sequelize);
db.playlists = require('../models/Playlist.js')(sequelize, Sequelize);
db.videos = require('../models/Video.js')(sequelize, Sequelize);

//DB relationships
db.clientes.belongsTo(db.usuarios, { foreignKey: {name: 'idusuario'}, onDelete: 'cascade'});
//db.usuarios.belongsTo(db.clientes);
db.clientes.belongsTo(db.licencas, {foreignKey: {name: 'idlicenca'}, onDelete: 'cascade'});
//db.licencas.belongsTo(db.clientes);
db.clientes.hasMany(db.playlists, {foreignKey:'idplaylist'});
db.playlists.hasMany(db.videos, {foreignKey:'idvideo'});
/*
db.clientes.belongsTo(db.usuarios);
db.clientes.hasOne(db.licencas);
db.clientes.hasMany(db.playlists);
db.playlists.belongsTo(db.clientes);
db.playlists.hasMany(db.videos);
db.videos.belongsTo(db.playlists);
*/

module.exports = db;