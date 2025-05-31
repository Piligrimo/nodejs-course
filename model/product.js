import fs from 'fs'
import path from 'path';

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
    constructor(title, imageUrl, description, price ) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = Number(price);
    }

    save () {
        this.id = Math.random().toString()
        readProductsFromFile((products) => {
            products.push(this)
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                if (err) {
                    console.error(err)
                }
            })
        })
    }

    static fetchAll (cb) {
        readProductsFromFile(cb)
    }

    static getById (id, cb) {
        readProductsFromFile((products) => {
            cb(products.find(item => item.id = id))
        })
    }
}