import Product from "../model/product.js"

export const getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add product' })
}

export const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/admin/add-product')
}

export const getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', { 
            products,
            pageTitle: 'Home'
        })
    })
}