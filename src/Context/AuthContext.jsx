import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
const navigate=useNavigate();

useEffect(()=>{
let token=localStorage.getItem('token');
if(token){
  const decoded=jwtDecode(token);
  setUser(decoded)
navigate('/projects')
}
},[])

  return <AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>;
};
