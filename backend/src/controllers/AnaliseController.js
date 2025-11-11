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
`;

      const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

      if (!GEMINI_API_KEY)
        return res
          .status(500)
          .json({ message: "Erro interno.", error: "API key não fornecida." });

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

      const payload = {
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,

          // Define que a saída deve ser no formato JSON
          responseMimeType: "application/json",

          // Fornece um schema para garantir a estrutura
          responseSchema: {
            type: "OBJECT",
            properties: {
              nivel_estresse: {
                type: "INTEGER",
                description: "1, 2, 3, 4, 5",
              },
              nivel_satisfacao: {
                type: "INTEGER",
                description: "1, 2, 3, 4, 5",
              },
              fatores_positivos: { type: "ARRAY", items: { type: "STRING" } },
              fatores_negativos: { type: "ARRAY", items: { type: "STRING" } },
              recomendacoes: { type: "ARRAY", items: { type: "STRING" } },
            },
          },
        },
        // O conteúdo principal (o JSON de entrada do funcionário)
        contents: [
          {
            parts: [
              {
                text: JSON.stringify(data),
              },
            ],
          },
        ],
      };

      try {
        const response_IA = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const analise_IA = response_IA.data.candidates[0].content.parts[0].text;

        await analises.create(analise_IA);

        return res.status(200).json({ message: "Análise enviada com sucesso.", analise: analise_IA });

      } catch (error) {
        return res.status(500).json({ message: "Erro interno.", error: error });
      }

    } catch (error) {
      return res.status(500).json({ message: "Erro interno.", error: error });
    }
  }
}

export default AnaliseController;