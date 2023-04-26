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

// rotas da API
app.post('/person', async (req, res) => {

// req.body
const {name, salary} = req.body

if (!name){
  res.status(422).json({error: 'O nome é obrigatório!'})
}

const person = {
  name,
  salary
}

try{
  await Person.create(person)

  res.status(201).json({message: 'Pessoa inserida com sucesso!'})

}catch (error){
  res.status(500).json({error : error})
}

})


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