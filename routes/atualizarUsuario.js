import Person from '../models/Person.js';

const atualizarUsuario = async (req, res) => {

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
    // em que momento desse código esse person é att?
}catch(error){
  res.status(500).json({error : error})
}
}

export default atualizarUsuario