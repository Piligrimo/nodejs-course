import express from 'express'
import { getAddProduct, getEditProduct, postAddProduct, getAdminProductList, postEditProduct } from '../controllers/admin.js'

const router = express.Router()

router.get('/admin/add-product', getAddProduct)
router.get('/admin/edit-product/:id', getEditProduct)
router.get('/admin/products', getAdminProductList)

router.post('/admin/add-product', postAddProduct)
router.post('/admin/edit-product', postEditProduct)


export default router 