import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Repositories from './pages/Repositories'
import Repository from './pages/Repository'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/repositories',
    element: <Repositories />,
  },
  {
    path: '/repositories/:id',
    element: <Repository />,
  },
])
