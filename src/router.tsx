import { createBrowserRouter } from 'react-router-dom'
import Repositories from './pages/Repositories'

export default createBrowserRouter([
  {
    path: '/repositories',
    element: <Repositories />,
  },
])
