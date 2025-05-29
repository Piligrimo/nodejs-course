import express from 'express'
import bodyParser from 'body-parser';
import path from 'path';


import { router as adminRoutes } from './routes/admin.js'
import shopRoutes from './routes/shop.js'


const PORT = 3000;

const app = express()



app.use(express.static('public'));

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/`)
});
