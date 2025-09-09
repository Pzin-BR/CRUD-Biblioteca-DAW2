import express from 'express'
const router = express.Router()

//busca o CategoriasController

import CategoriasController from '../controllers/CategoriasController.js'
const controle = new CategoriasController()

const caminhobase = 'categorias/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.get('/' + caminhobase + 'edt/:id', controle.Edt)
router.post('/' + caminhobase + 'edt/:id', controle.Edt)
router.get('/' + caminhobase + 'del/:id', controle.Excluir)
router.post('/' + caminhobase + 'lst', controle.find)
export default router