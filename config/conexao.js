import mongoose from "mongoose";
const url = "mongodb+srv://pedrosdrlfim:0uqdfvMeaTq9tK2T@cluster0.2uyepuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const conexao = await mongoose.connect(url)

export default conexao