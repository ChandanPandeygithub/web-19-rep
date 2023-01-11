import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export function PrivateRoute({children}){
    const isAuth = useSelector(store=>store.authReducer.isAuth);
    const loacation = useLocation();
    console.log(isAuth,"privateRoute")
    if(isAuth!=true){
     return   <Navigate to={"/login"} state={loacation.pathname} replace={true} />
    }
    return children;
}