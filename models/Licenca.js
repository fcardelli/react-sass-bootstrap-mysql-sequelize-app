/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Licenca = sequelize.define('licenca', {
    /*idlicenca: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },*/
    chave: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    validade: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, 
  {
    timestamps: false  
  },
  {
    tableName: 'licenca'
  });
  return Licenca;
};
