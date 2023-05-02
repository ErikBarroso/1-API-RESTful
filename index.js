import 'dotenv/config';
import  express  from 'express';
const app = express();
import mongoose from 'mongoose';

// forma de ler JSON // middlewares
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// rotas da API

import personRoutes from './routes/personRoutes.js';

app.use('/person', personRoutes)

// rota inical / endpoint
app.get('/', (req, res) =>{
  // mostrar req

  res.json({message: 'Oi Express!'})

})

//entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@teste1.r5yvrb1.mongodb.net/bancodaapi20?retryWrites=true&w=majority`)
.then(() => {
  console.log('Conectamos ao MoongoDB')
  app.listen(3000)
})
.catch((err) => console.log(err))

