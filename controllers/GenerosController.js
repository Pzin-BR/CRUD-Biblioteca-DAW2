//importar o Model
import Generos from '../models/generos.js'

export default class GenerosController
{

    constructor(caminhoBase = 'generos/')
    {
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Generos.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
        this.add = async(req, res)=>
        {
            //cria o aluno
            await Generos.create
            (
                {
                    nome: req.body.nome,
                }

            )
            res.redirect('/' + caminhoBase + 'add')
        }
        this.list = async(req, res)=>{
            const resultado = await Generos.find({})
            res.render(caminhoBase + 'lst', {Generos:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Generos.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Generos:resultado})
        }
            //passar quem eu quero editar
            this.openEdt = async(req, res)=>{
            const id = req.params.id
            const resultado = await Generos.findById(id)
            res.render(caminhoBase + 'edt', {Generos:resultado})  
        }
        this.Edt = async(req, res)=>{
            await Generos.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}


