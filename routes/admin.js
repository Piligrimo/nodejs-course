import express from 'express'
import path from 'path'

const router = express.Router()

const products = []

router.get('/admin/add-product', (req, res, next) => {
    res.render('add-product', {stylesPrefix: '../'})
})

router.post('/admin/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/admin/add-product')
})


export {router, products}