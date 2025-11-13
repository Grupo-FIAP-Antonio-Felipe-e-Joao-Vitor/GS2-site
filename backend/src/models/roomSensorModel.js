import mongoose from "mongoose";

// Criando Schema de sensor da sala
const roomSensorSchema = new mongoose.Schema({
    presence: { type: Boolean },
    noise: { type: Array }
}, { versionKey: false })

// Criando Model do sensor da sala
const roomSensorModel = mongoose.model("sensor", roomSensorSchema);

export default roomSensorModel;