import express from 'express'
import { getAddProduct, getEditProduct, postAddProduct, getAdminProductList } from '../controllers/admin.js'

const router = express.Router()

router.get('/admin/add-product', getAddProduct)
router.get('/admin/edit-product', getEditProduct)
router.get('/admin/products', getAdminProductList)

router.post('/admin/add-product', postAddProduct)


export default router 