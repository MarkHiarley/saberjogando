import React from "react"
import { QuestionCard } from "./CardQuestion"

export const Estatc =()=>{
    return(
        <div className="bg-white w-full h-screen p-10 text-black">
            <div>
                <p>Crie e gerencie questões para sua Trilha</p>
                <button>Criar questão</button>
            <div>
                <fieldset>
                    <form action="">
                        <p>Criar Nova Questão</p>
                        <label htmlFor="Trilha">
                            <select name="" id="">
                                <option value="">Selecione a Trilha</option>
                                <option value="">Ortografia</option>
                                <option value="">Morfologia</option>
                                <option value="">Sintaxe</option>
                                <option value="">Semântica</option>
                                <option value="">Fonologia</option>
                            </select>
                        </label>

                        <label htmlFor="Questao">
                            <select name="" id="">
                                <option value="">Selecione o tipo</option>
                                <option value="">Objetiva (Multipla Escolha)</option>
                                <option value="">Discursiva</option>
                                <option value="">Interativa</option>
                            </select>

                        </label>
                    </form>
                </fieldset>
                </div>
            </div>
        </div>
    )
}