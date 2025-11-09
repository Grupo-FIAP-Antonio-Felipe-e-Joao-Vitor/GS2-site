import express from "express";
import db from "./config/db.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

db.on("connected", () => console.log("Conectado ao banco de dados."));

export default app;