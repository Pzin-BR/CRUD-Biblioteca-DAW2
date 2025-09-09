//importar o Model
import Categorias from '../models/categorias.js'

export default class CategoriasController
{

    constructor(caminhoBase = 'categorias/')
    {
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Categorias.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
        this.add = async(req, res)=>
        {
            //cria o aluno
            await Categorias.create
            (
                {
                    nome: req.body.nome,
                }

            )
            res.redirect('/' + caminhoBase + 'add')
        }
        this.list = async(req, res)=>{
            const resultado = await Categorias.find({})
            res.render(caminhoBase + 'lst', {Categorias:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Categorias.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Categorias:resultado})
        }
            //passar quem eu quero editar
            this.openEdt = async(req, res)=>{
            const id = req.params.id
            const resultado = await Categorias.findById(id)
            res.render(caminhoBase + 'edt', {Categorias:resultado})  
        }
        this.Edt = async(req, res)=>{
            await Categorias.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}


