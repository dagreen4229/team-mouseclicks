'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "appointments", deps: []
 * addColumn "Deleted" to table "client_profile"
 * changeColumn "idClient_User" on table "client_user"
 * changeColumn "User_ID" on table "provider_profile"
 * changeColumn "Phone_number" on table "client_profile"
 * changeColumn "Gender" on table "client_profile"
 * changeColumn "DOB" on table "client_profile"
 * changeColumn "idClient_User" on table "client_profile"
 *
 **/

var info = {
    "revision": 8,
    "name": "added appointment table",
    "created": "2020-02-09T23:06:44.597Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "appointments",
            {
                "APT_ID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "APT_ID",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "idClientUser": {
                    "type": Sequelize.STRING(45),
                    "field": "idClientUser",
                    "allowNull": false
                },
                "User_ID": {
                    "type": Sequelize.STRING(45),
                    "field": "User_ID",
                    "allowNull": false
                },
                "Appointment_Date": {
                    "type": Sequelize.STRING(10),
                    "field": "Appointment_Date",
                    "allowNull": false
                },
                "Appointment_Time": {
                    "type": Sequelize.STRING(6),
                    "field": "Appointment_Time",
                    "allowNull": false
                },
                "Appointment_Notes": {
                    "type": Sequelize.INTEGER(10),
                    "field": "Appointment_Notes",
                    "allowNull": false
                },
                "Deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "Deleted",
                    "defaultValue": "0",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "addColumn",
        params: [
            "client_profile",
            "Deleted",
            {
                "type": Sequelize.BOOLEAN,
                "field": "Deleted",
                "defaultValue": "0",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "client_user",
            "idClient_User",
            {
                "type": Sequelize.INTEGER(11),
                "field": "idClient_User",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "provider_profile",
            "User_ID",
            {
                "type": Sequelize.INTEGER(11),
                "field": "User_ID",
                "references": {
                    "model": "provider_user",
                    "key": "User_ID"
                },
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "client_profile",
            "Phone_number",
            {
                "type": Sequelize.INTEGER(10),
                "field": "Phone_number",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "client_profile",
            "Gender",
            {
                "type": Sequelize.STRING(6),
                "field": "Gender",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "client_profile",
            "DOB",
            {
                "type": Sequelize.STRING(10),
                "field": "DOB",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "client_profile",
            "idClient_User",
            {
                "type": Sequelize.INTEGER(11),
                "field": "idClient_User",
                "references": {
                    "model": "client_user",
                    "key": "idClient_User",
                    "autoIncrement": true
                },
                "primaryKey": true,
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
