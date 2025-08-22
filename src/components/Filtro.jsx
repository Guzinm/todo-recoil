function Filtro({nome, ativado, onClick}) {
    return (
        <label><input type="radio" name="filtro" onChange={()=>{onClick(nome)}} checked={nome == ativado}/> {nome}</label>
    )
}

export default Filtro;