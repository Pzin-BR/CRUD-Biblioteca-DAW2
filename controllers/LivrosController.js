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
            console.log(req.body) //Veja o que está chegando do formulário
            await Livros.create
            (
                {
                    titulo: req.body.titulo,
                    autor: req.body.autor,
                    ano: req.body.ano, 
                    categoria: req.body.categoria,
                    isbn: req.body.isbn,
                    editora: req.body.editora,
                    paginas: req.body.paginas,
                    disponibilidade: req.body.disponibilidade
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
