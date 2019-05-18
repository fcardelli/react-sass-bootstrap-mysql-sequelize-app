/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Playlist = sequelize.define('playlist', {
    /*idplaylist: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },*/
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },
  {
    timestamps: false  
  },  
  {
    tableName: 'playlist'
  });
  return Playlist;
};
