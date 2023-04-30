import {body, validationResult} from 'express-validator';

const validateUser = () => {
  return[
  body('name').notEmpty().withMessage ("O nome é obrigatório"),
  body('name').isString().withMessage ("O nome só pode conter letras"),
  body('salary').isNumeric().withMessage("Salário só pode conter números"),
  (req, res, next) => {
    const erros = validationResult(req);
    if(!erros.isEmpty()){
      return res.status(400).json({erros: erros.array()});
  }
  next ();
}
];
};

export default validateUser
