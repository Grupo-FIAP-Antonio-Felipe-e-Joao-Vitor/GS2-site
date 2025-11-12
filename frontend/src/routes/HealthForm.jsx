import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import TextArea from "../components/TextArea";
import { post_health_form, salvar_recomendacoes } from "../services/Forms";
import { useForm } from "react-hook-form";

const HealthForm = ({ user }) => {

  const navigate = useNavigate()
  const [recomendacoes, setRecomendacoes] = useState([]);
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {

    if (!user) {
      alert("Registre-se primeiro.")
      navigate("/login")
    }
  }, [user, navigate])

  async function onSubmit(data) {

    try {

      data.atuacao = user.atuacao
      data.empresa = user.empresa

      const response = await post_health_form(data);

      if (response.status === 200) {

        alert(response.data.message);
        setRecomendacoes(response.data.analise.recomendacoes);
        
        await salvar_recomendacoes ({
          "recomendacoes": response.data.analise.recomendacoes
        }, user._id)


        reset();
        
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="flex flex-col py-5 w-full min-h-screen bg-slate-900">

      <h1 className="text-4xl text-white uppercase font-bold text-center">Olá {user?.nome}</h1>

      <form
        className="w-full p-5 flex flex-col gap-2 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProgressBar
          label={"Como você avalia sua carga de trabalho atual?"}
          minLabel={"Muito leve"}
          maxLabel={"Muito alta"}
          width="md:w-1/2"
          name={"carga"}
          register={register}
        />

        <ProgressBar
          label={
            "Como está seu nível de estresse no trabalho nesta semana?"
          }
          minLabel={"Pouco"}
          maxLabel={"Muito"}
          width="md:w-1/2"
          name={"estresse"}
          register={register}
        />

        <ProgressBar
          label={
            "Você sente que suas contribuições são reconhecidas pela empresa?"
          }
          minLabel={"Nunca"}
          maxLabel={"Sempre"}
          width="md:w-1/2"
          name={"reconhecimento"}
          register={register}
        />

        <ProgressBar
          label={
            "Como você avaliaria a comunicação entre sua equipe e a liderança?"
          }
          minLabel={"Muito ruim"}
          maxLabel={"Ótima"}
          width="md:w-1/2"
          name={"comunicacao"}
          register={register}
        />

        <TextArea
          label={
            "Quais fatores têm mais impactado seu bem-estar no trabalho ultimamente?"
          }
          type={"text"}
          placeholder={"Descreva em poucas palavras"}
          width="md:w-1/2"
          heigt="h-50"
          name={"impacto"}
          register={register}
        />

        <TextArea
          label={
            "O que você acredita que poderia melhorar seu dia a dia na empresa?"
          }
          type={"text"}
          placeholder={"Descreva em poucas palavras"}
          width="md:w-1/2"
          heigt="h-50"
          name={"melhorias"}
          register={register}
        />

        <TextArea
          label={
            "Descreva como você se sente em relação ao ambiente da empresa."
          }
          type={"text"}
          placeholder={"Descreva em poucas palavras"}
          width="md:w-1/2"
          heigt="h-50"
          name={"sentimentos"}
          register={register}
        />

        <div className="w-full md:w-1/2">
          <Button label={"Enviar"} type={"submit"} />
        </div>
      </form>

      {recomendacoes.length > 0 && (
        <div className="md:bg-slate-800 md:border-2 md:border-slate-600 text-white mt-5 p-5 rounded-xl md:w-1/2 mx-auto">
          <h2 className="text-2xl font-semibold mb-3 text-center">
            Recomendações para você
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {recomendacoes.map((item, index) => (
              <li className="text-xl" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default HealthForm;
