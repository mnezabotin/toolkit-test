import { HashRouter, Route, Navigate, Routes } from "react-router-dom";
import Repositories from './pages/Repositories'
import Repository from './pages/Repository'

export default (): JSX.Element => (
  <>
    <HashRouter>
      <Routes>
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/repositories/:id" element={<Repository />} />
        <Route path="*" element={<Navigate to='/repositories' replace />} />
      </Routes>
    </HashRouter>
  </>
)
