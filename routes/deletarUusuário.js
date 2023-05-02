import Person from '../models/Person.js';

export class deletarUusuario{
  static async deletar (req, res) {

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
  }
}