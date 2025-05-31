
import Product from "../model/product.js"

export const getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', { 
        pageTitle: 'Add product',
        isEdit: false
    })
}

export const getEditProduct = (req, res, next) => {
    const id = req.params.id
    
    Product.getById(id, (product) => {
        if (!product) {
            return res.status(404).render('404', { pageTitle: 'Oops! Not found!' })
        }
        res.render('admin/edit-product', { 
            pageTitle: 'Edit product',
            isEdit: true,
            product
        })
    })
}

export const postAddProduct = (req, res, next) => {
    const {title, description, imageUrl, price} = req.body
    const product = new Product(title, imageUrl, description, price)
    product.save()
    res.redirect('/admin/add-product')
}

export const postEditProduct = (req, res, next) => {
    const {title, description, imageUrl, price, id} = req.body
    const product = new Product(title, imageUrl, description, price, id)
    product.save()
    res.redirect('/admin/products')
}

export const getAdminProductList = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/admin-product-list', { 
            products,
            pageTitle: 'Product list'
        })
    })
}
