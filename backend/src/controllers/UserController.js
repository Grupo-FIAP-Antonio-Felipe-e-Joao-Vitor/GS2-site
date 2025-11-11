import users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {

    // Função de registro
    static async registro(req, res) {

        try {

            const data = req.body;

            if (!data.nome || !data.empresa || !data.atuacao || !data.email || !data.senha) {
                return res.status(400).json({ message: "Preencha todos os campos." });
            };

            const existe = await users.findOne({ email: data.email });

            if (existe) {
                return res.status(400).json({ message: "Este email já está sendo utilizado." });
            };

            const hash = await bcrypt.hash(data.senha, 10);
            const user = await users.create({
                nome: data.nome,
                empresa: data.empresa,
                atuacao: data.atuacao,
                email: data.email,
                senha: hash
            });

            res.status(201).json({ message: "Usuario criado com sucesso.", user: user });

        } catch (error) {
            return res.status(500).json({ message: "Erro interno.", error: error })
        }

    }

    // Função de login
    static async login(req, res) {

        try {

            const data = req.body;

            if (!data.email || !data.senha) {
                return res.status(400).json({ message: "Preencha todos os campos." });
            };

            const user = await users.findOne({ email: data.email });

            if (!user) {
                return res.status(400).json({ message: "Email incorreto." });
            };

            const passwordCorrect = await bcrypt.compare(data.senha, user.senha);

            if (!passwordCorrect) {
                return res.status(401).json({ message: "Senha incorreta." });
            };

            const token = jwt.sign(
                {
                    id: user._id,
                    nome: user.nome,
                    email: user.email,
                    empresa: user.empresa,
                    atuacao: user.atuacao
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d",
                }
            );

            return res.status(200).json({ message: "Usuário logado com sucesso.", user: user, token: token });

        } catch (error) {
            return res.status(500).json({ message: "Erro interno.", error: error })
        }

    }

    // Função que retorna todos os usuários
    static async listar_usuarios(req, res) {

        try {

            const list = await users.find({});

            return res.status(200).json({ users: list });

        } catch (error) {
            return res.status(500).json({ message: "Erro interno.", error: error })
        }

    }

    // Salvar recomendações no perfil do usuario
    static async salvar_recomendacoes(req, res) {

        try {

            const { id } = req.params;
            const data = req.body;

            const user = await users.findById(id);

            if (!user) return res.status(404).json({ message: "Usuário não encontrado." });

            const list = user.recomendacoes;
            
            data.recomendacoes.map(r => {
                list.push(r);
            });

            console.log(list);
            

            await users.findByIdAndUpdate(id, { recomendacoes: list});

            return res.status(200).json({ message: "Recomendações salvas.", recomendacoes: list })

        } catch (error) {
            return res.status(500).json({ message: "Erro interno.", error: error })
        }

    }
}

export default UserController;