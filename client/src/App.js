import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import ResetPassword from './components/auth/resetpassword/ResetPassword';

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="resetpassword" element={<ResetPassword/>}/>
        </Routes>        
      </Router>
   
  );
}

export default App;
