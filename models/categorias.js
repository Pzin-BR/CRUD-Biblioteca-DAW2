import conexao from '../config/conexao.js'

const Categorias = conexao.Schema({
    nome: {type:String, required:true},
})

export default conexao.model('Categorias',Categorias)