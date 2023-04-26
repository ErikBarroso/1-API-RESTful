const express = require('express')
const app = express()
const mongoose = require('mongoose')

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

//mongodb+srv://Erik:Erik425109@cluster0.2dlk21c.mongodb.net/banco2api?retryWrites=true&w=majority


//entregar uma porta
const DB_USER = 'Erik'
const DB_PASSWORD = 'Erik425109'

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.2dlk21c.mongodb.net/banco2api?retryWrites=true&w=majority`)
.then(() => {
  console.log('Conectamos ao MoongoDB')
  app.listen(3000)
})
.catch((err) => console.log(err))

app.listen(3000)