import users from "../models/userModel.js";
import bcrypt from "bcrypt";

class UserController {

    static async registro (req, res) {
        
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

    static async login (req, res) {

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

            return res.status(200).json({ message: "Usuário logado com sucesso.", user: user });

        } catch (error) {
            return res.status(500).json({ message: "Erro interno.", error: error })
        }

    }
}

export default UserController;