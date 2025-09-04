import conexao from '../config/conexao.js'

const Generos = conexao.Schema({
    nome: {type:String, required:true},
})

export default conexao.model('Generos',Generos)