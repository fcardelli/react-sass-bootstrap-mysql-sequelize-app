/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Video = sequelize.define('video', {
    /*idvideo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },*/
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    caminho: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  },
  {
    timestamps: false  
  },  
  {
    tableName: 'video'
  });
  return Video;
};
