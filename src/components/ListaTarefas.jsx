import { useRecoilState, useRecoilValue } from "recoil"
import { tarefasFiltradas, tarefasState } from "../state/lista"
import Tarefa from "./Tarefa"

function ListaTarefas() {

    const tarefas = useRecoilValue(tarefasFiltradas)
    const [listaTarefa ,setListaTarefa] = useRecoilState(tarefasState)

    const handleChecked = (id) => {
        setListaTarefa(listaTarefa.map((t) => {if (t.id == id) { return {...t, state: !t.state}} return t;}))
    }

    const handleButton = (id) => {
        if (confirm("Deseja deletar está tarefa?")) {
            setListaTarefa(listaTarefa.filter((t) => t.id !== id))
        }
    }

    return (
        <div>
            <h1>Tarefas</h1>
            <ul>
                {tarefas.map((t) => (
                    <Tarefa key={t.id} tarefa={t} onChangeCheckbox={handleChecked} onChangeButton={handleButton}/>
                ))}
            </ul>
        </div>
    )
}

export default ListaTarefas