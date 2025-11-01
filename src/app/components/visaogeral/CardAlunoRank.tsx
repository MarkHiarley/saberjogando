export interface Aluno {
  id: number;
  rank: number;
  name: string;
  avatar: string;
  level: number;
  score: number;
}

export const CardAlunoRank = ({ aluno }: { aluno: Aluno }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
      <div className="flex items-center space-x-4">
        {/* Número do ranking */}
        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg font-semibold text-sm">
          {aluno.rank}
        </div>
        
        {/* Avatar */}
        <div className="text-2xl">
          {aluno.avatar}
        </div>
        
        {/* Nome e nível */}
        <div>
          <h3 className="font-semibold text-gray-800">{aluno.name}</h3>
          <p className="text-sm text-gray-500">Nível {aluno.level}</p>
        </div>
      </div>
      
      {/* Pontuação */}
      <div className="text-right">
        <p className="font-bold text-gray-800 text-lg">{aluno.score}</p>
      </div>
    </div>
  );
};