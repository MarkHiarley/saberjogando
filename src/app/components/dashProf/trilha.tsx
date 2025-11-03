import { CardTrilha } from "./CardTrilha"


export const AbaTrilha = () => {
    return (
       <div className="flex flex-col items-center text-center text-black font-sans">
          
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                23 Trilhas de Português
            </h1>

          
            <p className="text-lg text-gray-600 mb-8">
                Complete todas as trilhas para dominar a língua portuguesa
            </p>

          
            <CardTrilha />
        </div>

    )
}

