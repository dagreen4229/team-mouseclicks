module.exports = function(sequelize, DataTypes) {
    return sequelize.define('appointments', {
      APT_ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      idClient_User: {
        type: DataTypes.INTEGER(11),
       allowNull: false
      },
      User_ID: {
        type: DataTypes.INTEGER(11),
       allowNull: false
      },
      Appointment_Date: {
        type: DataTypes.STRING(10),
       allowNull: false
      },
      Appointment_Time: {
        type: DataTypes.STRING(30),
       allowNull: false
      },
      Appointment_Notes: {
        type: DataTypes.STRING(45),
       allowNull: false
      },
      Deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: '0'
      }
    }, {
      tableName: 'appointments'
    });
  };