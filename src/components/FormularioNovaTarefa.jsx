import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { tarefasState } from "../state/lista"

function FormularioNovaTarefa() {

    const [listaTarefas ,setListaTarefas] = useRecoilState(tarefasState);
    const [carregado, setCarregado] = useState(false)

    const [tarefa, setTarefa] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarefa.trim() == '') {
            alert("valor valido por favor.")
            return
        }
        setListaTarefas([...listaTarefas, {id: Date.now(), tarefa : tarefa.trim(), state: false}]);
        setTarefa("");
    }

    useEffect(()=>{
        if (!carregado) {return}
        localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas))
    },[listaTarefas, carregado])

    useEffect(()=>{
        setListaTarefas(JSON.parse(localStorage.getItem("listaTarefas")) || []);
        setCarregado(true)
    },[])

    return (
        <form onSubmit={handleSubmit}>
            <h1>Formulario</h1>
            <label htmlFor="tarefaid">Tarefa: <input id="tarefaid" type="text" required onChange={(e)=>{setTarefa(e.target.value)}} value={tarefa}/></label>
            <button type="submit">Enviar Tarefa</button>
        </form>
    )
}

export default FormularioNovaTarefa