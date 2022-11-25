import { Login } from "./pages/Login"
import { SegundaAula } from "./aulas/SegundaAula"
import { TerceiraAula } from "./aulas/TerceiraAula"
import { QuartaAula } from "./aulas/QuartaAula"
import { QuintaAula } from "./aulas/QuintaAula"
import { DHGmaes } from "./pages/DHGames"
import { DecimaQuintaAula } from "./aulas/DecimaQuintaAula"
import { Home } from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <Home />,
      children: [
        {
          path: 'segunda-aula',
          element: <SegundaAula />
        },
        {
          path: 'terceira-aula',
          element: <TerceiraAula />
        },
        {
          path: 'quarta-aula',
          element: <QuartaAula />
        },
        {
          path: 'quinta-aula',
          element: <QuintaAula />
        },
        {
          path: 'decima-quinta-aula',
          element: <DecimaQuintaAula />
        },
        {
          path: 'dh-games',
          element: <DHGmaes />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
