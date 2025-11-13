import roomSensorModel from "../models/roomSensorModel.js";
import axios from "axios"

class RoomSensorController {

    static IP_FIWARE = "20.46.254.134"
    static DEVICE = "Sensor"
    static DEVICE_ID = "001"
    static URL_PRESENCE = `http://${RoomSensorController.IP_FIWARE}:1026/v2/entities/urn:ngsi-ld:${RoomSensorController.DEVICE}:${RoomSensorController.DEVICE_ID}/attrs/presence`
    static URL_NOISE = `http://${RoomSensorController.IP_FIWARE}:8666/STH/v1/contextEntities/type/${RoomSensorController.DEVICE}/id/urn:ngsi-ld:${RoomSensorController.DEVICE}:${RoomSensorController.DEVICE_ID}/attributes/noise?lastN=30`

    static headers = {
        "fiware-service": "smart",
        "fiware-servicepath": "/"
    }

    static async listar_dados(req, res) {

        try {

            const dados = await roomSensorModel.find({});

            return res.status(200).json({ dados: dados });

        } catch (error) {
            return res.status(500).json({ message: "Erro interno.", error: error })
        }

    }

    // Colocar dados no banco
    static async put_dados(req, res) {

        try {

            // Faz requisição ao fiware
            const response_sensor_presence = await axios.get(RoomSensorController.URL_PRESENCE, { headers: RoomSensorController.headers });
            const response_sensor_noise = await axios.get(RoomSensorController.URL_NOISE, { headers: RoomSensorController.headers });

            if (!response_sensor_presence || !response_sensor_noise) return res.status(400).json({ message: "Erro ao fazer requisição." });

            // Pega valor do presence e noise
            const presence = response_sensor_presence?.data?.value === 1 ? true : false;
            const noise = response_sensor_noise?.data.contextResponses?.[0]?.contextElement?.attributes?.[0]?.values

            // Cria objeto pro banco de dandos
            const data = {
                presence: presence,
                noise: noise
            }

            // Deleta se ja tiver um elemeto dentro do banco
            if ((await roomSensorModel.find({})).length > 0) await roomSensorModel.deleteMany({});

            // Cria o objeto dentro do banco
            await roomSensorModel.create(data)
            return res.status(201).json({ message: "Dados coletados com sucesso", data: data })

        } catch (error) {
            console.error("Erro em put_dados:", error?.response?.data || error.message || error);
            return res.status(500).json({ message: "Erro interno.", error: error?.message || error });
        }

    }

}

export default RoomSensorController