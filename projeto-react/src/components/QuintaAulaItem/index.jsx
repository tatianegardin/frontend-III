import { Component, Fragment } from "react"
import "./style.scss"

export function QuintaAulaItem(props) {
    console.log(props)
    return(
        <li>
            <img src={props.item.image}/>
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
        </li>
    )
}