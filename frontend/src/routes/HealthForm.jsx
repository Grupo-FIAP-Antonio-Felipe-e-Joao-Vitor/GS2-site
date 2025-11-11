import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import TextArea from "../components/TextArea";

const HealthForm = ({ user }) => {

    const navigate = useNavigate()
    
    useEffect(() => {

        if (!user) {
            alert("Registre-se primeiro.")
            navigate("/login")
        }

    })
    
    return (
    <div className="flex w-full min-h-screen bg-slate-900">
      <form className="w-full p-5 flex flex-col gap-2 items-center">
        <ProgressBar
          label={"Como você avalia sua carga de trabalho atual?"}
          minLabel={"Muito leve"}
          maxLabel={"Muito alta"}
          width="md:w-1/2"
        />

        <ProgressBar
          label={
            "Em uma escala de 1 a 5, como está seu nível de estresse no trabalho nesta semana?"
          }
          minLabel={"Pouco"}
          maxLabel={"Muito"}
          width="md:w-1/2"
        />

        <ProgressBar
          label={
            "Você sente que suas contribuições são reconhecidas pela empresa?"
          }
          minLabel={"Nunca"}
          maxLabel={"Sempre"}
          width="md:w-1/2"
        />

        <ProgressBar
          label={
            "Como você avaliaria a comunicação entre sua equipe e a liderança?"
          }
          minLabel={"Muito ruim"}
          maxLabel={"Ótima"}
          width="md:w-1/2"
        />

        <TextArea
          label={
            "Quais fatores têm mais impactado seu bem-estar no trabalho ultimamente?"
          }
          type={"text"}
          placeholder={"Descreva em poucas palavras"}
          width="md:w-1/2"
          heigt="h-50"
          name={"nome"}
        />

        <TextArea
          label={
            "O que você acredita que poderia melhorar seu dia a dia na empresa?"
          }
          type={"text"}
          placeholder={"Descreva em poucas palavras"}
          width="md:w-1/2"
          heigt="h-50"
          name={"nome"}
        />

        <TextArea
          label={
            "Descreva como você se sente em relação ao ambiente da empresa."
          }
          type={"text"}
          placeholder={"Descreva em poucas palavras"}
          width="md:w-1/2"
          heigt="h-50"
          name={"nome"}
        />

        <div className="md:w-1/2">
          <Button label={"Enviar"} type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default HealthForm;
