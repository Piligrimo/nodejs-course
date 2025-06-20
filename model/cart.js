import fs from 'fs'
import path from 'path'

 const filePath = path.join(path.resolve(), 'data', 'cart.json')


export default class Cart {
    static add(id, price) {
        fs.readFile(filePath, (err, data) => {
            let cart = {
                products: [],
                total: 0
            }
            if (!err) {
                cart = JSON.parse(data)
            }

            const existingProductIndex = cart.products.findIndex(item => item.id === id)
            const existingProduct = cart.products[existingProductIndex]
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = {...existingProduct}
                updatedProduct.quantity ++
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            } else {
                updatedProduct = { id,quantity: 1}
                cart.products = [...cart.products, updatedProduct]
            }
            
            cart.total += price
            fs.writeFile(filePath, JSON.stringify(cart), (err) =>{
                if (err) console.error(err)
            })
        })
    } 

    static delete(id, price) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return
            }
            
            const updatedCart = {...JSON.parse(data)} 
            const product = updatedCart.products.find(item => item.id === id)
            if (!product)  return

            updatedCart.products = updatedCart.products.filter(item => item.id !== id)
            updatedCart.total -= product.quantity * price
            fs.writeFile(filePath, JSON.stringify(updatedCart), (err) =>{
                if (err) console.error(err)
            })
        })
    }

    static getCart(cb) {
        fs.readFile(filePath, (err, data) => {
            const cart = JSON.parse(data)
            if (err) {
                cb(null)
            } else {
                cb(cart)
            }
        })
    }
}