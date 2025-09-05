import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

function App() {
  const appElement = useRoutes(routes)
  return appElement
}

export default App
