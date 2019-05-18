/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Usuario = sequelize.define('usuario', {
    /*idusuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },*/
    login: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  },
  {
    timestamps: false  
  },  
  {
    tableName: 'usuario'
  });
  return Usuario;
};
