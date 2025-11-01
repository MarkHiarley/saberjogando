// Você pode colocar este código em um arquivo .tsx na sua aplicação React

export const StatsCards = () => {
  return (
    // Container que organiza os cards em um grid responsivo
    // 1 coluna em telas pequenas, 2 em médias, 4 em telas grandes
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

      {/* Card 1: Total de Alunos */}
      <div className="bg-blue-500 p-5 rounded-2xl text-white">
        <div className="flex items-center gap-3">
          {/* Ícone de Pessoas (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="text-3xl font-bold">3</span>
        </div>
        <p className="text-sm font-medium mt-1">Total de Alunos</p>
      </div>

      {/* Card 2: Média de Trilhas */}
      <div className="bg-green-500 p-5 rounded-2xl text-white">
        <div className="flex items-center gap-3">
          {/* Ícone de Alvo (SVG) */}
          <svg
             xmlns="http://www.w3.org/2000/svg"
             width="32"
             height="32"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
            >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <span className="text-3xl font-bold">3</span>
        </div>
        <p className="text-sm font-medium mt-1">Média de Trilhas</p>
      </div>

      {/* Card 3: Alunos Ativos */}
      <div className="bg-orange-500 p-5 rounded-2xl text-white">
        <div className="flex items-center gap-3">
          {/* Ícone de Relógio (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-3xl font-bold">3</span>
        </div>
        <p className="text-sm font-medium mt-1">Alunos Ativos</p>
      </div>

      {/* Card 4: Progresso Médio */}
      <div className="bg-purple-500 p-5 rounded-2xl text-white">
        <div className="flex items-center gap-3">
          {/* Ícone de Troféu (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
          <span className="text-3xl font-bold">13%</span>
        </div>
        <p className="text-sm font-medium mt-1">Progresso Médio</p>
      </div>

    </div>
  );
};