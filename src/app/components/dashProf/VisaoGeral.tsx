import { StatsCards } from "../visaogeral/StatsCards";
import { CardAlunoRank } from "../visaogeral/CardAlunoRank";
import { CardAtividadeRecente } from "../visaogeral/CardAtvdrecente";
import type { Aluno } from "../visaogeral/CardAlunoRank";
import type { Atividade } from "../visaogeral/CardAtvdrecente";

export const MeuComponente = () => {
  const alunos: Aluno[] = [
    { id: 1, rank: 1, name: "Maria Oliveira", avatar: "🦋", level: 6, score: 1420 },
    { id: 2, rank: 2, name: "Ana Silva", avatar: "🐱", level: 5, score: 1250 },
    { id: 3, rank: 3, name: "Pedro Costa", avatar: "🦁", level: 3, score: 890 },
  ];

  const atividades: Atividade[] = [
    { id: 1, nome: "Ana Silva", avatar: "🐱", action: "Completou Trilha de Ortografia", time: "2h atrás" },
    { id: 2, nome: "Maria Oliveira", avatar: "🦋", action: 'Conquistou medalha "Streak Champion"', time: "1 dia atrás" },
    { id: 3, nome: "Pedro Costa", avatar: "🦁", action: "Iniciou Trilha de Sintaxe", time: "2 dias atrás" },
  ];

  return (
    // Container principal da página
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      
      {/* --- NOVO CONTAINER VERTICAL PRINCIPAL --- */}
      {/* Este div agora organiza a página em seções verticais */}
      <div className="flex flex-col gap-8">

        {/* ========================================= */}
        {/* SEÇÃO 1: STATS CARDS (LARGURA TOTAL)    */}
        {/* ========================================= */}
        <StatsCards />

        {/* ======================================================== */}
        {/* SEÇÃO 2: CONTAINER DAS DUAS COLUNAS (RANKING E ATIVIDADE) */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* COLUNA DA ESQUERDA (60%) */}
          <div className="flex w-full lg:w-[60%] flex-col gap-6">
            
            {/* Cabeçalho da coluna */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                <h1 className="text-xl font-bold text-gray-800">Top Performers</h1>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 shadow-sm">
                8º Ano A - Manhã
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>

            {/* Card de Ranking da Turma (agora o único card aqui) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                <h3 className="text-lg font-semibold text-gray-800">Ranking da Turma</h3>
              </div>
              <div className="flex flex-col gap-4">
                {alunos.map((aluno) => (
                  <CardAlunoRank key={aluno.id} aluno={aluno} />
                ))}
              </div>
            </div>
          </div>

          {/* COLUNA DA DIREITA (40%) */}
          <div className="flex w-full lg:w-[40%] flex-col gap-6">
            
            {/* Cabeçalho da coluna */}
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <h2 className="text-xl font-bold text-gray-800">Atividade Recente</h2>
            </div>

            {/* Card de Atividades */}
            <div className="bg-white p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex flex-col">
                {atividades.map((atividade) => (
                  <CardAtividadeRecente key={atividade.id} atividade={atividade} />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};