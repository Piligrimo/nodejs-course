import Product from "../model/product.js"

export const getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            products,
            pageTitle: 'All Products'
        })
    })
}

export const getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Cart' })
}

export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout' })
}

export const getProductDetails = (req, res, next) => {
    res.render('shop/product-details', { pageTitle: 'Details' })
}

export const getHomePage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { 
            products,
            pageTitle: 'Home'
        })
    })
}