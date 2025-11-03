"use client";

import { useState } from "react";
import { Eye, Save } from "lucide-react";
import { QuestionsList } from "@/app/professor/components/QuestionList";

export const Questions = () => {
  const [formData, setFormData] = useState({
    trilha: "",
    tipo: "",
    pergunta: "",
    opcoes: { A: "", B: "", C: "", D: "" },
    correta: "",
    dificuldade: "",
    explicacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (["A", "B", "C", "D"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        opcoes: { ...prev.opcoes, [name]: value },
      }));

      console.log(formData);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nova questão:", formData);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Criar Nova Questão</h1>
      <p className="text-gray-500 mb-8">
        Adicione questões ao banco de dados da sua turma
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Linha 1: Trilha e Tipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Trilha
            </label>
            <select
              name="trilha"
              value={formData.trilha}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Selecione uma trilha</option>
              <option value="ortografia">Ortografia</option>
              <option value="morfologia">Morfologia</option>
              <option value="sintaxe">Sintaxe</option>
              <option value="semantica">Semântica</option>
              <option value="fonologia">Fonologia</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tipo de Questão
            </label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Selecione o tipo</option>
              <option value="objetiva">Objetiva</option>
              <option value="dissertativa">Dissertativa</option>
              <option value="interativa">Interativa</option>
            </select>
          </div>
        </div>

 
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Pergunta
          </label>
          <textarea
            name="pergunta"
            value={formData.pergunta}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            placeholder="Digite a pergunta..."
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Opções de Resposta (para objetivas)
            </label>
            <div className="flex flex-col gap-3">
              {["A", "B", "C", "D"].map((opcao) => (
                <input
                  key={opcao}
                  name={opcao}
                  value={formData.opcoes[opcao as "A" | "B" | "C" | "D"]}
                  onChange={handleChange}
                  placeholder={`Opção ${opcao}`}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Resposta Correta
            </label>
            <input
              type="text"
              name="correta"
              value={formData.correta}
              onChange={handleChange}
              placeholder="Digite a resposta correta"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 mb-4"
            />

            <label className="block text-gray-700 font-medium mb-2">
              Dificuldade (1–5)
            </label>
            <select
              name="dificuldade"
              value={formData.dificuldade}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Selecione</option>
              <option value="1">1 - Muito fácil</option>
              <option value="2">2 - Fácil</option>
              <option value="3">3 - Médio</option>
              <option value="4">4 - Difícil</option>
              <option value="5">5 - Muito difícil</option>
            </select>
          </div>
        </div>


        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Explicação da Resposta
          </label>
          <textarea
            name="explicacao"
            value={formData.explicacao}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            placeholder="Forneça uma explicação detalhada da resposta..."
            rows={3}
          />
        </div>


        <div className="flex justify-end gap-4 pt-4">
         
          <button
            type="submit"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <Save className="w-4 h-4" />
            Salvar Questão
          </button>
        </div>
      </form>

      <div className="mt-16">
        <QuestionsList />
      </div>
    </div>
  );
};
