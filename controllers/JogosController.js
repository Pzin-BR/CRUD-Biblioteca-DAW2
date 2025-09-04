import Jogos from '../models/jogos.js'; 

export default class JogosController{

    constructor (caminhoBase = 'jogos/'){
        this.caminhoBase = caminhoBase

        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Jogos.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }

        this.add = async(req, res)=>
        {
            //cria o jogo
            await Jogos.create
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
            const resultado = await Jogos.find({})
            res.render(caminhoBase + 'lst', {Jogos:resultado})
        }

        this.list = async(req, res)=>
        {
            const resultado = await Jogos.find({})
            res.render(caminhoBase + 'lst', {Jogos:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const resultado = await Jogos.findById(id)
            res.render(caminhoBase + 'edt', {Jogos:resultado})  
        }
                    this.Edt = async(req, res)=>{
                await Jogos.findByIdAndUpdate(req.params.id, req.body)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
    }
}
