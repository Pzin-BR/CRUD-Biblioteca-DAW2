import conexao from '../config/conexao.js'

const Emprestimo = conexao.Schema({
    livro: {type:String, required:true},
    nomeUsr: {type:String, required:true},
    emailUsr: {type:String, required:true},
    dte: {type:Date, required:true},
    dtd: {type:Date, required:true},

}) 

export default conexao.model('Emprestimo',Emprestimo)