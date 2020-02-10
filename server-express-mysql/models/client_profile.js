/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_profile', {
    idClient_User: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_user',
        key: 'idClient_User', 
        autoIncrement: true
      }
    },
    First_Name: {
      type: DataTypes.STRING(45),
     allowNull: false
    },
    Last_Name: {
      type: DataTypes.STRING(45),
     allowNull: false
    },
    DOB: {
      type: DataTypes.STRING(10),
     allowNull: false
    },
    Gender: {
      type: DataTypes.STRING(6),
     allowNull: false
    },
    Phone_number: {
      type: DataTypes.INTEGER(10),
     allowNull: false
    },
    Street_Address: {
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
    Profile_Pic: {
      type: DataTypes.STRING(45),
     allowNull: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'client_profile'
  });
};
