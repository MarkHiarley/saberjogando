"use client";

import { useState } from "react";
import {
  Home,
  BookOpen,
  FileText,
  BarChart2,
  Users,
  User,
  LogOut,
} from "lucide-react";
import { Questions } from "@/app/professor/components/Questions";

export const LayOut = () => {
  const [professor] = useState("João Santos");
  const [alunos] = useState(3);
  const [navSelected, setNavSelected] = useState("Visão Geral");

  const navItems = [
    { name: "Visão Geral", icon: <Home size={18} /> },
    { name: "Trilhas", icon: <BookOpen size={18} /> },
    { name: "Questões", icon: <FileText size={18} /> },
    { name: "Conteúdo", icon: <BookOpen size={18} /> },
    { name: "Relatórios", icon: <BarChart2 size={18} /> },
    { name: "Turmas", icon: <Users size={18} /> },
    { name: "Perfil", icon: <User size={18} /> },
  ];


  const renderContent = () => {
    switch (navSelected) {
      case "Visão Geral":
        return <p>📊 Aqui você vê um resumo geral das suas turmas e atividades.</p>;
      case "Trilhas":
        return <p>🚀 Acompanhe o progresso das trilhas de aprendizagem dos alunos.</p>;
      case "Questões":
        return <Questions />;   
      case "Conteúdo":
        return <p>📚 Gerencie os conteúdos e materiais didáticos.</p>;
      case "Relatórios":
        return <p>📈 Gere relatórios de desempenho e frequência.</p>;
      case "Turmas":
        return <p>👩‍🏫 Visualize e gerencie suas turmas.</p>;
      case "Perfil":
        return <p>⚙️ Ajuste suas informações de perfil e preferências.</p>;
      default:
        return <p>Selecione uma opção no menu.</p>;
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-50">

      <header className="flex items-center justify-between bg-white shadow-sm px-6 py-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 text-white p-3 rounded-2xl">
            <Users className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Dashboard do Professor</span>
            <span className="text-green-700 font-medium">
              Bem-vindo, Prof. {professor}!
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-green-500 text-white font-medium px-4 py-2 rounded-full shadow-sm hover:bg-green-600 transition cursor-pointer">
            <Users size={18} /> {alunos} Alunos
          </button>
          <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <LogOut size={18} /> Sair
          </button>
        </div>
      </header>

      <nav className="bg-gray-100 mt-2 flex justify-center gap-8 py     -3 text-gray-600 font-medium flex-wrap ">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setNavSelected(item.name)}
            className={`flex items-center gap-2 cursor-pointer pb-1 transition ${
              navSelected === item.name
                ? "text-black border-b-2 border-black"
                : "hover:text-black"
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>

      <main className="p-8">   
        <div className="text-gray-600 text-base">{renderContent()}</div>
      </main>
    </div>
  );
};
