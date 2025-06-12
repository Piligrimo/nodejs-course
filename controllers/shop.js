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
    Cart.getCart((cart) => {        
        Product.fetchAll(products => {
            const cartProducts = []
            for (const product of products) {
                const cartItem = cart.products.find(item => item.id === product.id)
                if (cartItem) {
                    cartProducts.push({productData: product, quantity: cartItem.quantity})
                }
            }
            
            res.render('shop/cart', { pageTitle: 'Cart', products: cartProducts })

        })
    })
}

export const addToCart = (req, res, next) => {
    const id = req.body.id
    Product.getById(id, (product) => {
        Cart.add(id,product.price)
        res.redirect(req.body.from)
    })
}

export const deleteFromCart = (req, res, next) => {
    const id = req.body.id
    Product.getById(id, (product) => {        
        Cart.delete(id, product.price)
        res.redirect('/cart')
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