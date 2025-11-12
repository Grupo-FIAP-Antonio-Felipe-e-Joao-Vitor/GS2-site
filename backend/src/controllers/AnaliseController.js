import analises from "../models/analiseModel.js";
import axios from "axios";

class AnaliseController {
  static async get_all_analises(req, res) {
    try {
      const list = await analises.find({});

      return res.status(200).json({ analises: list });
    } catch (error) {
      return res.status(500).json({ message: "Erro interno.", error: error });
    }
  }

  static async post_analise(req, res) {
    try {
      const data = req.body;

      /* data seria um objeto assim */
      // {
      //     "atuacao": "TI",
      //     "empresa": "Fiap",
      //     "carga": "Alta",
      //     "estresse": 4,
      //     "reconhecimento": "As vezes",
      //     "comunicacao": 3,
      //     "impacto": "Prazos curtos e falta de organização entre as equipes",
      //     "melhorias": "Mais alinhamento entre gestores e membros da equipe",
      //     "sentimentos": "Sinto que o ambiente é bom, mas o ritmo de trabalho é cansativo"
      // }

      if (
        !data.atuacao ||
        !data.empresa ||
        !data.carga ||
        !data.estresse ||
        !data.reconhecimento ||
        !data.comunicacao ||
        !data.impacto ||
        !data.melhorias ||
        !data.sentimentos
      ) {
        return res.status(400).json({ message: "Preencha todos os campos." });
      }

      const SYSTEM_INSTRUCTION = `
Você é um analista de bem-estar corporativo especializado em entender o clima organizacional de empresas.
Sua função é analisar as respostas de um funcionário e gerar um relatório objetivo contendo:

1. Nível de estresse (baixo, médio ou alto)
2. Nível de satisfação (baixo, médio ou alto)
3. Fatores positivos percebidos
4. Fatores negativos percebidos
5. Recomendações personalizadas para melhorar o bem-estar deste funcionário

Mantenha as respostas em formato JSON e seja breve e claro.

Resposta esperada: {
    "atuacao": String (TI, Marketing, Vendas, RH, Financeiro, Lideranca),
    "empresa": String (Fiap, Google, Mercado Livre),
    "nivel_estresse": Int (1 a 5),
    "nivel_satisfacao": Int (1 a 5),
    "fatores_positivos": Array,
    "fatores_negativos": Array,
    "recomendacoes": Array
}

`;

      const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

      if (!GEMINI_API_KEY)
        return res
          .status(500)
          .json({ message: "Erro interno.", error: "API key não fornecida." });

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

      const payload = {
        system_instruction: {
          parts: [
            { text: SYSTEM_INSTRUCTION }
          ]
        },
        contents: [
          {
            parts: [
              { text: JSON.stringify(data) }
            ]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json"
        }
      };


      try {
        const response_IA = await axios.post(url, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const analise_IA = response_IA.data.candidates[0].content.parts[0].text;

        await analises.create(JSON.parse(analise_IA));

        return res.status(200).json({ message: "Análise enviada com sucesso.", analise: JSON.parse(analise_IA) });

      } catch (error) {
        return res.status(500).json({ message: "Erro interno.", error: error });
      }

    } catch (error) {
      return res.status(500).json({ message: "Erro interno.", error: error });
    }
  }

  static async get_enterprise_analises (req, res) {

    try {

      const empresa = req.params.empresa;   // vem do /analises/:empresa
      const atuacao = req.query.atuacao;    // vem do ?atuacao=TI

      const list = await analises.find({ empresa: empresa, atuacao: atuacao })
      let soma_estresse = 0
      let soma_satisfacao = 0

      list.forEach(a => {
        soma_estresse += Number(a.nivel_estresse)
        soma_satisfacao += Number(a.nivel_satisfacao)
      })
      
      const media_estresse = soma_estresse / list.length
      const media_satisfacao = soma_satisfacao / list.length

       return res.status(200).json({
      empresa: empresa,
      atuacao: atuacao,
      total_analises: list.length,
      media_estresse: media_estresse,
      media_satisfacao: media_satisfacao
    });

    } catch (error) {
      return res.status(500).json({ message: "Erro interno.", error: error });
    }

  }
}

export default AnaliseController;