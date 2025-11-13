import express from "express";
import RoomSensorController from "../controllers/RoomSensorController.js";

const route = express.Router();

route.get("/sensor", RoomSensorController.listar_dados);
route.post("/sensor", RoomSensorController.put_dados);

export default route