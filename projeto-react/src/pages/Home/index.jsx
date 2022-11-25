import { Link, Outlet } from "react-router-dom"

export function Home() {
    const path = [
        { name: "Segunda aula", value: "segunda-aula" },
        { name: "Terceira aula", value: "terceira-aula" },
        { name: "Quarta aula", value: "quarta-aula" },
        { name: "Quinta aula", value: "quinta-aula" },
        { name: "Decima quinta aula", value: "decima-quinta-aula" },
        { name: "DH Games", value: "dh-games" }
    ]

    return (
        <div>
            <header>
            <h1>Layout Principal</h1>
                <ul>
                    {
                        path.map(path => {
                            return (
                                <>
                                    <li>
                                        <Link to={path.value}>{path.name}</Link>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}