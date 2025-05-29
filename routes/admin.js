import express from 'express'
import { getAddProduct, postAddProduct } from '../controllers/products.js'

const router = express.Router()

router.get('/admin/add-product', getAddProduct)

router.post('/admin/add-product', postAddProduct)


export default router 