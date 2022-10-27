import "./style.scss"
import youtubeImage from "./../../assets/youtube.webp"
import batataImage from "./../../assets/batata.gif"
import { QuintaAulaItem } from "./../../components/QuintaAulaItem"

export function QuintaAula() {
    const componentFinded = [
        {
            id:1,
            title: "Vídeo Component",
            image: youtubeImage,
            description: " description"
        }, {
            id:2,
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
                        <QuintaAulaItem key= {component.id} item={component}/>
                    ))
                }
            </ul>
        </div>
    )
}