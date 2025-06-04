import fs from 'fs'
import path from 'path';
import Cart from './cart.js';

const filePath = path.join(path.resolve(), 'data', 'products.json')

const readProductsFromFile = (cb) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
          return cb([])
        } 
        cb(JSON.parse(data))
    })
}

export default class Product {
    constructor(title, imageUrl, description, price, id ) {
        this.id = id
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = Number(price);
    }

    save (cb) {
        readProductsFromFile((products) => {
            if (this.id) {
                
                const existingProductIndex = products.findIndex(item => item.id === this.id)  
            
                const updatedProducts = [...products]
                
                updatedProducts[existingProductIndex] = this
                fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
                    if (err) {
                        console.error(err)
                    } else {
                        cb?.()
                    }
                })
            } else {
                this.id = Math.random().toString()
                products.push(this)
                fs.writeFile(filePath, JSON.stringify(products), (err) => {
                    if (err) {
                        console.error(err)
                    } else {
                        cb?.()
                    }
                })
            }
             
        })
    }

    static fetchAll (cb) {
        readProductsFromFile(cb)
    }

    static getById (id, cb) {
        readProductsFromFile((products) => {
            cb(products.find(item => item.id === id))
        })
    }

    static deleteById (id, cb) {
        readProductsFromFile((products) => {
            const product = products.find(item => item.id === id)
            const updatedProducts = products.filter(item => item.id !== id)
            fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
                if (!err) {
                    Cart.delete(id, product.price)
                    cb?.()
                }
            })
        })
    }

}