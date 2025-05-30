
import express from 'express'

import { getHomePage, getProducts, getCart, getCheckout, getProductDetails} from '../controllers/products.js'

const router = express.Router()

router.get('/', getHomePage)
router.get('/products', getProducts)
router.get('/cart', getCart)
router.get('/checkout', getCheckout)
router.get('/product', getProductDetails)

export default router
