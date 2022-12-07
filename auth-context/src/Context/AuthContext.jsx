import React, { useState } from "react";

import { createContext } from "react";
export const AuthContext = createContext();
AuthContext.displayName="chandan";

function AuthContextProvider({children}){
    const [Auth,setAuth] = useState({isAuth:false,text:"login",status:"tokennotfound"});
    
    const login =(obj)=>{
      setAuth(obj)
    }
    const logout = (obj)=>{
        setAuth(obj)
    }

    return(<AuthContext.Provider value={{Auth,setAuth,login,logout}}>{children}</AuthContext.Provider>)
}

export default AuthContextProvider;