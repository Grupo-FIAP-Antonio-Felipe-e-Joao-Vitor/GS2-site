import express from "express";
import AnaliseController from "../controllers/AnaliseController.js";

const route = express.Router();

route.get("/analises", AnaliseController.get_all_analises);
route.post("/analises", AnaliseController.post_analise);

export default route;