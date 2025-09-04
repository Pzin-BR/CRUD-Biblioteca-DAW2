import express from 'express'
const router = express.Router()

//busca o GeneroController

import GenerosController from '../controllers/GenerosController.js'
const controle = new GenerosController()

const caminhobase = 'generos/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.get('/' + caminhobase + 'edt/:id', controle.Edt)
router.post('/' + caminhobase + 'edt/:id', controle.Edt)
router.get('/' + caminhobase + 'del/:id', controle.Excluir)
router.post('/' + caminhobase + 'lst', controle.find)
export default router