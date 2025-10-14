export const CardTrilha = () => {
    return (
        <div className="bg-white border border-green-100 rounded-3xl shadow-md hover:shadow-xl p-6 w-80 transition-all duration-500 hover:-translate-y-1">
            
            {/* Cabeçalho */}
            <div className="flex justify-between items-center mb-4">
                <div className="text-4xl drop-shadow-sm">✏️</div>
                <span className="bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shadow-sm border border-green-200">
                    Básico
                </span>
            </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                Ortografia
            </h2>

            {/* Descrição */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Domine as regras de escrita correta das palavras e avance sua jornada no português!
            </p>

            {/* Barra de progresso */}
            <div className="mb-6">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Progresso</span>
                    <span>20/20</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                        className="h-3 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 rounded-full transition-all duration-700"
                        style={{ width: "100%" }}
                    ></div>
                </div>
            </div>

            {/* Rodapé */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <p className="text-sm text-gray-700 flex items-center gap-1">
                        ⚡ <span className="font-semibold text-blue-600">+100 XP</span>
                    </p>
                   
                </div>

                <button className="ml-6   bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:brightness-110 transition-all duration-300 shadow-sm">
                    Ortografia
                </button>
            </div>
        </div>
    );
};
