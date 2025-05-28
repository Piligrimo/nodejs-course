import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(path.resolve(), 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/admin/add-product')
})


export default router