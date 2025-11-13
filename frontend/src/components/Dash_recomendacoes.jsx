import CardRecomendacao from "./CardRecomendacao";

const Dash_recomendacoes = ({ user }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <section className="w-[80%] mt-10 flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-blue-400 mb-2 tracking-wide">
          Recomendações para você
        </h2>

        {user?.recomendacoes?.length > 0 ? (
          user.recomendacoes.map((r, i) => (
            <CardRecomendacao key={i} recomendacao={r} />
          ))
        ) : (
          <p className="text-gray-300 italic mt-5">
            Nenhuma recomendação disponível no momento.
          </p>
        )}
      </section>
    </div>
  );
};

export default Dash_recomendacoes;
