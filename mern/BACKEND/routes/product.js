const express = require('express');
const router = express.Router();

const { isAdmin, isAuthenticated, isSgnedIn } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')
const { getProductById, createProduct, getProduct, photo, updateProduct, removeProduct, getAllProducts, getAllUniqueCategories } = require('../controllers/product')

//NOTE : all params

router.param('userId', getUserById)
router.param('productId', getProductById)

//NOTE : actual routes
router.post('/product/create/:userId', isSgnedIn, isAuthenticated, isAdmin, createProduct)

//NOTE : read routes
router.get('/product/:productId', getProduct)
router.get('/product/photo/:productId', photo)

//NOTE : update and delete routes
router.put('/product/:productId/:userId', isSgnedIn, isAuthenticated, isAdmin, updateProduct)
router.delete('/product.:productId/:userId', isSgnedIn, isAuthenticated, isAdmin, removeProduct)

//NOTE : listing route with limitednumber
router.get('/products', getAllProducts)

//NOTE : listing categories
router.get('/products/categories', getAllUniqueCategories)

module.exports = router;