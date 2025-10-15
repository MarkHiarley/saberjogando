import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

interface CardQuestionProps {
  categoria: string;
  tipo: string;
  dificuldade: string;
  pergunta: string;
  resposta: string;
}

const CardQuestion: React.FC<CardQuestionProps> = ({
  categoria,
  tipo,
  dificuldade,
  pergunta,
  resposta,
}) => {
  const getCategoriaIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "ortografia": return "📝";
      case "morfologia": return "🔍";
      case "sintaxe": return "🗣️";
      case "semântica": return "💡";
      case "fonologia": return "🎵";
      default: return "📚";
    }
  };

  const getTipoIcon = (t: string) => {
    switch (t.toLowerCase()) {
      case "objetiva": return "🔘";
      case "dissertativa": return "✏️";
      case "interativa": return "⚡";
      default: return "❓";
    }
  };

  const getDificuldadeStars = (dif: string) => {
    const num = parseInt(dif);
    return "⭐".repeat(num) + "☆".repeat(5 - num);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2 items-center flex-1 w-full md:w-auto">
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
          {getCategoriaIcon(categoria)} {categoria}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {getTipoIcon(tipo)} {tipo}
        </span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          {getDificuldadeStars(dificuldade)} ({dificuldade})
        </span>
      </div>

      <div className="flex-1 w-full md:w-auto">
        <p className="font-semibold text-gray-900 break-words">
          {pergunta}
        </p>
      </div>

      <div className="flex gap-2 w-full md:w-auto justify-end">
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
          <Eye className="w-4 h-4" />
        </button>
        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
          <Edit className="w-4 h-4" />
        </button>
        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CardQuestion;
