import Person from '../models/Person.js';

class criarUsuario {
  static async criar (req, res) {
    const {name, salary} = req.body
    const person = {
      name,
      salary
    }   

  await Person.create(person)
  res.json({msg: "Usuário cadastrado com sucesso!"});
  }
}
export default criarUsuario