import { Router } from 'express' ;
const router = Router();
import validateUser from '../validacao.js';
import criarUsuario from './criarUsuario.js';
import buscarUsuarios from './buscarUsuarios.js';
import buscarCOmID from './buscarComID.js';
import atualizarUsuario from './atualizarUsuario.js';
import { deletarUusuario } from './deletarUusuário.js';

// cadastrando pessoa
router.post('/',validateUser(), criarUsuario);
  
//buscando todas as pessoas
router.get('/', buscarUsuarios )

//Buscando pessoa com ID
router.get('/:id', buscarCOmID )

// updade
router.patch('/:id', atualizarUsuario)

//Deletar
router.delete('/:id', deletarUusuario)

export default router;
