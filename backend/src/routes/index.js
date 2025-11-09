import express from "express";
import users from "./userRoutes.js";
import cors from "cors";

const routes = (app) => {
    app.use(cors(), express.json(), users);
};

export default routes;