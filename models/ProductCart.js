const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Product and Cart as a junction table.
class ProductCart extends Model { }

ProductCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cart',
        key: 'id',
      },
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productCart'
  }
);

module.exports = ProductCart;
