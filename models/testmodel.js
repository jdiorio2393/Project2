const Sequelize = require('sequelize');
const db = require('../config/database');

var Forum = db.define("Test", {
  post_title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }            
  },
  post_body: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
          len: [1,3000]
      }
  },
  post_author: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
        len: [30]
    }
  },
  up_vote: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  down_vote: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Forum