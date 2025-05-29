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
    constructor(title) {
        this.title = title;
    }

    save () {
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
}