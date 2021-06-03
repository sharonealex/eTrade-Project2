const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for category.
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING
      },
    password: {
      type: DataTypes.STRING
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
      },
      phone_number: {
        type: DataTypes.INTEGER
      },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    freezeTableName : true,
    modelName: 'user'
  }
);

module.exports = User;
