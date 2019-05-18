/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Cliente = sequelize.define('cliente', {
    /*idcliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },*/
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dtregistro: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    timestamps: false  
  }, 
  {
    tableName: 'cliente'
  });

  return Cliente;
};
