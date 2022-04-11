const { Sequelize } = require("sequelize");

const connection = new Sequelize('sqlite::memory:');;

module.exports = connection;