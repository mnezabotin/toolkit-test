import { createBrowserRouter, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Repositories from './pages/Repositories'
import Repository from './pages/Repository'

export default createBrowserRouter(
  [
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/repositories',
      element: <Repositories />,
    },
    {
      path: '/repositories/:id',
      element: <Repository />,
    },
    {
      path: '*',
      element: <Navigate to='/repositories' replace />
    }
  ],
  {
    basename: '/toolkit-test',
  }
)
