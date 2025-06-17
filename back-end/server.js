import express from "express"
import boardRoutes from './routes/boardRoutes.js'
const app = express()
const PORT = process.env.PORT || 5502;
app.use(express.json())
app.use('/board',boardRoutes )
app.listen(PORT, console.log(`Successful connection to ${PORT}`))
 