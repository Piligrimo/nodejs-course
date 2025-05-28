import express from 'express'
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'
import path from 'path';

const PORT = 3000;

const app = express()

app.use(bodyParser.urlencoded())

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(express.static(path.join(path.resolve(), 'public')))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(path.resolve(), 'views', '404.html'))
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/`)
});
