import Cart from "../model/cart.js"
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

export const addToCart = (req, res, next) => {
    const id = req.body.id
    Product.getById(id, (product) => {
        Cart.add(id,product.price)
    })
}

export const getOrders = (req, res, next) => {
    res.render('shop/orders', { pageTitle: 'Orders' })
}

export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout' })
}

export const getProductDetails = (req, res, next) => {
    const id = req.params.id
    Product.getById(id, (product) => {
        res.render('shop/product-details', { pageTitle: 'Details', product })
    })
}

export const getHomePage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { 
            products,
            pageTitle: 'Home'
        })
    })
}