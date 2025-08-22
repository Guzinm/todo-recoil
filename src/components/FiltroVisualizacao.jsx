import { useRecoilState } from "recoil"
import Filtro from "./Filtro"
import { filtroState } from "../state/lista"

function FiltroVisualizacao() {

    const filtros = ["Todos", "Concluidos", "Pendentes"]
    const [filtrosState, filtrosSetState] = useRecoilState(filtroState)

    const handleRadio = (nome) => {
        filtrosSetState(nome)
    }

    return (
        <div>
            <h1>Filtro</h1>
            {filtros.map(f => (
                <Filtro key={f} nome={f} ativado={filtrosState} onClick={handleRadio}/>
            ))}
        </div>
    )
}

export default FiltroVisualizacao