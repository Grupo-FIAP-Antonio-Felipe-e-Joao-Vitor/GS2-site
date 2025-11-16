import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { atualuzar_dados, buscar_dados } from "../services/dash_salas";

const options = {
  title: "Nível de Ruído (Sala 001)",
  titleTextStyle: { color: "#ffffff", fontSize: 18 },
  legendTextStyle: { color: "#ffffff" },
  backgroundColor: "transparent",
  hAxis: {
    title: "Tempo",
    textStyle: { color: "#ffffff" },
    titleTextStyle: { color: "#ffffff" },
    showTextEvery: 29,
    baseline: 0,
    gridlines: { count: 5 },
    axisLineColor: "#ffffff",
    textPosition: "out"
  },
  vAxis: {
    title: "Ruído (dB)",
    textStyle: { color: "#ffffff" },
    titleTextStyle: { color: "#ffffff" },
    gridlines: { count: 0 },
  },
  colors: ["#ffffff"],

};

const GraficoRuido = () => {

  const [presence, setPresence] = useState(false);
  const [data, setData] = useState([["Tempo", "Barulho (dB)"]]);

  useEffect(() => {
    async function fetch_data() {
      try {
        await atualuzar_dados()
        const response = await buscar_dados();
        const dados = response.data.dados;

        if (!dados || dados.length === 0) return;

        setPresence(response.data.dados[0].presence)

        const ruido = dados[0].noise; // pega o array de ruídos

        // monta os dados no formato [["Tempo", "Barulho"], ["17:27:47", 8], ...]
        const novosDados = [["Tempo", "Barulho (dB)"]];

        ruido.forEach((item) => {
          const hora = new Date(item.recvTime).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
          });
          novosDados.push([hora, Number(item.attrValue)]);
        });

        setData(novosDados);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetch_data(); // roda uma vez ao montar

    const interval = setInterval(fetch_data, 5000); // roda de 5 em 5s

    return () => clearInterval(interval); // evita memória vazando
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center bg-slate-800 border-2 border-gray-500 rounded-2xl">
      <div className="w-full h-[400px] flex justify-center items-center">
        <Chart
          chartType="AreaChart"
          data={data}
          options={options}
          width="100%"
          height="400px"
        />
      </div>
      {presence ? (
        <p className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
          <span className="font-semibold text-lg text-white">Sala ocupada</span>
        </p>
      ) : (
        <p className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-semibold text-lg text-white">Sala livre</span>
        </p>
      )}

    </div>
  );
};

export default GraficoRuido;
