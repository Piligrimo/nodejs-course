
import Product from "../model/product.js"

export const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add product' })
}

export const getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', { pageTitle: 'Edit product' })
}

export const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/admin/add-product')
}

export const getAdminProductList = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/admin-product-list', { 
            products,
            pageTitle: 'Product list'
        })
    })
}
