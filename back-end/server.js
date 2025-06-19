import express from "express"
import boardRoutes from './routes/boardRoutes.js'
import cardRoutes from './routes/cardRoutes.js'
const app = express()
const PORT = process.env.PORT || 5502;
app.use(express.json())
app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
app.use('/boards',boardRoutes)
boardRoutes.use('/', cardRoutes)
app.listen(PORT, console.log(`Successful connection to ${PORT}`))
 