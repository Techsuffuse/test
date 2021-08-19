const Sequelize = require('sequelize');
const db = require('../config/database');

const item = db.define('Item', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  seller: {
    type: Sequelize.STRING
  },
})

module.exports = Item;