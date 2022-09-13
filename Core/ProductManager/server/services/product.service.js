const { Product } = require('../models/products.model');

//CRUD
//Create
const createProduct = async (data) => {
    console.log('service: createProduct');

    //uses mode to interact w/ db
    const product = await Product.create(data);

    return product;
};

//Read
//Read All
const getAllProducts = async () => {
    const products = await Product.find();

    return products;
}

//Read One
const getProductById = async (id) => {
    const product = await Product.findById(id);

    return product;
}

//Update
const updateProductById = async (id, data) => {
    const product = await Product.findByIdAndUpdate(id, data, {
        //rerun validations
        runValidators: true,
        //return the updated product
        new: true
    });
    return product;
}

//Delete
const deleteProductById = async (id) => {
    const product = await Product.findByIdAndDelete(id);

    return product;
}

module.exports = { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById };