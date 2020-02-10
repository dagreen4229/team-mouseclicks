'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "createdAt" from table "client_profile"
 * removeColumn "updatedAt" from table "client_profile"
 * removeColumn "createdAt" from table "client_user"
 * removeColumn "updatedAt" from table "client_user"
 * removeColumn "createdAt" from table "provider_profile"
 * removeColumn "updatedAt" from table "provider_profile"
 * removeColumn "createdAt" from table "provider_user"
 * removeColumn "updatedAt" from table "provider_user"
 * changeColumn "User_ID" on table "provider_user"
 *
 **/

var info = {
    "revision": 7,
    "name": "User_ID_AI",
    "created": "2020-02-08T04:22:59.533Z",
    "comment": ""
};

var migrationCommands = [{

        fn: "changeColumn",
        params: [
            "provider_user",
            "User_ID",
            {
                "type": Sequelize.INTEGER(11),
                "field": "User_ID",
                "primaryKey": true,
                "autoIncrement": true,
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
