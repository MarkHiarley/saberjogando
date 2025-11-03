import React, { useState } from "react";
import { Eye, Edit, Trash2, X } from "lucide-react";

interface CardQuestionProps {
  categoria: string;
  tipo: string;
  dificuldade: string;
  pergunta: string;
  resposta: string;
  options?: { [key: string]: string };
  correctLetter?: string;
  explicacao?: string;
  onEdit?: (index: number, updatedQuestion: any) => void;
  onDelete?: (index: number) => void;
  index: number;
}

const CardQuestion: React.FC<CardQuestionProps> = ({
  categoria,
  tipo,
  dificuldade,
  pergunta,
  resposta,
  options,
  correctLetter,
  explicacao,
  onEdit,
  onDelete,
  index,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(pergunta);
  const [editedOptions, setEditedOptions] = useState(options || {});
  const [editedCorrectLetter, setEditedCorrectLetter] = useState(correctLetter || "");
  const [editedExplicacao, setEditedExplicacao] = useState(explicacao || "");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
    <>
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
          {editMode ? (
            <div className="space-y-4">
              <textarea
                value={editedQuestion}
                onChange={(e) => setEditedQuestion(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Pergunta"
              />
              {tipo === "Objetiva" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Opções de Resposta</label>
                  {["A", "B", "C", "D", "E"].map(letter => (
                    <input
                      key={letter}
                      type="text"
                      value={editedOptions[letter] || ""}
                      onChange={(e) => setEditedOptions({...editedOptions, [letter]: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder={`Opção ${letter}`}
                    />
                  ))}
                  <select
                    value={editedCorrectLetter}
                    onChange={(e) => setEditedCorrectLetter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione a resposta correta</option>
                    {["A", "B", "C", "D", "E"].map(letter => (
                      <option key={letter} value={letter}>Opção {letter}</option>
                    ))}
                  </select>
                </div>
              )}
              <textarea
                value={editedExplicacao}
                onChange={(e) => setEditedExplicacao(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={2}
                placeholder="Explicação da resposta"
              />
            </div>
          ) : (
            <p className="font-semibold text-gray-900 break-words">
              {pergunta}
            </p>
          )}
        </div>
        <div className="flex gap-2 w-full md:w-auto justify-end">
          {editMode ? (
            
      <>
              <button
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                onClick={() => {
                  const updatedResposta = editedCorrectLetter && editedOptions[editedCorrectLetter] ? editedOptions[editedCorrectLetter] : "";
                  onEdit?.(index, {
                    categoria,
                    tipo,
                    dificuldade,
                    pergunta: editedQuestion,
                    resposta: updatedResposta,
                    options: editedOptions,
                    correctLetter: editedCorrectLetter,
                    explicacao: editedExplicacao
                  });
                  setEditMode(false);
                }}
              >
                Salvar
              </button>
              <button
                className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => {
                  setEditedQuestion(pergunta);
                  setEditedOptions(options || {});
                  setEditedCorrectLetter(correctLetter || "");
                  setEditedExplicacao(explicacao || "");
                  setEditMode(false);
                }}
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                onClick={() => setEditMode(true)}
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                onClick={() => setShowDeleteModal(true)}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Excluir Questão
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Tem certeza de que deseja excluir esta questão? Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition"
                onClick={() => {
                  onDelete?.(index);
                  setShowDeleteModal(false);
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardQuestion;
