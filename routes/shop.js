
import express from 'express'
import path from 'path'

import { products } from './admin.js'

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log(products);
    res.render('shop', {products})
})

export default router
