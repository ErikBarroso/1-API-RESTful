import Person from '../models/Person.js';

class buscarUsuarios{
  static async buscar (req, res) {
    try {
      const people =  await Person.find()
      res.status(200).json(people)
        
    }catch (error){
      res.status(500).json({error : error})
    }
  }
}
export default buscarUsuarios
