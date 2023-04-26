const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Person = require('./models/Person')


// forma de ler JSON // middlewares
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())


// rota inical / endpoint
app.get('/', (req, res) =>{
  // mostrar req

  res.json({message: 'Oi Express!'})

})

//entregar uma porta
const DB_USER = 'Erik'
const DB_PASSWORD = 'Erik425109'

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@teste1.r5yvrb1.mongodb.net/bancodaapi20?retryWrites=true&w=majority`)
.then(() => {
  console.log('Conectamos ao MoongoDB')
  app.listen(3000)
})
.catch((err) => console.log(err))
