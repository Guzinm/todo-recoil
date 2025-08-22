import { atom, selector } from "recoil";

export const tarefasState = atom({
    key: "tarefasState",
    default: []
});

export const filtroState = atom({
    key: "filtroState",
    default: "Todos"
});

export const tarefasFiltradas = selector({
    key: "tarefasFiltradas",
    get: ({get})=>{
        const tarefas = get(tarefasState)
        const filtro = get(filtroState)

        switch (filtro) {
            case "Concluidos":
                return tarefas.filter(tarefa => tarefa.state);
            case "Pendentes":
                return tarefas.filter(tarefas => !tarefas.state);
            default:
                return tarefas;
        }
    },
});