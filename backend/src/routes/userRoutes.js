import express from "express";
import UserController from "../controllers/UserController.js";

const route = express.Router();

route.get("/usuarios", UserController.listar_usuarios);
route.get("/usuarios/empresa/:empresa", UserController.listar_usuarios_empresa);
route.post("/register", UserController.registro);
route.post("/login", UserController.login);
route.put("/usuarios/:id", UserController.salvar_recomendacoes);

export default route;