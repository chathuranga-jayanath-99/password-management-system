import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login';
import Welcome from './components/auth/welcomepage';
import PasswordManager from './components/passwordManager';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="passwordmanager" element={<PasswordManager />} />
      </Routes>
    </Router>

  );
}

export default App;
