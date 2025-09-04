import conexao from '../config/conexao.js'

const Jogos = conexao.Schema({
    nome: {type:String, required:true},
    ano: {type:Number, required:true},
    genero: {type:String, required:true},
    etaria: {type:String, required:true},
    empresa: {type:String, required:true},
    plataforma: {type:String, required:true},
    preco: {type:Number, required:true}
}) 

export default conexao.model('Jogos',Jogos)