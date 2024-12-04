const express = require('express');
const router = express.Router();
const { CreatProducts, getProducts, getProductsById, UpdateProducts, DeleteProductsByid } = require('../controllers/ProductController.js');

// Define routes
router.post('/', CreatProducts);
router.get('/', getProducts); 
router.get('/:id', getProductsById); 
router.put('/:id', UpdateProducts); 
router.delete('/:id', DeleteProductsByid);

module.exports = router;
