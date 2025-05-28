
import express from 'express'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send(
        `<div>
            <h1>Main Page</h1>
            <a href="/admin/add-product"> Add product </a>
        </div>`
    )
})

export default router
