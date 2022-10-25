import "./style.scss"
import youtubeImage from "./../../assets/youtube.webp"
import batataImage from "./../../assets/batata.gif"


export function QuartaAula() {

    const componentFinded = [
        {
            title: "Vídeo Component",
            image: youtubeImage,
            description: " description"
        }, {
            title: "Input Component",
            image: batataImage,
            description: " description"
        }
    ]

    return(
        <div className="quarta-aula-component">
            <h1 className="main-title">Componentes identificados</h1>
            
            <ul className="components-finded">
                {
                    componentFinded.map(component => (
                        <li>
                            <img src={component.image}/>
                            <h2>{component.title}</h2>
                            <p>{component.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}