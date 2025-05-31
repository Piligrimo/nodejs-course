
import express from 'express'

import { getHomePage, getProducts, getCart, getCheckout, getProductDetails, getOrders, addToCart} from '../controllers/shop.js'

const router = express.Router()

router.get('/', getHomePage)
router.get('/products', getProducts)
router.get('/cart', getCart)
router.post('/add-to-cart', addToCart)
router.get('/orders', getOrders)
router.get('/checkout', getCheckout)
router.get('/products/:id', getProductDetails)

export default router
