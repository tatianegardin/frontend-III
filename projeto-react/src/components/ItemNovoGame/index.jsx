import "./style.scss"

export function ItemNovoGame(props) {
    return (
        <div className="item">
            <div className="image">
                <img src = {props.games.picture}></img>
            </div>
            <div className="descriptions">
                <div>
                    <h3>{props.games.name}</h3>
                    <h4>{props.games.plataforms.toString()}</h4>
                    <p>{props.games.categories.toString()}</p>
                </div>
                <div className="price">
                    <div>
                        <h3 >{props.games.price}</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}