import conexao from '../config/conexao.js'

const Torneios = conexao.Schema({
    nome: {type:String, required:true},
    jogo: {type:String, required:true},
    status: {type:String, required:true},
    premiacao: {type:Number, required:true},
    dataInicio: {type:Date, required:true},
    dataFim: {type:Date, required:true},
    jogo:{type:String, required:true}
}) 

export default conexao.model('Torneios',Torneios)