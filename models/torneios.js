import conexao from '../config/conexao.js'

const Torneios = conexao.Schema({
    nome: {type:String, required:true},
    jogo: {type:String, required:true},
    sts: {type:String, required:true},
    prem: {type:Number, required:true},
    dti: {type:Date, required:true},
    dtt: {type:Date, required:true},
}) 

export default conexao.model('Torneios',Torneios)