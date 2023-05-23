import { RouterProvider } from 'react-router-dom'
import router from './router'
import Header from './components/Header'

export default (): JSX.Element => (
  <>
    <Header />
    <RouterProvider router={router} />
  </>
)
