import express from "express";
import users from "./userRoutes.js";
import analises from "./analiseRoute.js";
import sensor from "./roomSensorRoute.js";
import cors from "cors";

const routes = (app) => {
    app.use(cors(), express.json(), users, analises, sensor);
};

export default routes;