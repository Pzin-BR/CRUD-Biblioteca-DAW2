import Emprestimo from '../models/emprestimo.js'; 

export default class EmprestimoController{

    constructor (caminhoBase = 'emprestimo/'){
        this.caminhoBase = caminhoBase

        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Emprestimo.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }

        this.add = async(req, res)=>
        {
            //cria o jogo
            await Emprestimo.create
            (
                {
                    livro: req.body.livro,
                    nomeUsr: req.body.nomeUsr,
                    emailUsr: req.body.emailUsr,
                    dte: req.body.dte, 
                    dtd: req.body.dtd
                }

                            )
            res.redirect('/' + caminhoBase + 'add')
        }

        this.list = async(req, res)=>{
            const resultado = await Emprestimo.find({})
            res.render(caminhoBase + 'lst', {Emprestimo:resultado})
        }

        this.list = async(req, res)=>
        {
            const resultado = await Emprestimo.find({})
            res.render(caminhoBase + 'lst', {Emprestimo:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const resultado = await Emprestimo.findById(id)
            res.render(caminhoBase + 'edt', {Emprestimo:resultado})  
        }
                    this.Edt = async(req, res)=>{
                await Emprestimo.findByIdAndUpdate(req.params.id, req.body)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
    }
}
