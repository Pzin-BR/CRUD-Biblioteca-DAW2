import Torneios from '../models/torneios.js'; 

export default class TorneiosController{

    constructor (caminhoBase = 'torneios/'){
        this.caminhoBase = caminhoBase

        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Torneios.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }

        this.add = async(req, res)=>
        {
            //cria o jogo
            await Torneios.create
            (
                {
                    nome: req.body.nome,
                    jogo: req.body.jogo,
                    dti: req.body.dti,
                    dtt: req.body.dtt,
                    prem: req.body.prem,
                    sts: req.body.sts
                }

                            )
            res.redirect('/' + caminhoBase + 'add')
        }

        this.list = async(req, res)=>{
            const resultado = await Torneios.find({})
            res.render(caminhoBase + 'lst', {Torneios:resultado})
        }

        this.list = async(req, res)=>
        {
            const resultado = await Torneios.find({})
            res.render(caminhoBase + 'lst', {Torneios:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const resultado = await Torneios.findById(id)
            res.render(caminhoBase + 'edt', {Torneios:resultado})  
        }
                    this.Edt = async(req, res)=>{
                await Torneios.findByIdAndUpdate(req.params.id, req.body)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
    }
}
