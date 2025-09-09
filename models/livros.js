import conexao from '../config/conexao.js'

const Livros = conexao.Schema({
    titulo: {type:String, required:true},
    autor: {type:String, required:true},
    ano: {type:Number, required:true},
    categoria: {type:String, required:true},
    isbn: {type:String, required:true},
    editora: {type:String, required:true},
    paginas: {type:Number, required:true},
    disponibilidade: {type:String, required:true},
}) 

export default conexao.model('Livros',Livros)