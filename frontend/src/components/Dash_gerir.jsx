import { useState, useEffect } from "react";
import { listar_usuarios_empresa } from "../services/dashboard";
import CardUsuario from "./CardUsuario";

const Dash_gerir = ({ user }) => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);

  async function listar_usuarios() {
    try {
      const response = await listar_usuarios_empresa(user?.empresa);
      const data = response.data.users || [];
      setLista(data);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    listar_usuarios();
  });

  return (
    <section className="w-full h-full flex justify-center items-start">
      <div className="ml-40 mt-10 w-[80%]">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 tracking-wide">
          Usuários da empresa
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-purple-400 font-medium">Carregando...</span>
          </div>
        ) : lista.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lista.map((usuario) => (
              <CardUsuario key={usuario._id} usuario={usuario}/>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic mt-5">
            Nenhum usuário encontrado para esta empresa.
          </p>
        )}
      </div>
    </section>
  );
};

export default Dash_gerir;
