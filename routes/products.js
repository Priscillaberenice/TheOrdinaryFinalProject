const express = require('express')
const router = express.Router()
const {getProducts, createProduct, getOneProduct, deleteProduct, updateProduct} = require('../controllers/products')

router.get('/', getProducts)
router.post('/', createProduct)
router.get('/:id', getOneProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

module.exports = router