import express from 'express'
const router = express.Router()

router.get('/add-product', (req, res, next) => {
    res.send(`<div>
            <h1>Add product page</h1>
            <form action="/add-product" method="POST">
                <input type="text" name="title"/>
                <button type="submit"> Add </button>
            </form>
        </div>`)
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/add-product')
})


export default router