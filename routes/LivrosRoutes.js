import express from 'express'
const router = express.Router()

import LivrosController from '../controllers/LivrosController.js'
const controle = new LivrosController()

const caminhobase = 'livros/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.get('/' + caminhobase + 'edt/:id', controle.Edt)
router.post('/' + caminhobase + 'edt/:id', controle.Edt)
router.get('/' + caminhobase + 'del/:id', controle.Excluir)
export default router