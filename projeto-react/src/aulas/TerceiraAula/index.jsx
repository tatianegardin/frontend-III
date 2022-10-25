import "./style.scss"
export function TerceiraAula() {

    const componentes = [
        { nome:'Nome 1', descricao:'Descrição 1' },
        { nome:'Nome 1', descricao:'Descrição 1' }
    ];
    return(
        <main>
            <h1>Lista de componentes encontrados</h1>
            <ul>
                {
                    componentes.map(componente => (
                        <li>
                            <h4>{componente.nome}</h4>
                            <p>{componente.descricao}</p>
                        </li>
                    ))
                } 
            </ul>
        </main>
    )


}