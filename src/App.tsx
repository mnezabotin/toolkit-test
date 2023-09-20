import { HashRouter, Route, Navigate, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Repositories from './pages/Repositories'
import Repository from './pages/Repository'
import PropTypes from 'prop-types'
// @ts-ignore
const App = ({ store }): JSX.Element => (
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/repositories/:id" element={<Repository />} />
        <Route path="*" element={<Navigate to='/repositories' replace />} />
      </Routes>
    </HashRouter>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
