const sequelize = require('../config/connection');
const Category_Discount = require('../models/Category_Discount');
const Category = require('../models/Category');
const Product = require('../models/Product');

const productSeedData = require('./productSeedData.json');
const categorySeedData = require('./categorySeedData.json')
const categoryDiscountSeedData = require('./categoryDiscountSeedData.json')

const seedDatabase = async()=>{

    await sequelize.sync({force: true});

    await Category_Discount.bulkCreate(categoryDiscountSeedData);
    await Category.bulkCreate(categorySeedData);
    await Product.bulkCreate(productSeedData);
    
    process.exit(0);
}

seedDatabase();