import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Aside from "../components/Aside";

const Formulario = ({ user }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulário enviado com sucesso!");
    navigate("/");
  };

  const perguntas = [
    {
      titulo: "1. Protagonismo e responsabilidade",
      questoes: [
        "Você identifica oportunidades de melhoria no seu trabalho?",
        "Você costuma agir antes que os problemas aconteçam?",
        "Você assume responsabilidade pelos impactos das suas ações no negócio?"
      ]
    },
    {
      titulo: "2. Análise e uso de dados",
      questoes: [
        "Você analisa dados de forma estruturada no seu dia a dia?",
        "Você identifica padrões e tendências a partir das informações disponíveis?",
        "Você usa esses dados para orientar suas decisões e ações?"
      ]
    },
    {
      titulo: "3. Relacionamento e colaboração",
      questoes: [
        "Você constrói relacionamentos de confiança com colegas e líderes?",
        "Você pratica escuta ativa nas interações com outras pessoas?",
        "Você atua de forma colaborativa para manter um ambiente saudável?"
      ]
    },
    {
      titulo: "4. Iniciativa e alinhamento estratégico",
      questoes: [
        "Você propõe soluções alinhadas aos objetivos da empresa?",
        "Você demonstra iniciativa para buscar conhecimento sobre a estratégia organizacional?",
        "Você incorpora boas práticas e aprendizados de diferentes fontes no seu trabalho?"
      ]
    },
    {
      titulo: "5. Resiliência e foco",
      questoes: [
        "Você mantém resiliência diante de desafios?",
        "Você consegue manter o foco mesmo em momentos de pressão?",
        "Você identifica prioridades e garante que as atividades mais importantes sejam executadas?"
      ]
    },
    {
      titulo: "6. Qualidade e entrega de resultados",
      questoes: [
        "Você entrega seus trabalhos com qualidade?",
        "Você costuma cumprir os prazos estabelecidos?",
        "Você acredita ter domínio técnico adequado para executar suas atividades?"
      ]
    }
  ];

  const opcoes = ["Nunca", "Às vezes", "Sempre"];

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Aside user={user} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 p-10 flex flex-col items-center gap-8"
      >
        <h1 className="text-4xl font-bold text-center">Formulário de Clima</h1>

        {perguntas.map((grupo, index) => (
          <div
            key={index}
            className="w-full md:w-2/3 bg-slate-800 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{grupo.titulo}</h2>
            {grupo.questoes.map((pergunta, i) => (
              <div key={i} className="mb-4">
                <p className="mb-2">{pergunta}</p>
                <div className="flex gap-5">
                  {opcoes.map((opcao) => (
                    <label key={opcao} className="flex items-center gap-2">
                      <input
                        type="radio"
                        value={opcao}
                        {...register(`${grupo.titulo}_${i}`)}
                      />
                      {opcao}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <button
          type="submit"
          className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-bold text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
