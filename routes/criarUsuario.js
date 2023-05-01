import Person from '../models/Person.js';

const criarUsuario = async (req, res) => {
  const {name, salary} = req.body
  const person = {
    name,
    salary
  }   

await Person.create(person)
res.json({msg: "Usuário cadastrado com sucesso!"});
}

export default criarUsuario