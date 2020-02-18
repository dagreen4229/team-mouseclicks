/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    Email_Address: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    userType: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    Admin: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    Deleted: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    token: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
