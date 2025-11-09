import express from "express";
import UserController from "../controllers/UserController.js";

const route = express.Router();

route.post("/register", UserController.registro);
route.post("/login", UserController.login);

export default route;