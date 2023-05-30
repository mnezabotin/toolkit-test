import { HashRouter, Route, Navigate, Routes } from "react-router-dom";
import SignIn from './pages/SignIn'
import Repositories from './pages/Repositories'
import Repository from './pages/Repository'

export default (): JSX.Element => (
  <>
    <HashRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/repositories/:id" element={<Repository />} />
        <Route path="*" element={<Navigate to='/sign-in' replace />} />
      </Routes>
    </HashRouter>
  </>
)
