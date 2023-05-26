import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Repositories from './pages/Repositories'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/repositories',
    element: <Repositories />,
  },
])
