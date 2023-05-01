import Person from '../models/Person.js';

const buscarCOmID = async (req, res) => {

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
}

export default buscarCOmID;