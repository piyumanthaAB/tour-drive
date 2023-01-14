import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import AdminHome from './pages/admin/AdminHome';
import ClientHome from './pages/client/ClientHome';
import Home from './pages/public/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/client"  element={<ClientHome/>} />
        <Route exact path="/admin"  element={<AdminHome/>} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
