'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "client_user", deps: []
 * createTable "provider_user", deps: []
 * createTable "client_profile", deps: [client_user]
 * createTable "provider_profile", deps: [provider_user]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-02-02T18:49:31.589Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "client_user",
            {
                "idClient_User": {
                    "type": Sequelize.INTEGER(11),
                    "field": "idClient_User",
                    "primaryKey": true,
                    "allowNull": false
                },
                "Username": {
                    "type": Sequelize.STRING(45),
                    "field": "Username",
                    "unique": true,
                    "allowNull": false
                },
                "Password": {
                    "type": Sequelize.STRING(45),
                    "field": "Password",
                    "allowNull": false
                },
                "EmailAddress": {
                    "type": Sequelize.STRING(45),
                    "field": "EmailAddress",
                    "unique": true,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "provider_user",
            {
                "User_ID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "User_ID",
                    "primaryKey": true,
                    "allowNull": false
                },
                "Username": {
                    "type": Sequelize.STRING(45),
                    "field": "Username",
                    "unique": true,
                    "allowNull": false
                },
                "Password": {
                    "type": Sequelize.STRING(45),
                    "field": "Password",
                    "allowNull": false
                },
                "Email_Address": {
                    "type": Sequelize.STRING(45),
                    "field": "Email_Address",
                    "unique": true,
                    "allowNull": false
                },
                "Admin": {
                    "type": Sequelize.INTEGER(4),
                    "field": "Admin",
                    "defaultValue": "0",
                    "allowNull": false
                },
                "Deleted": {
                    "type": Sequelize.INTEGER(4),
                    "field": "Deleted",
                    "defaultValue": "0",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "client_profile",
            {
                "idClient_User": {
                    "type": Sequelize.INTEGER(11),
                    "field": "idClient_User",
                    "references": {
                        "model": "client_user",
                        "key": "idClient_User"
                    },
                    "primaryKey": true,
                    "allowNull": false
                },
                "First_Name": {
                    "type": Sequelize.STRING(45),
                    "field": "First_Name",
                    "allowNull": false
                },
                "Last_Name": {
                    "type": Sequelize.STRING(45),
                    "field": "Last_Name",
                    "allowNull": false
                },
                "DOB": {
                    "type": Sequelize.DATEONLY,
                    "field": "DOB",
                    "allowNull": false
                },
                "Phone_number": {
                    "type": Sequelize.STRING(10),
                    "field": "Phone_number",
                    "allowNull": false
                },
                "Street_Address": {
                    "type": Sequelize.STRING(45),
                    "field": "Street_Address",
                    "allowNull": false
                },
                "City": {
                    "type": Sequelize.STRING(45),
                    "field": "City",
                    "allowNull": false
                },
                "State": {
                    "type": Sequelize.STRING(45),
                    "field": "State",
                    "allowNull": false
                },
                "Profile_Pic": {
                    "type": Sequelize.STRING(45),
                    "field": "Profile_Pic",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "provider_profile",
            {
                "User_ID": {
                    "type": Sequelize.INTEGER(11),
                    "field": "User_ID",
                    "references": {
                        "model": "provider_user",
                        "key": "User_ID"
                    },
                    "primaryKey": true,
                    "allowNull": false
                },
                "First_name": {
                    "type": Sequelize.STRING(45),
                    "field": "First_name",
                    "allowNull": false
                },
                "Last_name": {
                    "type": Sequelize.STRING(45),
                    "field": "Last_name",
                    "allowNull": false
                },
                "Office_Address": {
                    "type": Sequelize.STRING(45),
                    "field": "Office_Address",
                    "allowNull": false
                },
                "City": {
                    "type": Sequelize.STRING(45),
                    "field": "City",
                    "allowNull": false
                },
                "State": {
                    "type": Sequelize.STRING(45),
                    "field": "State",
                    "allowNull": false
                },
                "Phone_number": {
                    "type": Sequelize.STRING(45),
                    "field": "Phone_number",
                    "allowNull": false
                },
                "Deleted": {
                    "type": Sequelize.INTEGER(4),
                    "field": "Deleted",
                    "defaultValue": "0",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
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
