import Livros from '../models/livros.js'; 

export default class LivrosController{

    constructor (caminhoBase = 'livros/'){
        this.caminhoBase = caminhoBase

        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Livros.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }

        this.add = async(req, res)=>
        {
            //cria o jogo
            await Livros.create
            (
                {
                    nome: req.body.nome,
                    ano: req.body.ano,
                    genero: req.body.genero,
                    etaria: req.body.etaria,
                    empresa: req.body.empresa,
                    plataforma: req.body.plataforma,
                    preco: req.body.preco
                }

                            )
            res.redirect('/' + caminhoBase + 'add')
        }

        this.list = async(req, res)=>{
            const resultado = await Livros.find({})
            res.render(caminhoBase + 'lst', {Livros:resultado})
        }

        this.list = async(req, res)=>
        {
            const resultado = await Livros.find({})
            res.render(caminhoBase + 'lst', {Livros:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const resultado = await Livros.findById(id)
            res.render(caminhoBase + 'edt', {Livros:resultado})  
        }
                    this.Edt = async(req, res)=>{
                await Livros.findByIdAndUpdate(req.params.id, req.body)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
    }
}
