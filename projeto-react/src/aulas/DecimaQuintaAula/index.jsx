import { useState } from 'react'
import { DecimaQuintaAulaItem } from './../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')
    const [error, setError] = useState(false)

    function searchCep(event) {
        event.preventDefault()
        console.log(cep)

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                response.json().then(
                    address => {
                        if (address.erro !== undefined) {
                            // adicionar estilo de cep inválido
                            console.log("deu erro")
                        } else {
                            setLocations([...locations, address])
                            console.log(address)
                        }
                    }
                )
            })


    }

    return (

        <div className="decima-quarta-aula-component">

            <form >
                <h1>Cadastrar endereços</h1>

                <div>
                    <label htmlFor="">Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                        className={error ? 'error' : ''}
                    />
                </div>

                <button type='submit' onClick={event => searchCep(event)}>Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => {
                            return (
                                <DecimaQuintaAulaItem
                                    key={index}
                                    data={location}
                                />
                            )
                        }
                    )
                }

            </section>

        </div>

    )

}