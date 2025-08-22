import { memo } from "react"

function Tarefa({tarefa, onChangeCheckbox, onChangeButton}) {
    return (
        <li><label htmlFor={`tarefa: ${tarefa.id}`} >{tarefa.tarefa} <input type="checkbox" id={`tarefa: ${tarefa.id}`} checked={tarefa.state} onChange={()=>{onChangeCheckbox(tarefa.id)}}/></label> <button onClick={()=>{onChangeButton(tarefa.id)}}>Excluir tarefa</button></li>

    )
}

export default memo(Tarefa)