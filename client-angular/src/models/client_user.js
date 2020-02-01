/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_user', {
    idClient_User: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    EmailAddress: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'client_user'
  });
};
