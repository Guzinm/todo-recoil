# 📋 ToDo List com React + Recoil

Um projeto simples de lista de tarefas feito com **React** e **Recoil**, utilizando persistência no **localStorage** e filtros de visualização.

---

## 🚀 Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas / pendentes
- Excluir tarefas
- Filtrar tarefas por:
  - Todas
  - Concluídas
  - Pendentes
- Persistência no `localStorage` (as tarefas permanecem mesmo após recarregar a página)

---

## 🛠️ Tecnologias e Métodos Utilizados

- **React** → criação da interface
- **Recoil** → gerenciamento de estado global
- **useState / useEffect** → gerenciamento de estado local e efeitos colaterais
- **localStorage** → persistência dos dados
- **map / filter** → manipulação dos arrays de tarefas (atualizar, excluir, marcar concluída)
- **memo** → otimização de renderização para cada tarefa (`Tarefa`)

---

## ▶️ Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Guzinm/todo-recoil.git

2. Acesse a pasta do projeto:
    ```bash
    cd todo-recoil

3. Instale as dependências:
    ```bash
    npm install

4. Rode o projeto:
    ```bash
    npm run dev

5. Abra no navegador:
    ```bash
    http://localhost:5173/
    