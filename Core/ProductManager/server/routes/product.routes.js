const express = require('express');
const { handleCreateProduct, handleGetAllProducts, handleGetProductById, handleUpdateProductById, handleDeleteProductById } = require('../controllers/product.controller');

const router = express.Router();

//api/products will be add to all these routes via server.js

router.post('/', handleCreateProduct);

router.get('/', handleGetAllProducts);
router.get('/:id', handleUpdateProductById);
router.put('/:id', handleUpdateProductById);
router.delete('/:id', handleDeleteProductById);

module.exports = { productRouter : router };