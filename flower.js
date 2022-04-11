const { DataTypes } = require("sequelize");
const connection = require("./connection");

const Flower = connection.define("Flower",{ 
    name: {
        type: DataTypes.STRING,
    }
}, {indexed: [{unique: true, fields: ["name"]}]});

module.exports = Flower;



indexed: [{unique: true, fields: ["name"]}]