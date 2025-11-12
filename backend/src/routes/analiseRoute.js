import express from "express";
import AnaliseController from "../controllers/AnaliseController.js";

const route = express.Router();

route.get("/analises", AnaliseController.get_all_analises);
route.get("/analises/:empresa/search", AnaliseController.get_enterprise_analises);
route.post("/analises", AnaliseController.post_analise);

export default route;