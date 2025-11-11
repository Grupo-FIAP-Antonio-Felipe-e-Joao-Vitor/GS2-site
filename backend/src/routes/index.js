import express from "express";
import users from "./userRoutes.js";
import analises from "./analiseRoute.js";
import cors from "cors";

const routes = (app) => {
    app.use(cors(), express.json(), users, analises);
};

export default routes;