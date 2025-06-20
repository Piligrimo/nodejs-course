import Cart from './cart.js';
import db from '../utils/database.js'

export default class Product {
    constructor(title, imageUrl, description, price, id ) {
        this.id = id
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = Number(price);
    }

    save () {
        return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)', 
            [this.title, this.price, this.imageUrl, this.description]
        )
    }

    static fetchAll () {
        return db.execute('SELECT * FROM products')
    }

    static getById (id) {
      return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
    }

    static deleteById (id) {
       
    }

}