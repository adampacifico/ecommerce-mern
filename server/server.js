
import express from 'express'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'
import cors from "cors";
dotenv.config()

const app = express()
app.use(cors());

app.use(express.json())

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000
connectDB();


app.listen(PORT, ()=> {
    console.log(`server is running on PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("HELLO ! Im in Heroku!")
})