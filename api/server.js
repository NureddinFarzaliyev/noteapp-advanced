import express from 'express'
const app = express()
import cookieParser from 'cookie-parser'
import connectDB from './db/connect.js'
import protectRoute from './middlewares/protectRoute.js'

// Route imports
import authRoutes from './routes/auth.routes.js'
import createRoutes from './routes/create.routes.js'
import deleteRoutes from './routes/delete.routes.js'

// Dotenv config
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

// Middlewares
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/create', protectRoute, createRoutes)
app.use('/api/delete', protectRoute, deleteRoutes)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    connectDB();
    console.log(`Example app listening at http://localhost:${port}`)
})