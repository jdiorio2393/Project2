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

// module.exports = function(sequelize, DataTypes) {
//     var Forum = sequelize.define("Forum", {
//         post_title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//               len: [10]
//             }            
//         },
//         post_body: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//             validate: {
//                 len: [30]
//             }
//         },
//         up_vote: {
//           type: DataTypes.INTEGER,
//           defaultValue: 0
//         },
//         down_vote: {
//           type: DataTypes.INTEGER,
//           defaultValue: 0
//         }
//     });

//     Forum.associate = function(models) {
//         // We're saying that a forum post should belong to an Author
//         // A Post can't be created without an Author due to the foreign key constraint
//         Forum.belongsTo(models.Author, {
//           foreignKey: {
//             allowNull: false
//           }
//         });
//     };

//     Forum.associate = function(models) {
//       // We're saying that a forum post should belong to an Author
//       // A Post can't be created without an Author due to the foreign key constraint
//       Forum.belongsTo(models.Category, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//   };

//     Forum.associate = function(models) {
//       // Associating forum post with responses
//       // When a post is deleted, also deletes any associated response
//       Forum.hasMany(models.Response, {
//         onDelete: "cascade"
//       });
//     };

//     return Forum;
// }
