import { Router } from 'express' ;
const router = Router();
const Person = require('../models/Person')


// cadastrando pessoa
router.post('/', async (req, res) => {

  // req.body
  const {name, salary} = req.body
  
  if (!name){
    res.status(422).json({error: 'O nome é obrigatório!'})
    return
  }

  
  const person = {
    name,
    salary
  }
  
  try{
    await Person.create(person)
  
    res.status(201).json({message: 'Pessoa inserida com sucesso!'})
  
  }catch (error){
    res.status(500).json({error})
  }
  
  })
  
//buscando todas as pessoas
  router.get('/', async (req, res) => {

    try {

      const people =  await Person.find()
      res.status(200).json(people)
    
    }catch (error){
      res.status(500).json({error : error})
    }
  })

  //Buscando pessoa com ID
  router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
      const person = await Person.findOne({_id: id})
      if(!person){
        res.status(422).json({message: 'Pessoa não encontrada!'})
        return
      }

      res.status(200).json(person)

    }catch(error){
      res.status(500).json({error : error})
    }

  } )

  // updade
router.patch('/:id', async (req, res) => {

  const id = req.params.id;
  const {name, salary} = req.body

  const person = {
    name,
    salary
  }
  try{ 

    const updatedPerson = await Person.updateOne({_id: id}, person)

    if(updatedPerson.matchedCount === 0) {
      res.status(422).json({message: 'Pessoa não encontrada!'})
        return
    }
    res.status(200).json(person)
    // em que momento desse código esse person é att
}catch(error){
  res.status(500).json({error : error})
}

})

//Deletar
router.delete('/:id', async (req, res) => {

  const id = req.params.id
  const person = await Person.findOne({_id: id})
  if(!person){
    res.status(422).json({message: 'Pessoa não encontrada!'})
    return
  }
  try{
    await Person.deleteOne({_id: id})
    res.status(200).json({message: "Usuário deletado!"})

  }catch(error){
    res.status(500).json({error : error})
  }

})

  module.exports = router
