import express from 'express'
import { getAllProducts, getProductById } from '../controller/productControllers.js'

const router = express.Router()

// fetch ALL PRODUCTS FROM DATABASE
router.get('/', getAllProducts)


// fetch a PRODUCTS with id FROM DATABASE
router.get('/:id', getProductById)

export default router;