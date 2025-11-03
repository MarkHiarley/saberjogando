"use client";

import { Eye, Edit2, Trash2, Search, Pencil, Star } from "lucide-react";
import { useState } from "react";
import { ServiceExcludeQuestion } from "@/app/professor/services/ExcludeQuestion";

export const QuestionsList = () => {
  const [search, setSearch] = useState("");

  const questoes = [
    {
      id: 1,
      trilha: "Ortografia",
      tipo: "Objetiva",
      dificuldade: "Médio",
      estrelas: 3,
      pergunta:
        'Qual é a forma correta de escrever a palavra que significa "ato de excluir"?',
      resposta: "exceção",
    },
    {
      id: 2,
      trilha: "Ortografia",
      tipo: "Objetiva",
      dificuldade: "Médio",
      estrelas: 3,
      pergunta:
        'Qual é a forma correta de escrever a palavra que significa "ato de excluir"?',
      resposta: "exceção",
    },
    {
      id: 3,
      trilha: "Ortografia",
      tipo: "Objetiva",
      dificuldade: "Médio",
      estrelas: 3,
      pergunta:
        'Qual é a forma correta de escrever a palavra que significa "ato de excluir"?',
      resposta: "exceção",
    },
  ];

  const filtered = questoes.filter((q) =>
    q.pergunta.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Questões Cadastradas</h1>
        <div className="flex items-center gap-2 bg-gray-50 border rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Buscar questões..."
            className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-48"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {filtered.map((questao) => (
          <div
            key={questao.id}
            className="flex justify-between items-start border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col gap-2">
              {/* TAGS */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  ✏️ {questao.trilha}
                </span>

                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {questao.tipo}
                </span>

                <span className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {Array.from({ length: questao.estrelas }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  {questao.dificuldade}
                </span>
              </div>

              {/* PERGUNTA E RESPOSTA */}
              <p className="text-gray-800 font-medium mt-1">
                <strong>Pergunta:</strong> {questao.pergunta}
              </p>
              <p className="text-gray-600">
                <strong>Resposta:</strong> {questao.resposta}
              </p>
            </div>

            {/* BOTÕES */}
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white border rounded-lg hover:bg-gray-100 shadow-sm transition">
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white border rounded-lg hover:bg-gray-100 shadow-sm transition">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-sm transition"
              onClick={() => ServiceExcludeQuestion(questao.id)}
              
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500 text-center py-10">
            Nenhuma questão encontrada.
          </p>
        )}
      </div>
    </div>
  );
};
