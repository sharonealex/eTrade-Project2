const Category_Discount = require('./Category_Discount');
const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const Order_Item = require('./Order_Item');
const Address = require('./Address');
const Product_Cart = require('./ProductCart');
const Cart = require('./Cart');


User.hasMany(Address, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Address.belongsTo(User, {
  foreignKey: 'user_id',
});

Category.hasOne(Category_Discount, {
  foreignKey: 'discount_id',
  onDelete: 'CASCADE',
});

Category_Discount.belongsTo(Category, {
  foreignKey: 'discount_id',
});


Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


User.hasMany(Order, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

Order.hasMany(Order_Item, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE',
});

Order_Item.belongsTo(Order, {
  foreignKey: 'order_id',
});

User.hasOne(Cart, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
  foreignKey: 'user_id',
});


Product.belongsToMany(Cart, {
  through: ProductCart,
  foreignKey: 'product_id'
});


Cart.hasMany(Product, {
  through: ProductCart,
  foreignKey: 'cart_id'
});



module.exports = { 
  Address, 
  User,
  Category, 
  Category_Discount,
  Cart,
  Product,
  Order_Item,
  Order
};

