const sequelize = require('../config/connection');
const Category_Discount = require('../models/Category_Discount');
const Category = require('../models/Category');
const Product = require('../models/Product');

const productSeedData = require('./productSeedData.json');
const categorySeedData = require('./categorySeedData.json')
const categoryDiscountSeedData = require('./categoryDiscountSeedData.json')

const seedDatabase = async()=>{

    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await Category_Discount.bulkCreate(categoryDiscountSeedData);
    console.log('\n----- DISCOUNT TABLE SEEDED -----\n');
    await Category.bulkCreate(categorySeedData);
    console.log('\n----- CATEGORY TABLE SEEDED -----\n');
    await Product.bulkCreate(productSeedData);
    console.log('\n----- PRODUCT TABLE SEEDED -----\n');
    
    process.exit(0);
}

seedDatabase();