import mongoose from "mongoose";

// Criando Schema de usuarios
const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    empresa: { type: String },
    atuacao: { type: String },
    email: { type: String },
    senha: { type: String }
}, { timestamps: true });

// Criando model de usuarios
const userModel = mongoose.model("usuarios", userSchema);

export default userModel;