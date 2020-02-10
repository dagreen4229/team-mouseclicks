/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provider_profile', {
    User_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: 'provider_user',
        key: 'User_ID'
      }
    },
    First_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Office_Address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    City: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    State: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Phone_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Deleted: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'provider_profile'
  });
};
