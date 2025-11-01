export interface Atividade {
  id: number;
  nome: string;
  action: string;
  avatar: string;
  time: string;
}

export const CardAtividadeRecente = ({ atividade }: { atividade: Atividade }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800 text-base">{atividade.nome}</h4>
        <span className="text-gray-400 text-sm font-medium">{atividade.time}</span>
      </div>
      <p className="text-gray-600 text-sm">{atividade.action}</p>
    </div>
  );
};