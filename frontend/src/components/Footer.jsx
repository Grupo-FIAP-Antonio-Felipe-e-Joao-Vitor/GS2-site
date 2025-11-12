import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-[#0a0a0a]/90 border-t border-white/20 text-white py-6 mt-auto">
      <h2 className="text-lg font-semibold">Integrantes do Projeto</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Antonio */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-medium">Antonio Neto</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Grupo-FIAP-Antonio-Felipe-e-Joao-Vitor/GS2-site/commits?author=AntonioNeto18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-neto-2231b7357"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Felipe */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-medium">Felipe Bicaletto</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Grupo-FIAP-Antonio-Felipe-e-Joao-Vitor/GS2-site/commits?author=FelipeBicaletto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/felipebicaletto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Thayná */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-medium">Thayná Simões</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/thaynasimoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/thaynapsimoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-300">
        <a
          href="https://github.com/Grupo-FIAP-Antonio-Felipe-e-Joao-Vitor/GS2-site"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaGithub size={20} />
          <span>Repositório do Projeto</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
