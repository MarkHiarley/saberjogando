"use client";

import { useState } from "react";
import CardQuestion from "./CardQuestion";
import { BookOpen, FileText, Eye, Save, Plus, Search } from "lucide-react";

interface Questao {
  categoria: string;
  tipo: string;
  dificuldade: string;
  pergunta: string;
  options: { [key: string]: string };
  correctLetter: string;
  resposta: string;
  explicacao: string;
}

/*aba de perguntas cadastradas*/

export const QuestionsRegistered: React.FC<{ questoes: Questao[]; onEdit: (index: number, updatedQuestion: Questao) => void; onDelete: (index: number) => void }> = ({
  questoes,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-8 mt-8">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">📚</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Questões Cadastradas
        </h2>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Pesquisar questões..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        {questoes.map((questao, index) => (
          <CardQuestion
            key={index}
            categoria={questao.categoria}
            tipo={questao.tipo}
            dificuldade={questao.dificuldade}
            pergunta={questao.pergunta}
            resposta={questao.resposta}
            options={questao.options}
            correctLetter={questao.correctLetter}
            explicacao={questao.explicacao}
            onEdit={onEdit}
            onDelete={onDelete}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

/*local onde as perguntas vão ficar */
export const NewQuestion = () => {
  const questoesExemplo: Questao[] = [
    /*onde as questões vão ficar*/
  ];

  const [questoes, setQuestoes] = useState<Questao[]>(questoesExemplo);
  const [formError, setFormError] = useState<string>("");

  const categoriaMap = new Map([
    ["ortografia", "Ortografia"],
    ["morfologia", "Morfologia"],
    ["sintaxe", "Sintaxe"],
    ["semantica", "Semântica"],
    ["fonologia", "Fonologia"],
  ]);

  const tipoMap = new Map([
    ["objetiva", "Objetiva"],
    ["dissertativa", "Dissertativa"],
    ["interativa", "Interativa"],
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    const formData = new FormData(e.currentTarget);
    const categoria = categoriaMap.get(formData.get("trilha") as string) || "";
    const tipo = tipoMap.get(formData.get("tipo") as string) || "";
    const dificuldade = formData.get("dificuldade") as string;
    const pergunta = formData.get("pergunta") as string;
    const options: { [key: string]: string } = {};
    ["A", "B", "C", "D", "E"].forEach(letter => {
      const value = formData.get(letter) as string;
      if (value) options[letter] = value;
    });
    const correctLetter = formData.get("Letra-A") as string;
    const resposta = correctLetter && options[correctLetter] ? options[correctLetter] : "";
    const explicacao = formData.get("explicacao") as string || "";

    if (!categoria) {
      setFormError("Por favor, selecione uma trilha.");
      return;
    }
    if (!tipo) {
      setFormError("Por favor, selecione o tipo de questão.");
      return;
    }
    if (!dificuldade) {
      setFormError("Por favor, selecione a dificuldade.");
      return;
    }
    if (!pergunta.trim()) {
      setFormError("Por favor, digite a pergunta.");
      return;
    }
    if (tipo === "Objetiva" && !resposta) {
      setFormError("Por favor, selecione a resposta correta para questões objetivas.");
      return;
    }

    const novaQuestao: Questao = {
      categoria,
      tipo,
      dificuldade,
      pergunta,
      options,
      correctLetter,
      resposta,
      explicacao,
    };
    setQuestoes([...questoes, novaQuestao]);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gray-200 w-full p-10 text-black flex flex-col items-center gap-4">
      <div className="max-w-4xl mx-auto w-full">
        <div>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Banco de Questões
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Cite e gerencie questões para suas trilhas
            </p>
          </div>
        </div>

        {/* Formulário de criação de questões */}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w- mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Plus className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Nova Questão
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-medium mb-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" />
                Trilha
              </label>
              <select
                name="trilha"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione uma trilha</option>
                <option value="ortografia">📝 Ortografia</option>
                <option value="morfologia">🔍 Morfologia</option>
                <option value="sintaxe">🗣️ Sintaxe</option>
                <option value="semantica">💡 Semântica</option>
                <option value="fonologia">🎵 Fonologia</option>
              </select>
            </div>
            <div>
              <label className=" font-medium mb-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" />
                Tipo de Questão
              </label>
              <select
                name="tipo"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione o tipo</option>
                <option value="objetiva">🔘 Objetiva</option>
                <option value="dissertativa">✏️ Dissertativa</option>
                <option value="interativa">⚡ Interativa</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="font-medium mb-1 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              Pergunta
            </label>
            <textarea
              name="pergunta"
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Digite a pergunta..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col space-y-3">
              <label className="block font-medium mb-1">Opções de Resposta</label>

                <div className="flex flex-col gap-3">
                <input
                  name="A"
                  type="text"
                  placeholder="Opção A"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  name="B"
                  type="text"
                  placeholder="Opção B"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  name="C"
                  type="text"
                  placeholder="Opção C"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  name="D"
                  type="text"
                  placeholder="Opção D"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  name="E"
                  type="text"
                  placeholder="Opção E"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                </div>
              </div>

            <div className="flex flex-col space-y-4">
              <label className=" font-medium mb-1 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              Resposta Correta
              </label>

              <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              name="Letra-A"
              id=""
              >
              <option value="">Selecione a resposta correta</option>
              <option value="A">Opção A</option>
              <option value="B">Opção B</option>
              <option value="C">Opção C</option>
              <option value="D">Opção D</option>
              <option value="E">Opção E</option>
              </select>

              <label className=" font-medium mb-1 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              Dificuldade (1–5)
              </label>
              <select
              name="dificuldade"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              >
              <option value="">Selecione</option>
              <option value="1">⭐☆☆☆☆ (Muito fácil)</option>
              <option value="2">⭐⭐☆☆☆ (Fácil)</option>
              <option value="3">⭐⭐⭐☆☆ (Médio)</option>
              <option value="4">⭐⭐⭐⭐☆ (Difícil)</option>
              <option value="5">⭐⭐⭐⭐⭐ (Muito difícil)</option>
              </select>
            </div>

            <div className="mb-6">
              <label className=" font-medium mb-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" />
                Explicação da Resposta
              </label>
              <textarea
                name="explicacao"
                rows={3}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Forneça uma explicação detalhada da resposta..."
              ></textarea>
            </div>
          </div>
          {formError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {formError}
            </div>
          )}
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <Save className="w-4 h-4" />
              Salvar Questão
            </button>
          </div>
        </form>

        {/* Seção de questões cadastradas */}
        <QuestionsRegistered
          questoes={questoes}
          onEdit={(index, updatedQuestion) => {
            const updatedQuestoes = [...questoes];
            updatedQuestoes[index] = updatedQuestion;
            setQuestoes(updatedQuestoes);
          }}
          onDelete={(index) => {
              setQuestoes(questoes.filter((_, i) => i !== index));
          }}
        />
      </div>
    </div>
  );
};
