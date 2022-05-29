import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import ResetPassword from './components/auth/resetpassword/ResetPassword';
import Password from './components/password';
import NoPage from './components/nopage/NoPage';
import Welcome from './components/welcome/Welcome';
import PasswordManager from './components/passwordmanager/PasswordManager';

function App() {
  return (
  
      <Router>
        <Routes>
          <Route index element={<Welcome/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="resetpassword" element={<ResetPassword/>}/>
          <Route path="password" element={<Password/>}/>
          <Route path="passwordmanager" element={<PasswordManager/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>        
      </Router>
   
   
  );
}

export default App;
