import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth, { getCurrentUser } from '../services/authService'

  
export const AuthContext = React.createContext(null);
export function AuthProvider({ children }) {
    let [user, setUser] = React.useState();
    const navigate = useNavigate();

    useEffect(()=>{
      if(user){
      }
    },[user])
   
    useEffect(()=>{
     
    },[])
    

    let signin = async (email,password, callback) => {
        try {
            await auth.loginUser(email, password);
            setUser(auth.getCurrentUser());
            navigate("/passwordmanager");
        } catch (ex) {
        // display the errors
            console.log(ex.response.data);
        }
    
        
      
      
    };
    let signout = async (callback) => {

      setUser(undefined);
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  export function useAuth() {
    return React.useContext(AuthContext);
  }
  export function RequireAuth({ children }) {
    let authContext = useAuth();
    let location = useLocation();
  

    
    if (!authContext.user) {
      const savedUserStr = localStorage.getItem("user");
      
      
//       if(savedUserStr){
        
//         return(
//    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:100}}>

// <DotLoader color={"#dddddd"} loading={true} css={override} size={150} />
//    </div>
    
  
  
//         ) 
      
//         ;
        
//       }
      
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      console.log("Redirecting");
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
  }

