import mongoose from "mongoose";

// Criando Schema de análise
const analiseSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    atuacao: {
        type: String,
        required: true,
        enum: {
            values: ["TI", "Marketing", "Vendas", "RH", "Financeiro", "Lianderanca"]
        }
    },
    empresa: {
        type: String,
        required: true,
        enum: {
            values: ["Fiap", "Google", "Mercado livre"]
        }
    },
    nivel_estresse: {
        type: mongoose.Schema.Types.Int32,
        required: true
    },
    nivel_satisfacao: {
        type: mongoose.Schema.Types.Int32,
        required: true
    },
    fatores_positivos: {
        type: mongoose.Schema.Types.Array,
        required: true
    },
    fatores_negativos: {
        type: mongoose.Schema.Types.Array,
        required: true
    },
    recomendacoes: {
        type: mongoose.Schema.Types.Array,
        required: true
    }
})

// Criando Model de analises
const analiseModel = mongoose.model("analises", analiseSchema);

export default analiseModel;