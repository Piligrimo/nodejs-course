
import Product from "../model/product.js"

export const getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', { pageTitle: 'Add product' })
}

export const getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', { pageTitle: 'Edit product' })
}

export const postAddProduct = (req, res, next) => {
    const {title, description, imageUrl, price} = req.body
    const product = new Product(title, imageUrl, description, price)
    product.save()
    res.redirect('/admin/edit-product')
}

export const getAdminProductList = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/admin-product-list', { 
            products,
            pageTitle: 'Product list'
        })
    })
}
