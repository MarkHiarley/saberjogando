import { ServiceExcludeQuestion } from "../../services/ExcludeQuestion"



export const excludeQuestion = (id: number) => {
  return(
    <div>
        vc quer excluir a questão de id {id}? <button onClick={() => ServiceExcludeQuestion(id)}>Confirmar</button>
    </div>
  )
}