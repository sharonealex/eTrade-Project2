const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { beforeCreate } = require('./Category_Discount');

// Create a new Sequelize model for User.
class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [6, 15],
      }
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.BIGINT
    },
  },
 {
    hooks: {
        async beforeCreate(newUserPassword) {
            newUserPassword.password = await bcrypt.hash(newUserPassword.password, 10);
            return newUserPassword;
        },
    },
 
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'user'
  }
);

module.exports = User;
