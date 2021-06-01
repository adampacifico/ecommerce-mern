import dotenv from 'dotenv'
dotenv.config()

// const productsData = require('./data/Products').default;
// const connectDB = require('./config/db');
// const Product = require('./models/Product');
import Products from './data/Products.js'
import connectDB from './config/db.js'
import Product from './models/Product.js'



connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await  Product.insertMany(Products);

        console.log("data import success");

        process.exit();
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
} 

importData();