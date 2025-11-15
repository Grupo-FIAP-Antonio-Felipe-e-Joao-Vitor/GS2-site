const DesempregadoModal = ({ selected, setOpen }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="relative w-[95%] max-w-5xl h-[90%] bg-white rounded-2xl shadow-xl overflow-hidden">
                
                
                <div className="p-6 overflow-y-scroll h-full space-y-10">
                    
                    <div className="absolute top-0 left-0 w-full bg-white p-6 border-b flex justify-between items-center">
                        <h2 className="text-3xl font-bold">{selected.nome}</h2>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-4xl font-bold text-gray-600 hover:text-black cursor-pointer"
                        >
                            ×
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mt-24 text-center md:text-left">

                        <img
                            src={selected.foto}
                            className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyan-400"
                        />

                        <div className="flex flex-col gap-2 max-w-full">
                            <span className="text-xl md:text-2xl font-semibold text-gray-700">{selected.cargo}</span>
                            <span className="text-lg md:text-xl text-gray-600">{selected.localização}</span>

                            <span className="text-base md:text-lg font-bold text-cyan-700 bg-cyan-200 px-4 py-1 rounded-full w-fit mx-auto md:mx-0">
                                {selected.area}
                            </span>

                            <p className="text-gray-700 mt-4 max-w-full md:max-w-xl">
                                {selected.resumo}
                            </p>
                        </div>

                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Habilidades Técnicas</h3>
                        <div className="flex flex-wrap gap-2">
                            {selected.habilidadesTecnicas?.map((h) => (
                                <span className="px-3 py-1 bg-gray-200 rounded-full text-gray-800 font-semibold">
                                    {h}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {selected.softSkills?.map((s) => (
                                <span className="px-3 py-1 bg-blue-200 rounded-full text-blue-800 font-semibold">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Experiências</h3>

                        {selected.experiencias?.map((exp) => (
                            <div className="bg-gray-100 p-4 rounded-xl mb-3">
                                <h4 className="text-xl font-bold">{exp.empresa}</h4>
                                <span className="block text-gray-700 text-lg">{exp.cargo}</span>

                                <span className="text-gray-500 text-sm">
                                    {exp.inicio} — {exp.fim}
                                </span>

                                <p className="text-gray-700 mt-2">{exp.descricao}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Formação</h3>
                        {selected.formacao?.map((f) => (
                            <div className="bg-gray-100 p-4 rounded-xl mb-3">
                                <span className="text-xl font-bold">{f.curso}</span>
                                <p className="text-gray-700">{f.instituicao} — {f.ano}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Projetos</h3>
                        {selected.projetos?.map((p) => (
                            <div className="bg-gray-100 p-4 rounded-xl mb-3">
                                <h4 className="text-xl font-bold">{p.titulo}</h4>
                                <p className="text-gray-700">{p.descricao}</p>
                                <a
                                    href={p.link}
                                    className="text-blue-600 hover:underline mt-2 inline-block"
                                    target="_blank"
                                >
                                    Ver projeto →
                                </a>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Certificações</h3>
                        <ul className="list-disc ml-6 text-gray-700">
                            {selected.certificacoes?.map((c) => (
                                <li className="text-lg">{c}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Idiomas</h3>
                        {selected.idiomas?.map((i) => (
                            <p className="text-gray-700 text-lg">
                                <strong>{i.idioma}</strong>: {i.nivel}
                            </p>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Áreas de Interesse</h3>
                        <div className="flex flex-wrap gap-2">
                            {selected.areasInteresses?.map((a) => (
                                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full font-semibold">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DesempregadoModal