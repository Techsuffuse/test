const Sequelize = require('sequelize');

module.exports = new Sequelize('Test', 'postgres', 'Lingling998', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 0,
  logging: false,

  pool: {
    max:5,
    min:0,
    acquire: 30000,
    idle: 10000
  },
});