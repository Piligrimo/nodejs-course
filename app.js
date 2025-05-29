import express from 'express'
import bodyParser from 'body-parser';

import adminRoutes  from './routes/admin.js'
import shopRoutes from './routes/shop.js'
import { getNotFoundError } from './controllers/error.js';


const PORT = 3000;

const app = express()



app.use(express.static('public'));

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())

app.use(adminRoutes)
app.use(shopRoutes)

app.use(getNotFoundError)

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/`)
});
