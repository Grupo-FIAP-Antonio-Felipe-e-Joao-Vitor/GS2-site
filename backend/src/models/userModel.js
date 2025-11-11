import mongoose from "mongoose";

// Criando Schema de usuarios
const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { 
        type: String,
        required: true
    },
    empresa: { 
        type: String,
        required: true,
        enum: {
            values: ["Fiap", "Google", "Mercado livre"]
        } 
    },
    atuacao: {
        type: String,
        required: true,
        enum: {
            values: ["TI", "Marketing", "Vendas", "RH", "Financeiro", "Lianderanca"]
        }
    },
    recomendacoes: {
        type: Array
    },
    email: { 
        type: String,
        required: true
    },
    senha: { 
        type: String,
        required: true
    }
}, { timestamps: true });

// Criando model de usuarios
const userModel = mongoose.model("usuarios", userSchema);

export default userModel;