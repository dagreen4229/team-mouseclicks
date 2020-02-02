'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "GENDER" from table "client_profile"
 * addColumn "Gender" to table "client_profile"
 *
 **/

var info = {
    "revision": 6,
    "name": "Migration2",
    "created": "2020-02-02T19:05:24.729Z",
    "comment": ""
};

var migrationCommands = 
    {
        fn: "addColumn",
        params: [
            "client_profile",
            "Gender",
            {
                "type": Sequelize.STRING,
                "field": "Gender",
                "allowNull": false
            }
        ]
    }
;

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
