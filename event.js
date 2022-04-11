const { DataTypes } = require("sequelize");
const connection = require("./connection");

const Event = connection.define("Event",{ 
    name: {
        type: DataTypes.STRING,
    }
}, {indexed: [{unique: true, fields: ["name"]}]});

module.exports = Event;