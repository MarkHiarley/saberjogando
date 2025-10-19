// Importa a biblioteca React para usar JSX e componentes
import React from 'react';

// Tipagens simples para os itens
interface RankingItemProps {
  rank: number;
  name: string;
  avatar: string;
  level: number;
  score: number;
}
interface ActivityItemProps {
  avatar: string;
  name: string;
  action: string;
  time: string;
}

// Função para retornar o ícone de medalha conforme o rank
const getMedalIcon = (rank: number) => {
  if (rank === 1) return <span title="1º Lugar" className="text-yellow-400 text-xl">🥇</span>;
  if (rank === 2) return <span title="2º Lugar" className="text-gray-400 text-xl">🥈</span>;
  if (rank === 3) return <span title="3º Lugar" className="text-orange-400 text-xl">🥉</span>;
  return <span className="text-gray-400 font-bold">{rank}</span>;
};

// Componente de item do ranking (fora do componente principal)
const RankingItem: React.FC<RankingItemProps> = ({ rank, name, avatar, level, score }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-2">
      {getMedalIcon(rank)}
      <span className="text-xl">{avatar}</span>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-gray-500">Nível {level}</div>
      </div>
    </div>
    <div className="flex items-center gap-1 text-orange-500 font-semibold">
      <span className="text-lg">⚡</span>
      <span>{score}</span>
    </div>
  </div>
);

// Componente de item de atividade (fora do componente principal)
const ActivityItem: React.FC<ActivityItemProps> = ({ avatar, name, action, time }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-2">
      <span className="text-xl">{avatar}</span>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-gray-500">{action}</div>
      </div>
    </div>
    <span className="text-xs text-gray-400">{time}</span>
  </div>
);

// --- Componente principal ---
export const MeuComponente = () => {
  const progressoMedio = 25;
  const totalAlunos = 5;
  const mediaTrilhas = 3;
  const alunosAtivos = 3;

  // Dados fictícios para ranking e atividades (mantidos no componente)
  const ranking = [
    { rank: 1, name: "Maria Oliveira", avatar: "🦋", level: 6, score: 1420 },
    { rank: 2, name: "Ana Silva", avatar: "🐱", level: 5, score: 1250 },
    { rank: 3, name: "Pedro Costa", avatar: "🦁", level: 3, score: 890 },
  ];

  const activities = [
    { avatar: "🐱", name: "Ana Silva", action: "Completou Trilha de Ortografia", time: "2h atrás" },
    { avatar: "🦋", name: "Maria Oliveira", action: 'Conquistou medalha "Streak Champion"', time: "1 dia atrás" },
    { avatar: "🦁", name: "Pedro Costa", action: "Iniciou Trilha de Sintaxe", time: "2 dias atrás" },
  ];

  return (
    <div className="bg-white">
      {/* Visão Geral - Cards com informações resumidas */}
      <section id="visao-geral">
        <div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Total de Alunos */}
            <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                {/* Ícone de usuários, representando alunos */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {/* Número de alunos */}
                <h3 className="text-3xl font-bold">{totalAlunos}</h3>
              </div>
              {/* Descrição do card */}
              <p className="text-lg">Total de Alunos</p>
            </div>

            {/* Card 2: Média de Trilhas */}
            <div className="bg-green-500 text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                {/* Ícone de trilhas/caminhos */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {/* Valor da média de trilhas */}
                <h3 className="text-3xl font-bold">{mediaTrilhas}</h3>
              </div>
              {/* Descrição do card */}
              <p className="text-lg">Média de Trilhas</p>
            </div>

            {/* Card 3: Alunos Ativos */}
            <div className="bg-orange-500 text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                {/* Ícone de check, representando alunos ativos */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {/* Número de alunos ativos */}
                <h3 className="text-3xl font-bold">{alunosAtivos}</h3>
              </div>
              {/* Descrição do card */}
              <p className="text-lg">Alunos Ativos</p>
            </div>

            {/* Card 4: Progresso Médio */}
            <div className="bg-purple-500 text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <img src="https://images.icon-icons.com/1919/PNG/512/bigwinnerscup_121959.png" alt="Troféu" className="h-8 w-8 mb-4" />
              <div>
                {/* Título do card */}
                <p className="text-lg">Progresso Médio</p>
                {/* Valor do progresso médio */}
                <h3 className="text-3xl font-bold my-2">{progressoMedio}%</h3>
              </div>
              {/* Barra de progresso visual */}
              <div className="w-full bg-white/30 rounded-full h-2.5">
                {/* Barra preenchida proporcional ao progresso */}
                <div className="bg-white h-2.5 rounded-full" style={{ width: `${progressoMedio}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performers e Atividade Recente (usa os componentes movidos para o topo) */}
      <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="text-xl">🏆</span>
              Top Performers
            </div>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">8º Ano A - Manhã</span>
          </div>
          <div className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-lg">🏆</span>
            Ranking da Turma
          </div>
          <div>
            {ranking.map(item => (
              <RankingItem key={item.rank} {...item} />
            ))}
          </div>
        </div>

        {/* Atividade Recente */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-2 font-bold text-lg mb-2">
            <span className="text-xl">🕒</span>
            Atividade Recente
          </div>
          <div>
            {activities.map((item, idx) => (
              <ActivityItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};